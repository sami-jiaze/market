<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>注册新用户
        <span class="go">我有账号，去 <router-link to="./login">登录</router-link>
        </span>
      </h3>
      <div class="content">
        <label>手机号:</label>
        <input type="text" placeholder="请输入你的手机号" v-model="phone">
      </div>
      <div class="content">
        <label>登录密码:</label>
        <input type="text" placeholder="请输入你的登录密码" v-model="password">
      </div>
      <div class="content">
        <label>确认密码:</label>
        <input type="text" placeholder="请输入确认密码" v-model="password1">
      </div>
      <div class="content">
        <label>输入验证码:</label>
        <input type="text" placeholder="请输入验证码" v-model="code"><button class="codeBtn" @click="getCode">获取验证码</button>
      </div>
      <div class="btn">
        <button @click="UserRegister">完成注册</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      phone: '',
      password: '',
      password1: '',
      code: '',
      agree: true
    }
  },
  methods: {
    async UserRegister () {
      try {
        const { phone, password, password1 } = this
        if (password === password1) {
          await this.$store.dispatch('userRegister', { phone, password })
          this.$router.push('/login')
        } else {
          alert('两次输入的密码不匹配')
        }
      } catch (error) {
        alert(error.message)
      }
    },
    async getCode () {
      await this.$store.dispatch('userCode')
    }
  }
}
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    border: 1px solid rgb(223, 223, 223);
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
      border-bottom: 1px solid #dfdfdf;
      font-size: 20.04px;
      line-height: 30.06px;

      span {
        font-size: 14px;
        float: right;

        a {
          color: #e1251b;
        }
      }
    }

    div:nth-of-type(1) {
      margin-top: 40px;
    }

    .content {
      padding-left: 390px;
      margin-bottom: 18px;
      position: relative;
      .codeBtn{
        width: 87px;
        height: 38px;
      }

      label {
        font-size: 14px;
        width: 96px;
        text-align: right;
        display: inline-block;
      }

      input {
        width: 270px;
        height: 38px;
        padding-left: 8px;
        box-sizing: border-box;
        margin-left: 5px;
        outline: none;
        border: 1px solid #999;
      }

      img {
        vertical-align: sub;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .controls {
      text-align: center;
      position: relative;

      input {
        vertical-align: middle;
      }

      .error-msg {
        position: absolute;
        top: 100%;
        left: 495px;
        color: red;
      }
    }

    .btn {
      text-align: center;
      line-height: 36px;
      margin: 17px 0 0 55px;

      button {
        outline: none;
        width: 270px;
        height: 36px;
        background: #e1251b;
        color: #fff !important;
        display: inline-block;
        font-size: 16px;
      }
    }
  }
}
</style>
