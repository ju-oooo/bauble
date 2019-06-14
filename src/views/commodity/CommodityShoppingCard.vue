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
    <div class="cart-item">
      <el-table
        :data="tableData"
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
          <div slot-scope="scope" class="item-imgP">
            <img class="item-image" :src="scope.row.image">
            <p class="item-title">{{scope.row.title}}</p>
          </div>
        </el-table-column>
        <el-table-column
          prop="price"
          label="单价"
          sortable
          width="150">
        </el-table-column>
        <el-table-column
          prop="quantity"
          width="150"
          label="数量">
          <div slot-scope="scope">
            <el-input-number v-model="scope.row.quantity" size="mini" :min="1" :max="10"></el-input-number>
          </div>
        </el-table-column>
        <el-table-column
          prop="subtotal"
          width="150"
          label="小计">
        </el-table-column>
        <el-table-column
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px">
        <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
        <el-button @click="toggleSelection()">取消选择</el-button>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "CommodityShoppingCard",
    data() {
      return {
        tableData: [{
          image: "https://img10.360buyimg.com/cms/s80x80_jfs/t1/27029/16/10303/84563/5c860b8cE7ae9705f/91cbbed521515472.jpg",
          title: '松下（Panasonic） 32/43英寸 窄边框老人机高清液晶 松下（Panasonic） 32/43英寸 窄边框老人机高清液晶 松下（Panasonic） 32/43英寸 窄边框老人机高清液晶 松下（Panasonic） 32/43英寸 窄边框老人机高清液晶 平板电视机 32寸液晶',
          price: 999999,
          quantity: 1,
          subtotal: 99999999999
        },
        ]
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }

  }
</script>

<style scoped lang="scss">
  @import "../../assets/css/commodity-color-theme";

  .cart-list {
    display: flex;
    justify-content: flex-start;

    .cart-item {
      width: 75rem;

      .item-imgP {
        height: 5rem;
        display: flex;
        justify-content: flex-start;
        justify-items: center;

        .item-image {

        }

        .item-title {
          box-sizing: border-box;
          margin: 1rem 0 1rem 1rem;
          overflow: hidden;
          height: 3rem;
          line-height: 1.5rem;
          text-align: left;
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

