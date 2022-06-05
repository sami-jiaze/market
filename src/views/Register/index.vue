<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>注册新用户
        <span class="go">我有账号，去 <router-link to="./login">登录</router-link>
        </span>
      </h3>
      <div class="content">
        <label>您的昵称:</label>
        <input type="text" placeholder="请输入你的昵称" v-model="name">
      </div>
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
        <input type="text" placeholder="请输入验证码" v-model="code">
        <button class="codeBtn" @click="getCode(phone)">获取验证码</button>
        <div >
          <img :src="imgsrc" alt="" class="imgQrCode">
        </div>
      </div>
      <div class="btn">
        <button @click="UserRegister">完成注册</button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import qs from 'querystring'
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      phone: '158',
      password: '',
      password1: '',
      code: '',
      agree: true,
      imgsrc: ''
    }
  },
  methods: {
    async UserRegister () {
      try {
        const { phone, password, password1, code, name } = this
        if (password === password1) {
          await this.$store.dispatch('userRegister', qs.stringify({ phone, password, code, name }))
          this.$router.push('/login')
        } else {
          alert('两次输入的密码不匹配')
        }
      } catch (error) {
        alert(error.message)
      }
    },
    getCode (phone) {
      axios.get(`http://nick.cab/api/user/passport/sendCode/${phone}`, { responseType: 'blob' }).then((res) => {
        // const { data, headers } = res
        // const blob = new Blob([data], { type: headers['content-type'] })
        // this.imgsrc = window.URL.createObjectURL(blob)
        // this.imgsrc = this.imgsrc.slice(5)
        // console.log(res)
        // console.log(this.imgsrc)
        // const img1 = document.createElement('img')
        // img1.src = this.imgsrc
        // document.querySelector('.imgQrCode').appendChild(img1)
        this.imgsrc = `http://nick.cab/api/user/passport/sendCode/${phone}`
      })
      // await this.$store.dispatch('userCode', phone)
    }

  }
}
</script>

<style lang="less" scoped>
.register-container {
  .register {
    width: 1200px;
    height: 445px;
    margin: 0 auto;

    h3 {
      background: #ececec;
      margin: 0;
      padding: 6px 15px;
      color: #333;
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
.imgQrCode{
  margin-left: 128px;
}
</style>
