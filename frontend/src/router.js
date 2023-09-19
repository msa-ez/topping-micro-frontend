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
            path: '/{{boundedContext.namePlural}}/{{namePlural}}',
            name: '{{boundedContext.namePascalCase}}{{namePascalCase}}Manager',
            component: {{boundedContext.namePascalCase}}{{namePascalCase}}Manager,
        },
        {
            path: '/{{boundedContext.namePlural}}/{{namePlural}}/:id',
            name: '{{boundedContext.namePascalCase}}{{namePascalCase}}Detail',
            component: {{boundedContext.namePascalCase}}{{namePascalCase}}Detail,
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
        {
            path: '/',
            name: 'Home',
            component: Home
        },
    ]
})
