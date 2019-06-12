<template>
	<el-row>
		<el-col :md="2">&nbsp;</el-col>
		<el-col :md="20">
			<commodity-small-nav></commodity-small-nav>
			<router-view/>
	</el-col>
	</el-row>
</template>

<script>
    import CommoditySmallNav from "@/components/commodity/CommoditySmallNav";
    export default {
        name: "CommodityLD",
        components: {CommoditySmallNav},
        data() {
            return {
                // linkList:[
                //     {link:'commodityIndex',name:'首页'},
                //     {link:'commodityList',name:'分类'},
                //     ],
            }
        },
        created() {
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
