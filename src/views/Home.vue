<template>
	<div class="home">
		首页
		<router-link :to="{path:'/m'}">进入管理页面</router-link>
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
		line-height: 500px;
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
