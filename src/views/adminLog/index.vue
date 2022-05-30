<template>
  <div class="login-container">
    <div class="login-box">

      <!-- 头像区域 -->
      <div class="text-center avatar-box">
        <img src="../assets/logo.png" class="img-thumbnail avatar" alt="">
      </div>
      <el-form ref="loginForm" :model="loginForm" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" prefix-icon="el-icon-lock" type="password"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
          <el-button type="success" @click="dialogVisible=true">注册</el-button>
          <el-button type="danger" @click="admin">管理员登录</el-button>
        </el-form-item>
      </el-form>

      <el-dialog title="新用户注册" :visible.sync="dialogVisible" width="100%">
        <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="addForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="addForm.password"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="adduser">确 定</el-button>
        </span>
      </el-dialog>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import { adduserapi } from '@/api/adduser.js'
export default {
  name: 'MyLogin',
  data() {
    return {
      loginForm: {
        mobile: '',
        code: ''
        // 接口默认通过密码是'246810'
      },
      dialogVisible: false,
      addForm: {
        username: '',
        password: ''
      },
      addFormRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '用户名长度在3~10字符之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 10, message: '密码长度在3~10字符之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      this.$refs['loginForm'].resetFields()
      // console.log(this);
    },
    async login() {
      const { data: res } = await axios.post('http://www.liulongbin.top:8000/v1_0/authorizations', this.loginForm)
      if (res.message == 'OK') {
        alert('登录成功')
        console.log(res)
        localStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      }
      //  <----成功案例
      // console.log(res)
    },
    adduser() {
      this.$refs.addFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await axios.post('http://www.liulongbin.top:3007/api/reguser', this.addForm)
        console.log(res)
      })
    },
    admin() {
      if (this.loginForm.mobile === '1' && this.loginForm.code === '1') {
        localStorage.setItem('token', 'Bearer admin')
        // 跳转到后台主页
        this.$router.push('/adminhome')
      } else {
        localStorage.removeItem('token')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  background-color: #35495e;
  height: 100%;
  .login-box {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
  }
}

.avatar-box {
  position: absolute;
  width: 100%;
  top: -80px;
  left: 0;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
  }
}

.btns {
  display: flex;
  justify-content: flex-end;
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>