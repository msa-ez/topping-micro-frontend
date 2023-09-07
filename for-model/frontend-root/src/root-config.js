path: frontend-root/src
---
import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@my-app/home",
  app: () => System.import("@my-app/home"),
  activeWhen: "/",
});

{{#boundedContexts}}
registerApplication({
  name: "@my-app/{{name}}",
  app: () => System.import("@my-app/{{name}}"),
  activeWhen: "/{{namePlural}}",
});
{{/boundedContexts}}

start();