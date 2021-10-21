/**
 * Created by yh on 2021/1/29
 */
import highlight from 'highlight.js'
import {loadCss} from "../../utils/async-load";
export default {
    name: 'highlight',
    inserted(el) {
		loadCss('https://cdn.bootcdn.net/ajax/libs/highlight.js/10.5.0/styles/github.min.css');
		const blocks = el.querySelectorAll('pre code')
		blocks.forEach(block => {
			highlight.highlightBlock(block)
		})
    }
}
