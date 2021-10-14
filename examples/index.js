import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import MarkdownDemoRender from './layout/MarkDownDemoRender';
import TryUi from '../src/index';
import SideNav from './layout/side-nav'
import MainHeader from './layout/header';
import Search from './layout/search'
import icons from './icons.json';
import '../src/theme/index.scss';
import './styles/index.scss';
import 'github-markdown-css/github-markdown.css'

console.log(TryUi)
Vue.component('markdown-demo-render-block', MarkdownDemoRender)
Vue.component('side-nav', SideNav)
Vue.component('main-header', MainHeader)
Vue.component('Search', Search)
Vue.use(TryUi);
Vue.prototype.$icons = icons;

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')
