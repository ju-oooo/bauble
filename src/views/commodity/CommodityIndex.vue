<template>
	<div>
		<Header :activeIndex="'/commodity'" :backgroundColor="'#fff'" :color="'#545C64'"></Header>
		<el-row class="">
			<el-col :span="24">
				<el-carousel indicator-position="outside" trigger="click" height="500px">
					<el-carousel-item v-for="(item,index) in slideList" :key="index">
						<img ref="img" :src="require('../../assets/img/commodity/'+item)" :alt="index"/>
					</el-carousel-item>
				</el-carousel>
			</el-col>
		</el-row>
		<el-row class="hotProduct">
			<el-col :md="12" class="series series-1">
				<img src="../../assets/img/commodity/product-3.jpg" alt="">
				<div class="elect">
					<a href="#">
						立即选购
					</a>
				</div>
				<p class="title">篮球明星战靴</p>
				<p>
					<span>汤普森四代</span>
					<span>要疯系列</span>
					<span>篮球服装</span>
				</p>
			</el-col>
			<el-col :md="12" class="series series-1">
				<div>
					<img src="../../assets/img/commodity/product-2.jpg" alt="">
					<div class="elect">
						<a href="#">
							立即选购
						</a>
					</div>
				</div>
				<p class="title">跑步系列</p>
				<p>
					<span>闪能科技跑鞋</span>
					<span>夏季新款</span>
					<span>舒适气垫</span>
					<span>跑步服装</span>
				</p>
			</el-col>
		</el-row>
		<el-row class="hotProduct">
			<el-col :md="8" class="series series-2">
				<img src="../../assets/img/commodity/product-3.jpg" alt="">
				<div class="elect">
					<a href="#">
						立即选购
					</a>
				</div>
				<p class="title">时尚潮服系列</p>
			</el-col>
			<el-col :md="8" class="series series-2">
				<img src="../../assets/img/commodity/product-3.jpg" alt="">
				<div class="elect">
					<a href="#">
						立即选购
					</a>
				</div>
				<p class="title">2019年夏上新</p>
			</el-col>
			<el-col :md="8" class="series series-2">
				<img src="../../assets/img/commodity/product-3.jpg" alt="">
				<div class="elect">
					<a href="#">
						立即选购
					</a>
				</div>
				<p class="title">复古呈新 安踏休闲系列</p>
			</el-col>
		</el-row>
	</div>

</template>

<script>
    import Header from '../../components/include/Header'

    export default {
        name: "CommodityIndex",
        components: {Header},
        data() {
            return {
                slideList: ['slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg']
            }
        }
    }
</script>

<style lang="scss">
	$red: #E74D4D;
	$gray: #4D4D4D;
	$white: #ffffff;
	$black: #000000;
	$light-gray: #F3F3F3;
	$light-black: #333333;
	/*二楼*/
	.hotProduct {
		display: flex;
		justify-content: center;
	}

	.series-1 {
		position: relative;
		font-size: 0;
		max-width: 45rem;
		margin: 3rem 1rem;
	}

	.series-2 {
		position: relative;
		font-size: 0;
		max-width: 30rem;
		margin: 3rem 1rem;
	}

	.series {
		img {
			width: 100%;
		}

		.elect {
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			opacity: 0;


			&:hover {
				opacity: 1;
				background-color: rgba($black, 0.4);
			}

			a {
				position: absolute;
				display: block;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				margin: auto;
				width: 8rem;
				height: 2.5rem;
				line-height: 2.5rem;
				color: $white;
				font-size: 0.9rem;
				font-weight: bolder;
				border: 0.05rem solid $white;
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
					background-color: $white;
					transition: all 0.3s;
				}

				&:hover {
					color: $black;
				}

				&:hover::after {
					width: 100%;
				}
			}
		}

		.title {
			position: absolute;
			left: 0;
			right: 0;
			margin: auto;
			padding: 1rem 0;
			font-size: 1.1rem !important;
			font-weight: bolder;
		}

		p {
			position: absolute;
			font-size: 0;
			left: 0;
			right: 0;
			margin: 3rem auto;

			span {
				padding: 1rem 0;
				position: relative;
				font-size: 0.9rem;

				&:hover {
					cursor: pointer;
					color: $red;
				}

				&:hover:before {
					color: $black;
				}

				& + span::before {
					content: "|";
					padding: 0 0.5rem;
				}
			}
		}
	}


	/*img {*/
	/*	width: 100%;*/
	/*	min-height: 360px;*/
	/*	min-width: 1400px;*/
	/*	height: auto;*/
	/*}*/

	/*修改轮播图*/
	/*修改指示器*/
	.is-active .el-carousel__button {
		background-color: #E74D4D !important;
	}

	/*.el-carousel__indicators--outside button*/
	.el-carousel__indicator button:hover {
		background-color: #E74D4D !important;
	}

	.el-carousel__button {
		text-align: left;
		position: relative;
		width: 15rem !important;
		padding: 0.5rem 2rem !important;
		height: auto !important;
		color: #fff;
		opacity: 1 !important;
		background-color: #4D4D4D !important;
	}

	.el-carousel__indicator:nth-child(1) .el-carousel__button:before {
		text-align: center;
		content: '新款气垫';
		display: block;
	}

	.el-carousel__indicator:nth-child(2) .el-carousel__button:before {
		text-align: center;
		content: 'KT4定制';
		display: block;
	}

	.el-carousel__indicator:nth-child(3) .el-carousel__button:before {
		text-align: center;
		content: '放肆街头';
		display: block;
	}

	.el-carousel__indicator:nth-child(4) .el-carousel__button:before {
		text-align: center;
		content: '漫威联名';
		display: block;
	}
</style>
