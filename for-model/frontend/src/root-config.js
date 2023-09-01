fileName: root-config.js
path: frontend/src
---
import singleSpa from "single-spa";

{{#boundedContexts}}
singleSpa.registerApplication({
  name: "{{nameCamelCase}}",
  app: () => System.import("{{nameCamelCase}}"),
  activeWhen: "/{{namePlural}}",
});
{{#boundedContexts}}

singleSpa.start();