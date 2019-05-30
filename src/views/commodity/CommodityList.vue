<template>
	<div>
		<commodity-classify></commodity-classify>
		<el-row class="p-list" justify="start">
			<router-link :to="{name:'commodityDetails'}" v-for="commodity of commodityList">
				<el-col :xs="12" :sm="8" :md="6" :xl="4" class="item">
					<div>
						<img src="../../assets/img/commodity/product-9.jpg" alt="">
					</div>
					<p class="title">漫威联名款洛基跑鞋彩虹桥洛基跑鞋</p>
					<p class="price">￥529.00</p>
					<a href="javascript:;" class="elect">立刻购买</a>
				</el-col>
			</router-link>
		</el-row>
	</div>
</template>

<script>
    import CommodityClassify from "../../components/commodity/CommodityClassify";

    export default {
        name: "CommodityList",
        components: {CommodityClassify},
        data() {
            return {
                commodityList: []
            }
        }, methods: {
            getCommodity() {
                this.$axios.post().then(res => {

                }).catch(err => {

                })
            }
        }
    }
</script>

<style scoped lang="scss">
	@import '../../assets/css/commodity-color-theme';
	/*商品*/
	.p-list {
		padding: 1rem;

		.item {
			box-sizing: border-box;
			/*margin: 0.5rem;*/
			padding: 1rem;
			overflow: hidden;
			color: $gray;

			&:hover {
				box-shadow: 0 0 40px $light-c-gray;
				color: $red;
				cursor: pointer;
			}

			div {
				font-size: 0;
				overflow: hidden;

				img {
					width: 100%;
					transition: all 0.4s;

					&:hover {
						transform: scale(1.2);
					}
				}
			}

			.title {
				display: block;
				padding: 0.75rem 0 0.25rem 0;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}

			.price {
				color: $red;
				display: block;
				font-size: 1.2rem;
				padding: 0.25rem 0;
			}

			.elect {
				color: $black;
				display: block;
				margin: 0.25rem auto;
				width: 5rem;
				border: 0.05rem solid $gray;
				padding: 0 1rem;
				font-weight: bolder;
				font-size: 0.8rem;
				position: relative;
				height: 2rem;
				line-height: 2rem;
				text-align: center;
				border-radius: 0.25rem;
				background-color: transparent;
				z-index: 1;
				transition: all 0.3s;

				&::after {
					top: 0;
					left: 0;
					position: absolute;
					content: "";
					width: 0;
					height: 100%;
					z-index: -1;
					display: block;
					background-color: $dark-red;
					transition: all 0.3s;
				}

				&:hover {
					color: $white;
				}

				&:hover::after {
					width: 100%;
				}

			}

		}
	}
</style>
