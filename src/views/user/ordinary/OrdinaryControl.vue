<template>
    <!--		<el-main class="box">-->
    <!--&lt;!&ndash;			OrdinaryControl 普通用户 数据信息&ndash;&gt;-->
    <!--			<el-card v-for="temp in 3" :key="temp" class="box-card">-->
    <!--				<div>-->
    <!--					内容-->
    <!--				</div>-->
    <!--			</el-card>-->
    <!--		</el-main>-->
    <div class="user-info">
        <el-row>
            <el-col class="basic-col" :md="12">
                <router-link :to="{name:'userInfo'}">进入用户信息</router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "OrdinaryControl",
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="scss">


</style>

