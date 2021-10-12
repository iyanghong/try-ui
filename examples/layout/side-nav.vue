<template>
	<div class="side-nav">
		<template v-for="(group,index) in data">
			<template v-if="group.children">
				<div class="nav-group" :key="index">
					<div class="nav-group-name">{{ group.groupLabel || group.groupName }}</div>
					<div v-for="(nav,navIndex) in group.children" :key="navIndex" class="nav-item">
						<a :class="{'active':isActive(nav.path)}" :href="'/components' + nav.path">{{
								nav.title
							}}</a>
					</div>
				</div>
			</template>
			<template v-else>
				<div class="nav-item" :key="index">
					<a :class="{'active':isActive(group.path)}" :href="'/components' + group.path">{{
							group.title
						}}</a>
				</div>
			</template>
		</template>
	</div>
</template>

<script>
export default {
	name: "side-nav",
	props: {
		data: Array
	},
	computed: {
		routePath() {
			return this.$route.path;
		}
	},
	data() {
		return {}
	},
	created() {
	},
	methods: {
		isActive(path) {
			let lastIndex = this.routePath.lastIndexOf('/');
			if (lastIndex > -1) {
				return path === this.routePath.slice(lastIndex);
			}
			return path === this.routePath;
		}
	}
}
</script>

<style lang="scss">
@import "src/theme/mixins/mixins";

.side-nav {
	position: fixed;
	top: 0;
	bottom: 0;
	width: 200px;
	background: #ffffff;
	border-right: 1px solid $border-color;

	.nav-group-name {
		font-size: 12px;
		color: #999;
		line-height: 26px;
		margin-top: 15px;
		padding-left: 8px;
	}

	.nav-item {
		a {
			@include aActive;
			padding-left: 15px;
		}


	}
}
</style>
