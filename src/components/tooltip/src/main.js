import Tooltip from "./tooltip.js";

export default {
	name: "TTooltip",
	props: {
		trigger: {
			type: String,
			default: 'hover'
		},
		content: String,
		placement: {
			type: String,
			default: 'top'
		}
	},
	data() {
		return {
			$tooltip: null
		}
	},
	mounted() {
		let element = this.getFirstElement();
		this.$tooltip = new Tooltip(element.elm, this.$slots.content || this.content, this.placement, this.trigger);
	},
	beforeDestroy() {
		this.$tooltip.destroy();
	},
	render() {
		let element = this.getFirstElement();
		return element || null;
	},
	methods: {
		getFirstElement() {
			const slots = this.$slots.default;
			if (!Array.isArray(slots)) return null;
			let element = null;
			for (let index = 0; index < slots.length; index++) {
				if (slots[index] && slots[index].tag) {
					element = slots[index];
				}
			}
			return element;
		}
	}
}
