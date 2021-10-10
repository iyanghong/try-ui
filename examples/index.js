import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import MarkdownDemoRender from './layout/MarkDownDemoRender'
import TryUi from '../src/index'

console.log(TryUi)
Vue.component('markdown-demo-render-block', MarkdownDemoRender)
Vue.use(TryUi);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')