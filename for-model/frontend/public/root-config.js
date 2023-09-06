path: frontend/src/public
---
import { registerApplication, start } from "single-spa";

{{#boundedContexts}}
registerApplication({
  name: "@my-app/{{name}}",
  app: () => System.import("@my-app/{{name}}"),
  activeWhen: "/{{namePlural}}",
});
{{/boundedContexts}}

start();