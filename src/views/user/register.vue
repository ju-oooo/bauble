<template>
  <div id="register">
    <div v-if="getUserInfo.username == undefined">
      <h2>注 册</h2>
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
    </div>
    <div v-else class="info">
      <span>恭喜您注册成功，账号为&nbsp;&nbsp;</span>
      <strong>{{getUserInfo.username}}</strong>
      <p>
        <router-link to="/login">去登录</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "register",
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
      ...mapActions({
        register: 'registerAction'
      }),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //成功
            this.register([this.registerForm.username, this.registerForm.password])
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

  #register {
    width: 500px;
    position: relative;
    top: 100px;
    margin: auto;
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
