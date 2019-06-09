k<template>
    <el-row>
        <!--        <el-col :md="2">&nbsp;</el-col>-->
        <el-col :span="24">
            <el-row class="detail" justify="center">
                <el-col :sm="24" :md="12" class="detail-left">
                    <img src="../../assets/img/commodity/product-1.jpg" alt="">
                </el-col>
                <el-col :sm="24" :md="12" class="detail-right">
                    <p class="title">
                        不羁运动鞋男鞋2019新鞋春季学生男士潮流复古老爹鞋休闲鞋
                    </p>
                    <p class="price">￥ 299.00~449.00</p>
                    <p class="type">商品类型&nbsp;:&nbsp;<span>123</span></p>
                    <p class="time">发布时间&nbsp;:&nbsp;<span>123</span></p>
                    <p class="surplus">剩余库存&nbsp;:&nbsp;<span>123</span></p>
                    <p class="sold">已卖数量&nbsp;:&nbsp;<span>123</span></p>
                    <p class="hint">温馨提示·支持7天无理由退货·此商品不可使用优惠券</p>
                    <p class="btn">
                        <a href="javascript:;" class="btn-n cart">加入购物车</a>
                        <a href="javascript:;" class="btn-n buy">立即购买</a>
                    </p>
                </el-col>
            </el-row>
            <p class="operation">
                <a href="javascript:;" class="share">分享</a>
                <a href="javascript:;" class="collection">收藏商品+</a>
            </p>
        </el-col>
        <el-col :span="24" class="guess">
            <p>您可能还喜欢</p>
            <el-row class="guess-list">
                <el-col :sm="12" :md="6" class="guess-item">

                    <img src="../../assets/img/commodity/product-1.jpg" alt="">

                </el-col>
                <el-col :sm="12" :md="6" class="guess-item">

                    <img src="../../assets/img/commodity/product-2.jpg" alt="">

                </el-col>
                <el-col :sm="12" :md="6" class="guess-item">

                    <img src="../../assets/img/commodity/product-3.jpg" alt="">

                </el-col>
                <el-col :sm="12" :md="6" class="guess-item">

                    <img src="../../assets/img/commodity/product-4.jpg" alt="">

                </el-col>
            </el-row>
        </el-col>
        <el-col class="introduce">
            <p class="title">
                <a class="title-sty active">产品细节</a>
                <a class="title-sty">商品评价</a>
            </p>
            <div class="introduce-details">
                <img src="../../assets/img/commodity/product-1.jpg" alt="">
                <img src="../../assets/img/commodity/product-2.jpg" alt="">
                <img src="../../assets/img/commodity/product-3.jpg" alt="">
                <img src="../../assets/img/commodity/product-4.jpg" alt="">
                <img src="../../assets/img/commodity/product-5.jpg" alt="">
                <img src="../../assets/img/commodity/product-6.jpg" alt="">
                <img src="../../assets/img/commodity/product-7.jpg" alt="">
                <img src="../../assets/img/commodity/product-8.jpg" alt="">
            </div>
        </el-col>
    </el-row>
</template>

<script>
    import CommoditySmallNav from "../../components/commodity/CommoditySmallNav";

    export default {
        name: "CommodityDetails",
        components: {CommoditySmallNav}
    }
</script>

<style scoped lang="scss">
    @import "../../assets/css/commodity-color-theme";
    //产品细节 start
    .introduce {
        & > .title {
            display: flex;
            justify-content: center;

            .title-sty {
                margin: 5rem 2rem;
                display: block;
                text-align: center;
                width: 10rem;
                height: 2.5rem;
                line-height: 2.5rem;
                font-size: 1.2rem;
                color: $white;
                border-radius: 0.25rem;

                &:nth-child(1) {
                    background-color: $light-o-gray;
                }

                &.active:after {
                    width: 0;
                    content: "";
                    display: block;
                    border: 0.5rem solid transparent;
                    border-top-color: $light-o-gray;
                    margin: auto;
                }

                &:nth-child(2) {
                    background-color: black;
                }
            }
        }

        .introduce-details {
            img {
                width: 100%;
                max-width: 70rem;
                margin-bottom: 1rem;
            }
        }

    }

    //产品细节 end
    //猜你喜欢 start
    .guess {
        padding: 4rem 0;
        border-bottom: 0.1rem solid $gray;
        border-top: 0.1rem solid $gray;

        & > p {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 2rem;
        }

        .guess-list {
            .guess-item {
                padding: 1rem;
                overflow: hidden;
                height: 15rem;
            }

            img {
                min-height: 15rem;
                width: 100%;
            }


        }
    }

    //猜你喜欢 end
    //商品详情 start
    .detail {
        box-sizing: border-box;
        padding: 0 1rem;
        text-align: left;

        .detail-left {
            padding: 1rem;
            text-align: center;

            img {
                max-width: 37rem !important;
                height: 30rem;
                width: 100%;
            }
        }

        .detail-right {
            padding: 1rem;
            font-size: 1.2rem;

            .title {
                font-weight: bolder;
                font-size: 1.8rem;
            }

            p:not(.title) {
                margin: 1.5rem 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }

            .price {
                color: $red;
                font-size: 2rem;
            }


            .type {

            }

            .time {

            }

            .surplus {

            }

            .sold {

            }

            .hint {
                display: block;
                color: $gray;
                padding: 0.8rem;
                background-color: $light-gray;
            }

            .btn {
                margin: 1rem 0;
                display: flex;
                justify-content: center;
                font-size: 1rem;

                .btn-n {
                    width: 10rem;
                    height: 2.7rem;
                    color: $white;
                    line-height: 2.7rem;
                    text-align: center;

                    &.cart {
                        margin-right: 3.5rem;
                        background-color: $black;
                    }

                    &.buy {
                        background-color: $red;
                    }

                }
            }
        }
    }

    .operation {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        padding-bottom: 3rem;
        font-size: 1rem;

        a {
            display: block;
            width: 10rem;
            height: 2.7rem;
            line-height: 2.7rem;
            text-align: center;
            margin: 0 1.75rem;

            &.share {
                background-color: $red;
                color: $white;
            }

            &.collection {
                background-color: $light-gray;
                color: $black;
            }
        }
    }

    //商品详情 end
</style>
