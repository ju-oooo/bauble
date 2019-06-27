import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import ManageIndex from '@/views/ManageIndex'
import OrdinaryControl from '@/views/user/ordinary/OrdinaryControl'
import UserInfo from '@/components/user/UserInfo'
import AdminControl from '@/views/user/admin/AdminControl'
import OrdinaryList from '@/views/user/admin/OrdinaryList'

import Login from '@/views/user/Login'
import Register from '@/views/user/Register'

import Commodity from '@/views/commodity/Commodity'
import CommodityIndex from '@/views/commodity/CommodityIndex'
import CommodityList from '@/views/commodity/CommodityList'
import CommodityDetails from '@/views/commodity/CommodityDetails'
import CommodityLD from "@/views/commodity/CommodityLD";
import CommodityFavorite from "../views/commodity/CommodityFavorite";

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/', name: 'Home', component: Home
    // },
    {
      path: '/', name: 'Home', redirect: {name: 'CommodityIndex'}, component: Home
    },
    {
      path: '/login', name: 'Login', component: Login
    },
    {
      path: '/register', name: 'Register', component: Register
    },
    {
      path: '/m', component: ManageIndex, children: [
        // user 普通用户
        {
          path: '/', name: 'OrdinaryControl', component: OrdinaryControl,
        },
        //admin 管理员用户
        {
          path: 'admin', name: 'AdminControl', component: AdminControl
        },
        //用户信息
        {
          path: 'info', name: 'UserInfo', component: UserInfo
        },
        // admin/list
        {
          path: 'admin/list', name: 'OrdinaryList', component: OrdinaryList
        },
      ]
    },
    {
      path: '/commodity', component: Commodity, children: [
        {
          path: '/', name: 'CommodityIndex', component: CommodityIndex
        },
        {
          path: 'o', component: CommodityLD, redirect: {name: 'CommodityList'}, children: [
            {
              path: 'list', name: 'CommodityList', component: CommodityList,
            },
            {
              path: 'details/:commodityId', name: 'CommodityDetails', component: CommodityDetails
            },
          ]
        },
        {
          path: 'favorite', name: 'CommodityFavorite', component: CommodityFavorite
        },
      ]
    },
  ]
});
