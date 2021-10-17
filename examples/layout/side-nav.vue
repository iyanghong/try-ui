<template>
	<div class="side-nav">
		<template v-for="(group,index) in data">
			<template v-if="group.children">
				<div class="nav-group" :key="index">
					<div class="nav-group-name">{{ group.groupLabel || group.groupName }}</div>
					<div v-for="(nav,navIndex) in group.children" :key="navIndex" class="nav-item">
						<a :class="{'active':isActive(nav.path)}" :href="'/components' + nav.path">
							{{ nav.title }}<span class="nav-title-describe">{{ getTitleDescribe(nav) }}</span></a>
					</div>
				</div>
			</template>
			<template v-else>
				<div class="nav-item" :key="index">
					<a :class="{'active':isActive(group.path)}" :href="'/components' + group.path">{{
							group.title
						}} <span class="nav-title-describe">{{ getTitleDescribe(group) }}</span> </a>
				</div>
			</template>
		</template>
	</div>
</template>

<script>
import {firstToUpperCase} from "../../src/utils/util";

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
		},
		getTitleDescribe(nav) {
			let describe = '';
			if (nav.titleDescribe) {
				describe = nav.titleDescribe;
			} else {
				describe = firstToUpperCase(nav.path.slice(1));
			}
			return ` (${describe})`;
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
		color: #9EA4aa;
		line-height: 26px;
		margin-top: 15px;
		padding-left: 8px;
	}

	.nav-item {
		a {
			@include aActive;
			padding-left: 15px;
			&.active .nav-title-describe,
			&:hover .nav-title-describe{
				color: #1E9FFF;
			}
		}


	}

	.nav-title-describe {
		font-size: .8em;
		color: #9EA4aa;
	}
}
</style>
