import VueRouter from "vue-router";
import Vue from "vue";
import routes from "../routes.config";
import NProgress from 'nprogress'

const baseSiteName = 'Try UI';
Vue.use(VueRouter)

/**
 * @param {String} title 即时更新标题
 */
function changeTitle(title) {
    if (title) {
        document.title = title;
    } else {
        document.title = process.env.VUE_APP_TITLE;
    }
}

NProgress.configure({showSpinner: false}); // NProgress Configuration

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.changeTitle = changeTitle;
/**
 * 路由权限拦截
 */
router.beforeEach((to, from, next) => {
    NProgress.start()
    changeTitle(to.meta.title || baseSiteName)
    next();
});

router.afterEach((to) => {
    NProgress.done();
});

export default router;