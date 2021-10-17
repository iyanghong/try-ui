import Tooltip from './tooltip.js';

let $tooltip = null;
export default {
	name: 'TTooltip',
	inserted(el, binding) {
		let placement = 'top';
		for (let key in binding.modifiers) {
			if (['top', 'bottom', 'left', 'right'].indexOf(key) > -1) {
				placement = key;
			}
		}
		let trigger = 'hover';
		if (['hover', 'click', 'focus'].indexOf(binding.arg) > -1) {
			trigger = binding.arg;
		}
		$tooltip = new Tooltip(el, binding.value, placement, trigger);
	},
	unbind() {
		$tooltip.destroy();
	}
}
