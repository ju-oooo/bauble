<template>
  <div class="cart-list">
    <!--    <el-col :xs="12" :sm="8" :md="6" :xl="4" class="cart-item">-->
    <!--      <div>-->
    <!--        <img-->
    <!--          src="https://img10.360buyimg.com/cms/s80x80_jfs/t1/27029/16/10303/84563/5c860b8cE7ae9705f/91cbbed521515472.jpg"-->
    <!--          alt=""/>-->
    <!--      </div>-->
    <!--      <p class="title" title="">松下（Panasonic） 32/43英寸 窄边框老人机高清液晶 平板电视机 32寸液晶</p>-->
    <!--      <p class="price">￥ 999.00</p>-->
    <!--      <a href="javascript:;" class="elect">立刻购买</a>-->
    <!--    </el-col> -->
    <el-main>
      <div class="cart-item">
        <el-table
          :data="shoppingCartList"
          :default-sort="{prop: 'date', order: 'descending'}"
          @selection-change="handleSelectionChange"
          ref="multipleTable"
          tooltip-effect="dark">
          <el-table-column
            type="selection"
            width="100">
          </el-table-column>
          <el-table-column
            label="商品"
            width="500"
            class="item-text-left">
            <template slot-scope="scope">
              <router-link class="item-imgP" :to="{name:'commodityDetails',params:{commodityId:scope.row.id}}">
                <img class="item-image" v-lazy="scope.row.image">
                <p class="item-title">{{scope.row.title}}</p>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column
            label="单价"
            sortable
            width="150">
            <template slot-scope="scope">
              {{"￥"+scope.row.price.toFixed(2)}}
            </template>
          </el-table-column>
          <el-table-column
            prop="quantity"
            width="150"
            label="数量">
            <template slot-scope="scope">
              <el-input-number v-model="scope.row.quantity" size="mini" :min="1" :max="10"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column
            width="150"
            label="小计">
            <template slot-scope="scope">
              {{"￥"+scope.row.subtotal.toFixed(2)}}
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="150">
            <template slot-scope="scope">
              <el-button
                type="danger" icon="el-icon-delete" circle plain
                @click="handleEdit(scope.$index, scope.row)">
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align:right; margin-top: 20px">
          <el-button @click="toggleSelection()">取消选择</el-button>
          <el-button type="danger" @click="buy">立即购买</el-button>
        </div>
      </div>
      <commodity-related></commodity-related>
    </el-main>
  </div>

</template>

<script>
  import {mapGetters, mapActions} from "vuex";
  import CommodityRelated from "../../components/commodity/CommodityRelated";

  export default {
    name: "CommodityShoppingCart",
    components: {CommodityRelated},
    data() {
      return {
      }
    },
    computed: {
      ...mapGetters({'shoppingCartList': 'shoppingCartListGetter'})
    },
    methods: {
      ...mapActions({'getShoppingCartList': 'shoppingCartListAction'}),
      //取消全选
      toggleSelection(rows) {
        console.log(1321, rows);
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      //选择监听
      handleSelectionChange(val) {
        console.log(val)
        this.multipleSelection = val;
      },
      //买
      buy() {
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/commodity-color-theme";

  .el-main {
    padding: 0;
    overflow: unset;
    width: 75rem;
    margin: auto;
  }

  .cart-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .cart-item {
      width: 75rem;
      margin-bottom: 4rem;

      .item-imgP {
        height: 5rem;
        display: flex;
        justify-content: flex-start;
        justify-items: center;

        .item-image {
          height: 100%;
        }

        .item-title {
          box-sizing: border-box;
          margin: 1rem 0 1rem 1rem;
          overflow: hidden;
          height: 3rem;
          line-height: 1.5rem;
          text-align: left;

          &:hover {
            cursor: pointer;
            color: $red;
          }
        }
      }
    }
  }
</style>
<style lang="scss">
  @import "../../assets/css/commodity-color-theme";

  .cart-list .cell {
    text-align: center;
  }
</style>

