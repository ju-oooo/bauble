<template>
	<div>
		<el-breadcrumb separator="/" class="commodity-breadcrumb">
			<el-breadcrumb-item :to="{ path: '/' }" :class="{active:true}">分类</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ path: '/' }" v-for="item of 20" :key="item">分类{{item}}</el-breadcrumb-item>
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
	@import '../../assets/css/commodity-color-theme';
	/*修改全局样式*/
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

