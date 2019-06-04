<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right" class="commodity-breadcrumb">
			<el-breadcrumb-item
					v-for="(item,index) of linkList"
					:key="index"
					:to="{ name: item.link}">{{item.name}}
			</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
    export default {
        name: "CommoditySmallNav",
        props: ['linkList']

    }
</script>

<style scoped lang="scss">
	@import '../../assets/css/commodity-color-theme';
	/*修改第二导航样式*/
	.el-breadcrumb {
		padding: 1rem 0.5rem;
		margin: 1rem;
		background-color: $light-gray;
	}
</style>
