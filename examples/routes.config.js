/**
 * Created by yh on 2021/7/21
 */
export default [
    {
        path: '/',
        component: () => import('./layout/index.vue'),
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('./components/Home.vue')
            },
            {
                path: 'input',
                name: 'Input',
                component: () => import('./docs/input.md')
            }
        ]
    }
]