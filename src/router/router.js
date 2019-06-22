import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import ManageIndex from '@/views/ManageIndex'
import OrdinaryControl from '@/views/user/ordinary/OrdinaryControl'
import UserInfo from '@/components/user/UserInfo'
import AdminControl from '@/views/user/admin/AdminControl'
import OrdinaryList from '@/views/user/admin/OrdinaryList'
import BookIndex from '@/views/book/BookIndex'
import Commodity from '@/views/commodity/Commodity'
import CommodityIndex from '@/views/commodity/CommodityIndex'
import CommodityList from '@/views/commodity/CommodityList'
import CommodityDetails from '@/views/commodity/CommodityDetails'
import CommodityLD from "@/views/commodity/CommodityLD";
import CommodityShoppingCart from "@/views/commodity/CommodityShoppingCart";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', name: 'Home', component: Home
    },
    {
      path: '/m', component: ManageIndex, children: [
        // user 普通用户
        {
          path: '/', name: 'ordinaryControl', component: OrdinaryControl,
        },
        //admin 管理员用户
        {
          path: 'admin', name: 'adminControl', component: AdminControl
        },
        //用户信息
        {
          path: 'info', name: 'userInfo', component: UserInfo
        },
        // admin/list
        {
          path: 'admin/list', name: 'ordinaryList', component: OrdinaryList
        },
        //book
        {
          path: 'book', name: ' bookIndex', component: BookIndex
        }
      ]
    },
    {
      path: '/commodity', component: Commodity, children: [
        {
          path: '/', name: 'commodityIndex', component: CommodityIndex
        },
        {
          path: 'o', component: CommodityLD, redirect: {name: 'commodityList'}, children: [
            {
              path: 'list', name: 'commodityList', component: CommodityList,
            },
            {
              path: 'details/:commodityId', name: 'commodityDetails', component: CommodityDetails
            },
          ]
        },
        {
          path: 'shoppingCart', name: 'commodityShoppingCart', component: CommodityShoppingCart
        },
      ]
    },
  ]
});
