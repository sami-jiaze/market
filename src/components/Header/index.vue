<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="typeList">
          <router-link to="/home">商城主页</router-link>
          <router-link to="/trade">我的订单</router-link>
          <router-link to="/shopcart">我的购物车</router-link>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/home">
          <img src="./images/1.png" alt="">
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword" />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="gosearch">搜索</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    gosearch () {
      // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`)
      // 解决重复搜索报错问题提供promise错误返回
      // this.$router.push({ name: 'search', params: { keyword: this.keyword || undefined }, query: { keyword: this.keyword.toUpperCase() } }, () => {}, () => {})
      if (this.$route.query) {
        // eslint-disable-next-line prefer-const
        let location = { name: 'search', params: { keyword: this.keyword || undefined } }
        location.query = this.$route.query
        this.$router.push(location)
      }
    }
  },
  data () {
    return {
      keyword: '',
      centerDialogVisible: false,
      phone: '',
      password: ''
    }
  },
  mounted () {
    this.$bus.$on('clear', () => {
      this.keyword = ''
    })
  },
  computed: {
    userName () {
      return this.$store.state.user.userInfo.name
    },
    token () {
      return this.$store.state.user.token
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;
      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;
      p {
        font-size: 30px;
        margin-top: 15px;
        background: linear-gradient(to right, red, blue);
        -webkit-background-clip: text;
        color: transparent;
      }
    }
  }

  .searchArea {
    float: right;
    margin-top: 35px;

    .searchForm {
      overflow: hidden;

      input {
        box-sizing: border-box;
        width: 490px;
        height: 32px;
        padding: 0px 4px;
        border: 2px solid #ea4a36;
        float: left;

        &:focus {
          outline: none;
        }
      }

      button {
        height: 32px;
        width: 68px;
        background-color: #ea4a36;
        border: none;
        color: #fff;
        float: left;
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
    }
  }
  background-color: #e9e7e9;
}
</style>
