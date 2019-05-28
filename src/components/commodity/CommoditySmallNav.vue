<template>
    <div>
        <el-breadcrumb separator-class="el-icon-arrow-right" class="commodity-breadcrumb">
            <el-breadcrumb-item :to="{ name: 'commodityIndex'}" :class="{active:true}">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ name: 'commodityList' }">分类</el-breadcrumb-item>
            <!--			<el-breadcrumb-item :to="{ name: 'commodityDetail' }">详情</el-breadcrumb-item>-->
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: "CommoditySmallNav"
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