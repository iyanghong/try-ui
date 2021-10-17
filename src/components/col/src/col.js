export default {
	name: 'TCol',
	props: {
		span: {
			type: Number,
			default: 24
		},
		tag: {
			type: String,
			default: 'div'
		},
		xs: Number,
		sm: Number,
		md: Number,
		lg: Number,
		xl: Number,
		offset: Number,
		pull: Number,
		push: Number
	},
	computed: {
		gutter() {
			let parent = this.$parent;
			while (parent && parent.$options.name !== 'TRow') {
				parent = parent.$parent;
			}
			return parent ? parent.gutter : 0;
		}
	},
	render(createElement, context) {
		let classList = [];
		let style = {};
		if (this.gutter) {
			style.paddingLeft = this.gutter / 2 + 'px';
			style.paddingRight = style.paddingLeft;
		}
		['xs', 'sm', 'md', 'lg', 'xl'].forEach(sizeKey => {
			if (typeof this[sizeKey] === 'number' && this[sizeKey] >= 0) {
				classList.push(`t-col-${sizeKey}-${this[sizeKey]}`);
			}
		});
		['span', 'offset', 'pull', 'push'].forEach(key => {
			if (this[key] || this[key] === 0) {
				classList.push(
					key !== 'span'
						? `t-col-${key}-${this[key]}`
						: `t-col-${this[key]}`
				);
			}
		});

		return createElement(this.tag, {
			class: ['t-col', classList],
			style
		}, this.$slots.default);
	}
}
