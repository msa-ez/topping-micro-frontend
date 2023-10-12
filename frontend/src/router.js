forEach: BoundedContext
fileName: router.js
path: {{nameCamelCase}}/frontend/src
---
import Vue from 'vue'
import Router from 'vue-router'

{{#aggregates}}
    {{#if uiStyle.layout}}
import {{boundedContext.namePascalCase}}{{namePascalCase}}Manager from "./components/listers/{{boundedContext.namePascalCase}}{{namePascalCase}}{{#layoutPascalCase uiStyle.layout}}{{/layoutPascalCase}}"
    {{else}}
import {{boundedContext.namePascalCase}}{{namePascalCase}}Manager from "./components/listers/{{boundedContext.namePascalCase}}{{namePascalCase}}Cards"
    {{/if}}
import {{boundedContext.namePascalCase}}{{namePascalCase}}Detail from "./components/listers/{{boundedContext.namePascalCase}}{{namePascalCase}}Detail"
{{/aggregates}}

{{#viewes}}
import {{namePascalCase}}View from "./components/{{namePascalCase}}View"
import {{namePascalCase}}ViewDetail from "./components/{{namePascalCase}}ViewDetail"
{{/viewes}}

Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    {{#aggregates}}
        { 
            path: '/{{../namePlural}}/{{namePlural}}',
            name: '{{../namePascalCase}}{{namePascalCase}}Manager',
            component: {{../namePascalCase}}{{namePascalCase}}Manager,
        },
        {
            path: '/{{../namePlural}}/{{namePlural}}/:id',
            name: '{{../namePascalCase}}{{namePascalCase}}Detail',
            component: {{../namePascalCase}}{{namePascalCase}}Detail,
        },
    {{/aggregates}}
    {{#views}}
        {
            path: '/{{namePlural}}',
            name: '{{namePascalCase}}View',
            component: {{namePascalCase}}View,
        },
        {
            path: '/{{namePlural}}/:id',
            name: '{{namePascalCase}}ViewDetail',
            component: {{namePascalCase}}ViewDetail,
        },
    {{/views}}
    ]
})
