<template>
<el-menu :default-active="activeIndex" mode="horizontal" router :background-color="backgroundColor" :text-color="color" active-text-color="#E24F3A">
    <!--    <el-menu-item index="/">首页</el-menu-item>-->
    <el-menu-item index="/commodity">首页</el-menu-item>
    <el-menu-item index="/commodity/o/list">商品列表</el-menu-item>
    <el-menu-item index="/commodity/favorite">收藏夹</el-menu-item>

    <div v-if="!isLogin">
        <el-menu-item index="/register" style="float: right;">注册</el-menu-item>
        <el-menu-item index="/login" style="float: right;">登录</el-menu-item>
    </div>
    <div v-else>
        <el-menu-item style="float: right;" @click="logout">注销</el-menu-item>
        <el-menu-item style="float: right;">{{userInfo.username}}</el-menu-item>
    </div>
</el-menu>
</template>

<script>
import {
    mapGetters
} from 'vuex'

export default {
    name: "Header",
    props: ['activeIndex', 'backgroundColor', 'color'],
    data() {
        return {};
    },
    created() {
        if (sessionStorage.length > 0) {
            this.$store.commit('SET_USERINFO', JSON.parse(sessionStorage.getItem('userInfo')))
            this.$store.commit('SET_ISLOGIN', true)
        }
    },
    computed: {
        ...mapGetters({
            isLogin: 'isLoginGetter',
            userInfo: 'userInfoGetter'
        })
    },
    methods: {
        logout() {
            sessionStorage.clear();
            this.$store.commit('SET_ISLOGIN', false)
            this.$message('注销成功')
            this.$router.push({
                name: 'Login'
            })
        }
    }
}
</script>

<style scoped>
.el-header {
    padding: 0;
}
</style>
