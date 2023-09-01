import { registerApplication, start } from "single-spa";

{{#boundedContexts}}
registerApplication({
  name: "{{nameCamelCase}}",
  app: () => System.import("{{nameCamelCase}}"),
  activeWhen: "/{{namePlural}}",
});
{{#boundedContexts}}

start();