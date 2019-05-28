<template>
	<div>
		<el-breadcrumb separator="/" class="commodity-breadcrumb">
			<el-breadcrumb-item :to="{ path: '/' }" :class="{active:true}">首页</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/' }" v-for="item of 20">活动管理</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
    const cityOptions = ['上海', '北京', '广州', '深圳'];
    export default {
        name: "CommodityClassify",
        data() {
            return {
                checkboxGroup3: ['上海'],
                cities: cityOptions
            };
        }
    }
</script>
<style scoped lang="scss">
	$red: #E74D4D;
	.commodity-breadcrumb {
		margin: 1rem;
	}
</style>

<style lang="scss">
	/*修改全局样式*/
	$red: #E74D4D;
	$gray: #4D4D4D;
	$white: #ffffff;
	$black: #000000;
	$light-gray: #F3F3F3;
	$light-black: #333333;
	.commodity-breadcrumb {
		margin: 1rem;

		.el-breadcrumb {
			padding: 0 1rem;
		}

		.el-breadcrumb__item {
			margin: 0.5rem 0;
		}

		.el-breadcrumb__inner {
			font-weight: normal !important;
			color: $gray !important;
		}

		.el-breadcrumb__inner:hover {
			font-weight: bold !important;
		}

		.el-breadcrumb__inner:last-child:hover,
		.el-breadcrumb__inner.is-link:hover {
			color: $red !important;
			cursor: pointer !important;
		}

		.active .el-breadcrumb__inner {
			color: $red !important;
			font-weight: bold !important;
		}
	}
</style>

