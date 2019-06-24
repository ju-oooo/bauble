<template>
  <div>
    <div class="bgImage"></div>
    <div id="login">
      <h2>登 录</h2>
      <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm">
        <el-form-item label="账号" prop="username">
          <el-input type="text" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <!--自动登录-->
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登 录</el-button>
          <router-link to="/register" style="float: right;">
            <small>没有账号，立即注册</small>
          </router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex';
  export default {
    name: "login",
    data() {
      var validateUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        } else {
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
          ``
        }
      };
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [
            {validator: validateUsername, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ]
        }
      };
    }, computed: {
      ...mapGetters({
        getIsLogin: 'isLoginGetter'
      })
    },
    methods: {
      ...mapActions({
        login: 'loginAction'
      }),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let flag=this.login([this.loginForm.username, this.loginForm.password]);
            if (flag) {
              this.$router.push({name: "Home"})
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetField();
      }
    }
  }
</script>

<style scoped>
  h2 {
    margin-top: 0;
  }

  .bgImage {
    position: fixed;
    width: 100%;
    height: 80%;
    background: url('../../assets/image-486771.jpg') no-repeat center 0;
    background-size: cover;
  }

  #login {
    position: absolute;
    width: 333px;
    top: 150px;
    right: 200px;
    padding: 30px;
    background-color: #fff;
    box-shadow: 1px 1px 3px 1px #c2c2c2;
  }
</style>
