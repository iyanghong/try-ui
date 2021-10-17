<template>
	<div class="t-space" :class="[
		'is-justify--' + justify,
		align ? 'is-align--' + align : '',
		{
			'is-vertical':vertical
		}
	]"
		 :style="{'--t-space-gutter' : this.gutter + 'px'}"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "TSpace",
	props: {
		justify: {
			type: String,
			default: 'start'
		},
		align: String,
		gutter: {
			type: Number,
			default: 12
		},
		vertical: Boolean
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
