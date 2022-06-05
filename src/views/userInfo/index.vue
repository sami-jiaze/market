<template>
  <div class="personalCenter">
    <el-container>
      <el-header class="title">个人中心</el-header>
      <el-container>
        <el-aside width="400px">
          <el-col :span="10">
            <div class="mess">
              <img src="./images/head.jpg">
              <div class="block">
                <span >
                  <el-tag size="small" v-if="user.message=='user'">普通用户</el-tag>
                  <el-tag size="small" v-if="user.message=='admin'">管理员</el-tag>
                </span>
              </div>
            </div>
          </el-col>
          <div class="clearfix">
            <h4>用户id: 00001</h4>
            <div>姓名:{{form1.name}}</div>
            <div>昵称：埃达德</div>
            <div>年龄:{{form1.age}}</div>
            <div>性别：{{form1.gender}}</div>
            <div>生日:{{form1.birthday}}</div>
            <div>邮箱:{{form1.email}}</div>
            <div>收货地址:福州大学生活一区1#101</div>
            <div>电话:11223344</div>
          </div>
          <el-button type="success"><a @click="dialogVisible=true" style="color:white">编辑个人资料</a></el-button>
          <el-button type="primary"><router-link to="/userInfo/tradeList" style="color:white">查看订单列表</router-link></el-button>
          <el-button type="warning"><router-link to="/home" style="color:white">返回主页</router-link></el-button>
          <el-button type="warning" v-if="user.message=='admin'">
            <router-link to="/userInfo/verifyGoods" style="color:white">查看审核列表</router-link>
            </el-button>
          <el-dialog title="编辑个人信息" :visible.sync="dialogVisible" width="30%">
            姓名：<input type="text" v-model="form1.name"><br>
            年龄：<input type="text" v-model="form1.age"><br>
            性别：<input type="text" v-model="form1.gender"><br>
            生日：<input type="text" v-model="form1.birthday"><br>
            邮箱：<input type="text" v-model="form1.email">
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="subminInfo(form1)">确 定</el-button>
            </span>
          </el-dialog>
        </el-aside>

        <el-container>
          <el-main>
            <router-view></router-view>
            <!-- <button @click="test1">权限</button> -->
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import qs from 'querystring'
export default {
  name: 'PersonalCenter',
  data () {
    return {
      circleUrl: '',
      dialogVisible: false,
      form1: {
        name: 'qwe',
        age: '20',
        gender: '男',
        birthday: '2000.1',
        email: '123@qq.com'
      }
    }
  },
  methods: {
    async subminInfo () {
      this.dialogVisible = false
      console.log(this.form)
      await this.$store.dispatch('uploadInfo', qs.stringify(this.form1))
    }
  },
  mounted () {
    this.$store.dispatch('adminGetList')
  },
  computed: {
    user () {
      return this.$store.state.user
    },
    goodsimg () {
      return this.$store.state.admin.checkList.skuDefaultImg || {}
    }
  }
}
</script>
<style lang="less" scoped>
.title {
  font-size: 25px;
}
.clearfix {
  clear: both;
}
.el-header {
  line-height: 60px;
  text-align: center;
  background-color: #d3dce6;
}
.el-aside {
  line-height: 44px;
  text-align: center;
}
.el-main {
  line-height: 36px;
  text-align: center;
  background-color: #e9eef3;
}

.mess {
  align: 'center';
  margin-top: 30px;
  margin-left: 150px;
  img {
    margin-left: 30px;
    border-radius: 50%;
  }
}
.block {
  margin-left: 25px;
}

</style>
