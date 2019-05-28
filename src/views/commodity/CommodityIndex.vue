<template>
	<div>
		<el-row class="">
			<el-col :span="24">
				<el-carousel indicator-position="outside" trigger="click" height="500px">
					<el-carousel-item v-for="(item,index) in slideList" :key="index">
						<img ref="img" :src="require('../../assets/img/commodity/'+item)" :alt="index"/>
					</el-carousel-item>
				</el-carousel>
			</el-col>
		</el-row>
		<div class="hotPL">
			<el-row class="hotProduct">
				<el-col :sm="24" :md="9" class="series">
					<div class="series-hover">
						<img src="../../assets/img/commodity/product-3.jpg" alt="">
						<div class="elect">
							<a href="#">
								立即选购
							</a>
						</div>
					</div>
					<p class="title">篮球明星战靴</p>
					<p>
						<span>汤普森四代</span>
						<span>要疯系列</span>
						<span>篮球服装</span>
					</p>
				</el-col>
				<el-col :sm="24" :md="9" class="series">
					<div class="series-hover">
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
				<el-col :sm="24" :md="6" class="series">
					<div class="series-hover">
						<img src="../../assets/img/commodity/product-1.jpg" alt="">
						<div class="elect">
							<a href="#">
								立即选购
							</a>
						</div>
					</div>
					<p class="title">时尚潮服系列</p>
				</el-col>
				<el-col :sm="24" :md="6" class="series">
					<div class="series-hover">
						<img src="../../assets/img/commodity/product-4.jpg" alt="">
						<div class="elect">
							<a href="#">
								立即选购
							</a>
						</div>
					</div>
					<p class="title">2019年夏上新</p>
				</el-col>
				<el-col :sm="24" :md="6" class="series">
					<div class="series-hover">
						<img src="../../assets/img/commodity/product-5.jpg" alt="">
						<div class="elect">
							<a href="#">
								立即选购
							</a>
						</div>
					</div>
					<p class="title">复古呈新 安踏休闲系列</p>
				</el-col>
			</el-row>
		</div>
		<el-row class="newProduct">
			<p class="title">
				<span class="letter">A-FLASHFOAM闪能科技</span>
				<span class="letter">轻量化EVA高回弹复合材料，安踏自主研发，为跑者提供充足动力。</span>
			</p>

		</el-row>
		<el-row class="newProduct">
			<el-col :sm="24" :md="9" class="commodity">
				<div>
					<a href="#">
						<img src="../../assets/img/commodity/product-6.jpg" alt="">
					</a>
					<p class="title">KT篮球鞋</p>
					<p class="describe">2019新款KT篮球鞋</p>
				</div>
				<p><a href="#" class="buy">立刻购买</a></p>
			</el-col>
			<el-col :sm="24" :md="9" class="commodity">
				<div>
					<a href="#">
						<img src="../../assets/img/commodity/product-7.jpg" alt="">
					</a>
					<p class="title">连帽运动风衣女士</p>
					<p class="describe">拥有一颗运动的心永不止步，每一步都是最美的姿态</p>
				</div>
				<p><a href="#" class="buy">立刻购买</a></p>
			</el-col>

		</el-row>
	</div>
</template>

<script>
    export default {
        name: "CommodityIndex",
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

	.newProduct, .hotProduct {
		padding: 1rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

		img {
			width: 100%;
		}
	}

	/*三楼*/
	.newProduct {
		background-color: $white;

		& > .title {
			text-align: center;
			padding: 1.5rem 0;

			.letter {
				display: block;
				color: $light-black;
				padding: 0.5rem 0;

				&:first-child {
					font-size: 1.7rem;
					text-space: 1rem;
				}

				&:last-child {
					font-size: 2rem;
					font-weight: bolder;
				}
			}
		}

		.commodity {
			padding: 0.5rem;

			.title {
				font-size: 1.7rem;
				padding: 0.5rem 0;

			}

			.describe {
				font-size: 0.8rem;
			}

			p {
				text-align: center;
				padding: 0.25rem 0;
			}

			.buy {

				position: relative;
				display: inline-block;
				width: 8rem;
				height: 2.5rem;
				line-height: 2.5rem;
				font-size: 0.9rem;
				text-align: center;
				color: $black;
				font-weight: bolder;
				border: 0.05rem solid $black;
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
					background-color: $black;
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

	/*二楼*/
	.hotPL {
		padding: 1rem 0;
		background-color: $light-gray;

		.series {
			.series-hover {
				position: relative;
				margin: 0.5rem;
				font-size: 0;

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
			}

			.title {
				padding: 1rem 0;
				font-size: 1.1rem !important;
				font-weight: bolder;
			}

			p {
				font-size: 0;

				span {
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
	}

	/*img {*/
	/*    width: 100%;*/
	/*    min-height: 360px;*/
	/*    min-width: 1400px;*/
	/*    height: auto;*/
	/*}*/

	/*修改轮播图*/
	/*修改指示器*/
	.el-carousel__indicators {
		padding-top: 1rem !important;
		margin-bottom: 1rem !important;
	}

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
		width: 10rem !important;
		padding: 0.5rem 2rem !important;
		height: auto !important;
		color: #fff;
		opacity: 1 !important;
		background-color: #4D4D4D !important;
	}

	.el-carousel__indicator .el-carousel__button:before {
		text-align: center;
		display: block;
	}

	.el-carousel__indicator:nth-child(1) .el-carousel__button:before {
		content: '新款气垫';
	}

	.el-carousel__indicator:nth-child(2) .el-carousel__button:before {
		content: 'KT4定制';
	}

	.el-carousel__indicator:nth-child(3) .el-carousel__button:before {
		content: '放肆街头';
	}


	.el-carousel__indicator:nth-child(4) .el-carousel__button:before {
		content: '漫威联名';
	}
</style>
