fileName: root-config.js
path: frontend/src
---
import single-spa from "single-spa";

{{#boundedContexts}}
single-spa.registerApplication({
  name: "{{nameCamelCase}}",
  app: () => System.import("{{nameCamelCase}}"),
  activeWhen: "/{{namePlural}}",
});
{{#boundedContexts}}

single-spa.start();