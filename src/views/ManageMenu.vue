<template>
    <el-aside :style="{width:asideWidth}">
        <!--  菜单控制  -->
        <el-menu background-color="#545C64"
                 text-color="#fff"
                 active-text-color="#fff"
                 show-timeout
                 hide-timeout
                 :collapse="isCollapse">
            <el-menu-item v-if="isCollapse" @click="changeCollapse" title="展开"><i class="el-icon-d-arrow-right"></i>
            </el-menu-item>
            <el-menu-item v-else @click="changeCollapse" title="收起"><i class="el-icon-d-arrow-left"></i></el-menu-item>
        </el-menu>
        <!--  菜单  -->
        <el-menu
                :style="{height:menuHeight}"
                unique-opened
                router
                default-active="/m"
                background-color="#545C64"
                text-color="#fff"
                show-timeout
                hide-timeout
                active-text-color="#E24F3A"
                :collapse="isCollapse">
            <el-menu-item index="/m">
                <i class="el-icon-user-solid"></i>
                <span slot="title">我的 </span>
                <!--				<span slot="title">账号信息</span>-->
            </el-menu-item>
            <el-submenu index="/m/admin">
                <template slot="title">
                    <i class="el-icon-tickets"></i>
                    <span>管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/m/admin/list">用户管理</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    <el-menu-item index="4-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-tickets"></i>
                    <span>新闻</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    <el-menu-item index="4-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-picture-outline"></i>
                    <span>图片</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    <el-menu-item index="4-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-reading"></i>
                    <span>书籍</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    <el-menu-item index="4-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <i class="el-icon-headset"></i>
                    <span>音乐</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    <el-menu-item index="4-3">选项3</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
    export default {
        name: "user-menu",
        data() {
            return {
                //屏幕高度
                menuHeight: this.$fullHeight-56+'px',
                //菜单栏宽度
                asideWidth: '200px',
                //菜单栏是否收起
                isCollapse: false
            }
        },
        watch: {
            fullHeight() {
                console.log(this.fullHeight)
                this.menuHeight = this.menuHeight + 'px'
            }
        },
        methods: {
            changeCollapse() {
                this.isCollapse = !this.isCollapse,
                    this.asideWidth = this.isCollapse === true ? 'auto' : '200px'
            }
        }

    }
</script>

<style scoped>
    .el-menu-item-group {
        overflow: hidden;
    }
</style>
