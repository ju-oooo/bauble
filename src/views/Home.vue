<template>
	<div class="home">
		<router-link :to="{path:'/'}" style="color: #fff">首页&nbsp;</router-link>
		<router-link :to="{path:'/m'}" style="color: #fff">管理&nbsp;</router-link>
		<router-link :to="{name:'commodityIndex'}" style="color: #fff">商城&nbsp;</router-link>
	</div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
	.home {
		width: 500px;
		height: 500px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #2c3e50;
		color: #fff;
		margin: auto;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
	}
</style>
