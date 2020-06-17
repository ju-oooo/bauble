import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/', name: 'Home', component: Home
    // },
    {
      path: '/', name: 'Home', redirect: {name: 'CommodityIndex'}, component: ()=>import("@/views/Home")
    },
    {
      path: '/login', name: 'Login', component: ()=>import("@/views/user/Login")
    },
    {
      path: '/register', name: 'Register', component: ()=>import("@/views/user/Register")
    },
    {
      path: '/m', component: ()=>import("@/views/ManageIndex"), children: [
        // user 普通用户
        {
          path: '/', name: 'OrdinaryControl', component: ()=>import("@/views/user/ordinary/OrdinaryControl"),
        },
        //admin 管理员用户
        {
          path: 'admin', name: 'AdminControl', component: ()=>import("@/views/user/admin/AdminControl"),
        },
        //用户信息
        {
          path: 'info', name: 'UserInfo', component: ()=>import("@/components/user/UserInfo"),
        },
        // admin/list
        {
          path: 'admin/list', name: 'OrdinaryList', component: ()=>import("@/views/user/admin/OrdinaryList"),
        },
      ]
    },
    {
      path: '/commodity', component: ()=>import("@/views/commodity/Commodity"), children: [
        {
          path: '/', name: 'CommodityIndex', component: ()=>import("@/views/commodity/CommodityIndex")
        },
        {
          path: 'o', component: ()=>import("@/views/commodity/CommodityLD"), redirect: {name: 'CommodityList'}, children: [
            {
              path: 'list', name: 'CommodityList', component: ()=>import("@/views/commodity/CommodityList"),
            },
            {
              path: 'details/:commodityId', name: 'CommodityDetails', component: ()=>import("@/views/commodity/CommodityDetails")
            },
          ]
        },
        {
          path: 'favorite', name: 'CommodityFavorite', component: ()=>import("@/views/commodity/CommodityFavorite")
        },
      ]
    },
  ]
});
