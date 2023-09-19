fileName: root-config.js
---
import { registerApplication, start } from 'single-spa';
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

const routes = constructRoutes(`
<single-spa-router mode="hash" base="/">
<div style="display: flex;">
  <div>
    <application name="@my-app/home"></application>
  </div>
  <div>
{{#boundedContexts}}
    <route path="{{namePlural}}">
      <application name="@my-app/{{name}}"></application>
    </route>
{{/boundedContexts}}
  </div>
<div>
</single-spa-router>
`);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();