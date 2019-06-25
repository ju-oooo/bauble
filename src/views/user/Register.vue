<template>
  <div>
    <Header :activeIndex="'/commodity'" :backgroundColor="'#fff'" :color="'#545C64'"></Header>
    <div class="bgImage">
      <el-row class="register">
        <el-col :xs="22" :sm="10" :md="8" :lg="6" class="register-bg">
          <h2 class="title">新用户注册</h2>
          <el-form :model="registerForm" status-icon :rules="registerRules" ref="registerForm">
            <el-form-item label="账号" prop="username">
              <el-input type="text" v-model="registerForm.username" placeholder="手机号/邮箱/身份证号"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPassword">
              <el-input type="password" v-model="registerForm.checkPassword"></el-input>
            </el-form-item>
            <!--自动登录-->
            <el-form-item>
              <el-button type="primary" @click="submitForm('registerForm')">注 册</el-button>
              <router-link to="/login" style="float: right;">
                <small>有账号，立即登录</small>
              </router-link>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  import Header from "../../components/include/Header";

  export default {
    name: "Register",
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
          if (this.registerForm.checkPassword !== '') {
            this.$refs.registerForm.validateField('checkPassword');
          }
          callback();
        }
      };
      var validateCheckPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        // getUserInfo: null,
        registerForm: {
          username: '',
          password: '',
          checkPassword: '',
        },
        registerRules: {
          username: [
            {validator: validateUsername, trigger: 'blur'}
          ],
          password: [
            {validator: validatePassword, trigger: 'blur'}
          ],
          checkPassword: [
            {validator: validateCheckPassword, trigger: 'blur'}
          ]

        }
      };
    },
    computed: {
      ...mapGetters({
        getUserInfo: 'userInfoGetter'
      })
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      "$state": "userInfoGetter",
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //成功
            let payload = {
              username: this.registerForm.username,
              password: this.registerForm.password
            };
            this.$store.dispatch('registerAction', payload)
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
  .register {
    justify-content: center;
    display: flex;
  }

  .register-bg {
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



  .info a {
    float: right;
    padding-top: 40px;
    padding-right: 120px;
  }

  .info strong {
    color: #15D098;
    font-size: 18px;
  }
</style>
