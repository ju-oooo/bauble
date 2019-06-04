<template>
	<el-row>
		<el-col :md="2">&nbsp;</el-col>
		<el-col :md="20">
			<commodity-small-nav :linkList="linkList"></commodity-small-nav>
			<router-view :classifyList="classifyList"/>
	</el-col>
	</el-row>
</template>

<script>

    import CommoditySmallNav from "../../components/commodity/CommoditySmallNav";
    export default {
        name: "CommodityLD",
        components: {CommoditySmallNav},
        data() {
            return {
                linkList:[
                    {link:'commodityIndex',name:'首页'},
                    {link:'commodityList',name:'分类'},
                    ],
                classifyList: []
            }
        },
        created() {
            this.getTypeList();
        },
        methods: {
            getTypeList() {

                let url = '/commodity/type';
                this.$axios.post(url).then(res => {
                    this.classifyList = res.data.result;
                }).catch(err => {
                    this.$message("内部错误")
                })
            }
        }
    }
</script>

<style scoped>

</style>
