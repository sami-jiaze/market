<template>
  <div>
    <div class="list-container">
      <div class="sortList clearfix">
        <div class="center">
          <!--banner轮播-->
          <Carousel :list='bannerList'/>
        </div>
        <div class="right">
          <div class="news">
            <h4>
              <em class="fl">校园快报</em>
              <span class="fr tip">更多 ></span>
            </h4>
            <div class="clearix"></div>
            <ul class="news-list">
              <li>
                <span class="bold">[公告]</span>二手交易 购数码换数码
              </li>
              <li>
                <span class="bold">[公告]</span>二手交易 购数码换数码
              </li>
              <li>
                <span class="bold">[公告]</span>二手交易 购数码换数码
              </li>
              <li>
                <span class="bold">[公告]</span>二手交易 购数码换数码
              </li>
              <li>
                <span class="bold">[公告]</span>二手交易 购数码换数码
              </li>
            </ul>
          </div>

        </div>
        <div class="userInfo">
          <img src="./images/head.jpg" alt="">
          <div class="wel">Hi~{{user.name}}你好<br>
          <span v-if="token">您的身份是</span>
          <span v-else>您的身份是游客</span>
          <span v-if="permission=='user'" class="red">普通用户</span>
          <span v-if="permission=='admin'" class="red">管理员</span>
        </div>
         <p v-if="!token">
          <router-link to="/login"><a class="log">登录</a></router-link>
          <router-link to="/register" class="register"><a class="reg">注册</a></router-link>
         </p>
         <p v-else>
           <router-link to="/upload"><a class="upload">发布我的商品</a></router-link>
            <router-link to="/userInfo"><a class="upload">个人中心</a></router-link>
            <a class="upload" @click="logout">退出登录</a>
         </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 找vuex要数据
import { mapState } from 'vuex'
export default {
  mounted () {
    // 派发action通知vuex发起ajax请求，将数据存储在仓库中
    this.$store.dispatch('getbannnerlist')
    this.$store.dispatch('userPermission')
  },
  methods: {
    async logout () {
      await this.$store.dispatch('userLogout')
      this.$router.push('/home')
    }
  },
  computed: {
    ...mapState({
      bannerList: state => state.home.bannerList,
      user: state => state.user.userInfo
    }),
    permission () {
      return this.$store.state.user.message
    },
    token () {
      return this.$store.state.user.token
    }
  }
}
</script>

<style lang="less" scoped>
.list-container {
  width: 1200px;
  margin: 0 auto;
  background-color: #fafafa;
  .sortList {
    height: 464px;
    padding-left: 210px;

    .center {
      box-sizing: border-box;
      width: 740px;
      height: 100%;
      padding: 5px;
      float: left;
    }

    .right {
      float: left;
      width: 250px;

      .news {
        border: 1px solid #e4e4e4;
        margin-top: 5px;

        h4 {
          border-bottom: 1px solid #e4e4e4;
          padding: 5px 10px;
          margin: 5px 5px 0;
          line-height: 22px;
          overflow: hidden;
          font-size: 14px;

          .fl {
            float: left;
          }

          .fr {
            float: right;
            font-size: 12px;
            font-weight: 400;
          }
        }

        .news-list {
          padding: 5px 15px;
          line-height: 26px;

          .bold {
            font-weight: 700;
          }
        }
      }

    }
    .userInfo{
      position: relative;
      float: right;
      width: 250px;
      height: 275px;
      background-color: #f3f3f3;
      img{
        position: absolute;
        left: 40%;
        margin-top: 20px;
        border-radius: 50%;
      }
      .wel{
        display: block;
        text-align: center;
        margin-top: 90px;
      }
      .red{
        color: #ff6a05;
      }
      .log{
        display: inline-block;
        width: 95px;
        height: 30px;
        border: 1px solid;
        text-align: center;
        line-height: 30px;
        background-color: #ff5802;
        margin-left: 20px;
        margin-top: 30px;
        color: #ffffff;
      }
      .reg{
        display: inline-block;
        width: 95px;
        height: 30px;
        border: 1px solid;
        text-align: center;
        line-height: 30px;
        color: #ffffff;
        font-size: 5px;
        background-color: #ff5802;
        margin-top: 30px;
        margin-left: 18px;
      }
      .upload{
        display: inline-block;
        width: 95px;
        height: 30px;
        border: 1px solid;
        text-align: center;
        line-height: 30px;
        color: #ffffff;
        font-size: 5px;
        background-color: #ff5802;
        margin-left: 76px;
        margin-top: 20px;
      }
    }
  }
}
</style>>
