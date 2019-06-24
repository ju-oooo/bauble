<template>
  <div>
    <Header :activeIndex="'/commodity'" :backgroundColor="'#fff'" :color="'#545C64'"></Header>
    <div class="bgImage">
      <el-row class="login">
        <el-col :xs="22" :sm="10" :md="6" :lg="6" class="login-bg">
          <h2 class="title">登录</h2>
          <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm">
            <el-form-item label="账号" prop="username">
              <el-input type="text" v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="loginForm.password"></el-input>
            </el-form-item>
            <!--自动登录-->
            <el-form-item>
              <el-button type="primary" @click="submitForm">登 录</el-button>
              <router-link to="/register" style="float: right;">
                <small>没有账号，立即注册</small>
              </router-link>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex';
  import Header from "../../components/include/Header";

  export default {
    name: "Login",
    components: {Header},
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
      submitForm() {
        this.$refs['loginForm'].validate((valid) => {
          if (valid) {
            let flag = this.login([this.loginForm.username, this.loginForm.password]);
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
  .login {
    justify-content: center;
    display: flex;
  }

  .login-bg {
    background-color: rgba(255, 255, 255, 0.3) !important;
    margin-top: 5rem;
    padding: 2rem;
  }

  .title {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .bgImage {
    position: fixed;
    width: 100%;
    height: 80%;
    background: url('../../assets/bg-login.jpg') no-repeat center 0;
    background-size: cover;
  }
</style>
