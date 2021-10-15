<template>
	<div class="main-header">
		<div class="header-left">
			<div class="logo"><span>Try UI</span></div>
			<div class="header-nav">
				<div class="header-nav-item"><a href="">首页</a></div>
				<div class="header-nav-item"><a :class="{'active':routePath.indexOf('/components') === 0}"
												href="">组件</a></div>
			</div>
			<search></search>
		</div>


		<div class="header-right header-nav">
			<div class="header-nav-item"><a href="">English</a></div>
			<div class="header-nav-item"><a href="">主题</a></div>
			<div class="header-nav-item"><a target="_blank" href="https://github.com/iyanghong/try-ui">GitHub</a></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "MainHeader",
	data() {
		return {}
	},
	computed: {
		routePath() {
			return this.$route.path;
		}
	},
	created() {
	}
}
</script>

<style lang="scss">
@import "src/theme/mixins/mixins";

.main-header {
	background-color: #fff;
	@mixin headerFlex {
		display: flex;
		flex-wrap: nowrap;
		align-content: center;
		align-items: center;
	}
	height: 60px;
	position: fixed;
	left: 0;
	right: 0;
	z-index: 1;
	border-bottom: 1px solid $border-color;
	@include headerFlex;
	color: $text-color;
	justify-content: space-between;

	.header-left, .header-right {
		@include headerFlex;
	}

	.logo {
		font-size: 22px;
		line-height: 60px;
		width: 200px;
		padding-left: 30px;

	}

	.header-nav {
		display: flex;
		flex-wrap: nowrap;
		margin-right: 20px;

		.header-nav-item {
			width: 60px;
			text-align: center;

			a {
				@include aActive;
			}
		}
	}

	.header-right {

	}
}
</style>
