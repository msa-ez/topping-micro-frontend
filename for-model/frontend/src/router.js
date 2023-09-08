path: {{name}}/frontend/src
---
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            exact: true,
        },

{{#boundedContexts}}
    {{#aggregates}}
        {
            path: '/{{boundedContext.namePlural}}/{{namePlural}}',
            name: '{{boundedContext.namePascalCase}}{{namePascalCase}}Manager',
        },
        {
            path: '/{{boundedContext.namePlural}}/{{namePlural}}/:id',
            name: '{{boundedContext.namePascalCase}}{{namePascalCase}}Detail',
        },
    {{/aggregates}}

    {{#viewes}}
        {
            path: '/{{namePlural}}',
            name: '{{namePascalCase}}View',
        },
        {
            path: '/{{namePlural}}/:id',
            name: '{{namePascalCase}}ViewDetail',
        },
    {{/viewes}}
{{/boundedContexts}}

    ]
})
