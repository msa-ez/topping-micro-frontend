import { registerApplication, start } from "single-spa";

{{#boundedContext}}
registerApplication({
  name: "{{nameCamelCase}}",
  app: () => System.import("{{nameCamelCase}}"),
  activeWhen: "/{{namePlural}}",
});
{{#boundedContext}}

start();