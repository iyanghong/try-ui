export default {
	name: 'TRow',
	props: {
		justify: {
			type: String,
			default: 'start'
		},
		align: String,
		gutter: Number,
		tag: {
			type: String,
			default: 'div'
		}
	},
	computed: {
		style() {
			const ret = {};
			if (this.gutter) {
				ret.marginLeft = `-${this.gutter / 2}px`;
				ret.marginRight = ret.marginLeft;
			}
			return ret;
		}
	},
	render(createElement) {
		return createElement(this.tag, {
			class: [
				't-row',
				'is-justify--' + this.justify,
				this.align ? 'is-align--' + this.align : ''
			],
			style: this.style
		}, this.$slots.default);
	}
}
