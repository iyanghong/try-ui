<template>
	<div class="demo-color">
		<h3>主要色调</h3>
		<ul class="demo-color-list">
			<li class="brand-color"><span>Brand Color</span>#1E9FFF</li>
		</ul>

		<h3>辅助色</h3>
		<ul class="demo-color-list">
			<li class="success-color"><span>Success Color</span>#36ad6a</li>
			<li class="warning-color"><span>Warning Color</span>#fcb040</li>
			<li class="danger-color"><span>Danger Color</span>#d03050</li>
			<li class="info-color"><span>Info Color</span>#95949A</li>
		</ul>

		<h3>七种色</h3>
		<ul class="demo-color-list">
			<li class="red-color"><span>赤色</span>#FF4500</li>
			<li class="orange-color"><span>橙色</span>#FF8C00</li>
			<li class="green-color"><span>墨绿</span>#009688</li>
			<li class="cyan-color"><span>藏青</span>#2F4056</li>
			<li class="blue-color"><span>蓝色</span>#1E9FFF</li>
			<li class="black-color"><span>雅黑</span>#393D49</li>
			<li class="gray-color"><span>银灰</span>#666</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "color",
	data() {
		return {}
	},
	created() {
	}
}
</script>

<style lang="scss">
.demo-color {
	color: $text-color;

	h3 {
		margin: 55px 0 20px;
	}
}

.demo-color-list {
	display: flex;
	list-style: none;
	flex-wrap: wrap;
	li {
		width: 150px;
		height: 80px;
		border: 1px solid $border-color;
		color: #fff;
		text-align: center;
		border-radius: 5px;
		line-height: 1.6;
		font-size: 14px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-right: 12px;
		margin-top: 12px;
	}

	.brand-color {
		background-color: $blue;
	}

	.success-color {
		background-color: $success-color;
	}

	.warning-color {
		background-color: $warning-color;
	}

	.danger-color {
		background-color: $danger-color;
	}

	.info-color {
		background-color: $info;
	}

	.red-color {
		background-color: $red;
	}

	.orange-color {
		background-color: $orange;
	}

	.green-color {
		background-color: $green;
	}

	.cyan-color {
		background-color: $cyan;
	}

	.blue-color {
		background-color: $blue;
	}

	.black-color {
		background-color: $black;
	}

	.gray-color {
		background-color: $gray;
	}
}
</style>
