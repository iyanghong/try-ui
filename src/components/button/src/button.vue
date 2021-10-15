<template>
	<button
		:type="nativeType"
		:class="[
			't-button',
			type ? 't-button--' + type : 't-button--default',
			size ? 't-button--' + size : '',
			{
				'is-disabled' : disabled,
				'is-round' : round,
			}
		]"
	>
		<i :class="icon" v-if="icon"></i>
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>

<script>
export default {
	name: "TButton",
	props: {
		type: {
			type: String,
			default: 'default'
		},
		size: String,
		icon: {
			type: String,
			default: ''
		},
		disabled: Boolean,
		nativeType: {
			type: String,
			default: 'button'
		},
		round: Boolean
	},
	data() {
		return {}
	},
	created() {
	}
}
</script>

<style lang="scss" scoped>

</style>
