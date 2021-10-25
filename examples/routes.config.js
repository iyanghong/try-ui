/**
 * Created by yh on 2021/7/21
 */

import navConfig from './nav.config.json';
import {isArray} from "../src/utils/types";


/*const modulesFiles = require.context('./docs', true, /\.md$/)
const docKeys = modulesFiles.keys();*/
const loadDoc = function (path) {
    return r => require.ensure([], () =>
            r(require(`./docs${path}.md`)),
        'demo');
}
const loadComponent = function (component) {
    return r => require.ensure([], () =>
            r(require(`./components/${component}.vue`)),
        'zh-CN');
}


const registerRoute = function (navConfig) {
    let routes = [];
    Object.keys(navConfig).forEach((lang, index) => {
        let navs = navConfig[lang];

        navs.forEach(nav => {
            if (nav.href) return;
            if (nav.children && isArray(nav.children)) {
                nav.children.forEach(child => {
                    addRoute(child, -1)
                })
            } else {
                addRoute(nav, -1)
            }
        })
    })

    function addRoute(page, index) {
        let component;
        let isMarkdown = true;
        if (page.component) {
            component = loadComponent(page.component);
            isMarkdown = false;
        } else {
            /*let path = `.${page.path}.md`;
            if (docKeys.indexOf(path) === -1) return;
            component = modulesFiles(path);*/
            component = loadDoc(page.path)
        }
        let path = page.path.slice(1);
        let route = {
            path,
            meta: {
                title: page.title || page.name,
                description: page.description,
                isMarkdown
            },
            name: 'component-' + (path || page.name || page.title),
            component: component.default || component
        };
        index === -1 ? routes.push(route) : routes[index].children.push(route);
    }

    return routes;
}

let routes = registerRoute(navConfig);
let defaultRoute = process.env.DEFAULT_ROUTER;
export default [
    {
        path: '/components',
        name: 'Examples',
        component: () => import('./layout/index'),
        children: routes
    },
    {
        path: '/',
        redirect: {
            name: defaultRoute
        }
    },
    {
        path: '*',
        redirect: {
            name: defaultRoute
        }
    }
];
