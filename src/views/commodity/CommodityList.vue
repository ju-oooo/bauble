<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right" class="commodity-breadcrumb">
			<el-breadcrumb-item :to="{ name: 'commodityIndex'}" :class="{active:true}">首页</el-breadcrumb-item>
			<el-breadcrumb-item :to="{ name: 'commodityList' }">分类</el-breadcrumb-item>
			<!--			<el-breadcrumb-item :to="{ name: 'commodityDetail' }">详情</el-breadcrumb-item>-->
		</el-breadcrumb>
		<commodity-classify></commodity-classify>
		<el-row class="p-list">
			<el-col :xs="11" :sm="8" :md="4" :offset="2" class="item">
				<div>
					<img src="../../assets/img/commodity/product-9.jpg" alt="">
				</div>
				<p class="title">漫威联名款洛基跑鞋彩虹桥洛基跑鞋</p>
				<p class="price">￥529.00</p>
				<a href="javascript:;" class="elect">立刻购买</a>
			</el-col>
			<el-col :xs="11" :sm="8" :md="4" class="item">
				<div>
					<img src="../../assets/img/commodity/product-9.jpg" alt="">
				</div>
				<p class="title">漫威联名款洛基跑鞋彩虹桥洛基跑鞋</p>
				<p class="price">￥529.00</p>
				<a href="javascript:;" class="elect">立刻购买</a>
			</el-col>
			<el-col :xs="11" :sm="8" :md="4" class="item">
				<div>
					<img src="../../assets/img/commodity/product-9.jpg" alt="">
				</div>
				<p class="title">漫威联名款洛基跑鞋彩虹桥洛基跑鞋</p>
				<p class="price">￥529.00</p>
				<a href="javascript:;" class="elect">立刻购买</a>
			</el-col>
			<el-col :xs="11" :sm="8" :md="4" class="item">
				<div>
					<img src="../../assets/img/commodity/product-9.jpg" alt="">
				</div>
				<p class="title">漫威联名款洛基跑鞋彩虹桥洛基跑鞋</p>
				<p class="price">￥529.00</p>
				<a href="javascript:;" class="elect">立刻购买</a>
			</el-col>
			<el-col :xs="11" :sm="8" :md="4" class="item">
				<div>
					<img src="../../assets/img/commodity/product-9.jpg" alt="">
				</div>
				<p class="title">漫威联名款洛基跑鞋彩虹桥洛基跑鞋</p>
				<p class="price">￥529.00</p>
				<a href="javascript:;" class="elect">立刻购买</a>
			</el-col>
		</el-row>
	</div>
</template>

<script>
    import CommodityClassify from "../../components/commodity/CommodityClassify";

    export default {
        name: "CommodityList",
        components: {CommodityClassify}
    }
</script>

<style scoped lang="scss">
	$red: #E74D4D;
	$gray: #4D4D4D;
	$white: #ffffff;
	$black: #000000;
	$light-gray: #F3F3F3;
	$light-c-gray: #D8D8D8;
	$light-black: #333333;
	$dark-red: #DD0000;
	/*商品*/
	.p-list {

		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: left;

		.item {
			box-sizing: border-box;
			margin: 0.5rem;
			padding: 1rem;
			overflow: hidden;
			color: $gray;

			&:hover {
				box-shadow: 0 0 40px $light-c-gray;
			}

			div {
				font-size: 0;
				overflow: hidden;

				img {
					width: 100%;
					transition: all 0.6s;

					&:hover {
						cursor: pointer;
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

	/*修改第二导航样式*/
	.el-breadcrumb {
		padding: 1rem 0.5rem;
		margin: 1rem;
		background-color: $light-gray;
	}
</style>
