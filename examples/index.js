import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import MarkdownDemoRender from './layout/MarkDownDemoRender';
import TryUi from '../src/index';
import SideNav from './layout/side-nav'
import MainHeader from './layout/header';
import Search from './layout/search'
import '../src/theme/input.scss';
import './styles/index.scss';

console.log(TryUi)
Vue.component('markdown-demo-render-block', MarkdownDemoRender)
Vue.component('side-nav', SideNav)
Vue.component('main-header', MainHeader)
Vue.component('Search', Search)
Vue.use(TryUi);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')