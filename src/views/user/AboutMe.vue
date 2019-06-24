<template>
  <el-card id="AboutMe" class="box-card" shadow="hover">

    <el-row>
      <el-col :span="8">
        <img src="@/assets/logo.png" alt="" class="article-img">
      </el-col>
      <el-col :span="16" class="article-info">
        <span class="article-p">妹纸</span><a class="article-logout" href="#">注销</a>
        <span class="article-autograph">
俄罗斯将在北方四岛增兵 日本曾要求不要部署

article@张宪超
俄军在北方四岛驻军（来源：莫斯科时报网）综合莫斯科时报网和英国快报网消息，俄罗斯国防部17日发表声明，称希望更多俄军及其家属能搬进南千叶群岛..这个人很懒什么也没留下...</span>
      </el-col>
      <br>
    </el-row>
  </el-card>

</template>

<script>
  export default {
    name: "AboutMe"
  }
</script>

<style scoped>
  .article-info {
    margin-top: 10px;
  }

  .article-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .article-logout {
    font-size: 12px;
    margin-left: 15px;
  }

  .article-autograph {
    font-size: 12px;
    color: #c2c2c2;
    margin-top: 10px;
    height: 30px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

</style>
