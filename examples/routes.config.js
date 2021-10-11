/**
 * Created by yh on 2021/7/21
 */

import navConfig from './nav.config.json';
import {isArray} from "../src/utils/types";


const modulesFiles = require.context('./docs', true, /\.md$/)
const docKeys = modulesFiles.keys();

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
        let path = `.${page.path}.md`;
        if (docKeys.indexOf(path) === -1) return;
        const component = modulesFiles(path);
        let route = {
            path: page.path.slice(1),
            meta: {
                title: page.title || page.name,
                description: page.description
            },
            name: 'component-' + (page.title || page.name),
            component: component.default || component
        };
        index === -1 ? routes.push(route) : routes[index].children.push(route);
    }

    return routes;
}

let routes = registerRoute(navConfig);
let defaultPath = '/components/input';

export default [
    {
        path: '/components',
        name: 'Examples',
        component: () => import('./layout/index'),
        children: routes
    },
    {
        path: '/',
        redirect: defaultPath
    }, {
        path: '*',
        redirect: defaultPath
    }
];