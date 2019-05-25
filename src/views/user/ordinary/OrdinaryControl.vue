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
			<el-col :span="24">
				<el-row>
					<el-col class="basic-col" :span="12">
						<p>基本信息</p>
						<div class="img-portrait">
							<img src="../../../assets/img/logo.png" alt="">
						</div>
					</el-col>
					<el-col class="basic-col" :span="12">
						<p>基本信息</p>
						<div class="img-portrait">
							<img src="../../../assets/img/logo.png" alt="">
						</div>
					</el-col>
				</el-row>
			</el-col>
			<el-col :span="24">

			</el-col>
			<el-col :span="24">

			</el-col>
		</el-row>
	</div>
</template>

<script>
    export default {
        name: "OrdinaryControl"
    }
</script>

<style scoped lang="scss">
	.user-info {
		background-color: #E8ECF0;
		text-align: left;
		font-size: 1.2rem;
		box-sizing: border-box;
		/*col间距*/
		.basic-col {
			background-color: #fff;
			padding: 1rem;
			border: 1rem solid #E8ECF0;

		}

		/*个人头像*/
		.img-portrait {
			width: 5rem;
			height: 5rem;
			margin-top: 1rem;
			border-radius: 50%;
			border: 1px solid #999;
			overflow: hidden;
			img {
				width: 100%;
			}
		}

	}

	/*.box {*/
	/*	width: 100%;*/
	/*	display: flex;*/
	/*}*/

	/*.box-card {*/
	/*	margin: 1rem;*/
	/*	width: 50%;*/
	/*}*/
</style>
