<template>
	<div>
		<div class="tag">
			<el-tag v-for="(type,index) of searchList"
							:key="index"
							color="#fff"
							effect="light "
							closable
							:disable-transitions="false"
							@close="removeSearchList(index)">
				{{type.name}}
			</el-tag>
		</div>
		<el-breadcrumb v-if="catalogueTypeList.flag" class="commodity-breadcrumb">
			<el-breadcrumb-item
					class="classify-item"
					v-for="(type,index) of catalogueTypeList.typeList"
					:key="index"
					@click.native="addSearchList(index)">
				{{type.name}}
			</el-breadcrumb-item>
		</el-breadcrumb>

		<el-breadcrumb v-else class="commodity-breadcrumb">
			<el-breadcrumb-item
					@click.native="getTypeList(catalogue.id)"
					class="classify-item"
					v-for="(catalogue,index) of classifyList.catalogue"
					:key="index">{{catalogue.name}}
			</el-breadcrumb-item>
		</el-breadcrumb>

	</div>
</template>

<script>
    export default {
        name: "CommodityClassify",
        props: ['classifyList'],
        data() {
            return {
                searchList: [],
                catalogueTypeList: []
            };
        },

        methods: {
            //根据分类获取详细分类
            getTypeList(catalogueId) {

                let catalogueTypeList = {}, typeList = [], catalogue;
                this.classifyList.type.forEach((elem) => {
                    if (parseInt(elem.catalogueId) === parseInt(catalogueId)) {
                        typeList.push(elem);
                    }
                });
                this.classifyList.catalogue.forEach((elem) => {
                    if (parseInt(elem.id) === parseInt(catalogueId)) {
                        catalogue = elem;
                    }
                });
                catalogueTypeList.flag = true;
                catalogueTypeList.catalogue = catalogue;
                catalogueTypeList.typeList = typeList;
                this.catalogueTypeList = catalogueTypeList;
                this.$parent.$parent.$parent.$parent.$data.linkList.push({link: catalogue.id, name: catalogue.name})
                console.log(this.catalogueTypeList)
            },
            addSearchList(index) {
                let flag = false;
                if (this.searchList.length > 1) {
                    for (let index in this.searchList) {
                        if (this.searchList[index] === this.catalogueTypeList.typeList[index]) {
                            this.$message("此数据已添加", 'error');
                            flag = true;
                            return true;
                        }
                    }
                    // this.searchList.forEach((elem) => {
                    //     if (elem === this.catalogueTypeList.typeList[index]) {
                    //         this.$message("此数据已添加", 'error');
                    //         flag = true;
                    //         return true;
                    //     }
                    // });
                }
                if (!flag) {
                    this.searchList.push(this.catalogueTypeList.typeList[index]);
                }
            },
            removeSearchList(index) {
                this.searchList.splice(index, 1);
            },
        }
    }
</script>
<style scoped lang="scss">
	@import "../../assets/css/commodity-color-theme";

	.tag {
		margin: 1rem;
		text-align: left;

		.el-tag {
			color: $red;
			margin: 0 0.5rem 0.5rem 0;
			border: 1px solid rgba(231, 77, 77, .2);
		}
	}

	.commodity-breadcrumb {
		margin: 1rem;

		.el-breadcrumb {
			padding: 0 1rem;
		}

		.classify-item {
			margin: 0.5rem 0;
		}


	}
</style>
<style lang="scss">
	@import "../../assets/css/commodity-color-theme";

	.tag .el-icon-close:before {
		color: $red;
	}

	.tag .el-icon-close:hover:before {
		color: $white !important;
	}

	.tag .el-tag .el-icon-close:hover {

		background-color: $red !important;
	}

	.commodity-breadcrumb .el-breadcrumb__inner {
		font-weight: 700 !important;
		color: $black !important;
	}

	.commodity-breadcrumb .el-breadcrumb__inner:hover, .el-breadcrumb__inner.is-link:hover {
		color: $red !important;
		cursor: pointer !important;
	}
</style>



