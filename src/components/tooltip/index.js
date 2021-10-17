import Vue from "vue";
import TTooltip from './src/main.js';
import directive from "./src/directive";

TTooltip.install = (Vue) => {
	Vue.component(TTooltip.name, TTooltip);
}

Vue.directive('t-tooltip', directive);

export default TTooltip;
