<template>
  <div>
    <Header ></Header>
    <router-view></router-view>
    <!-- 路由元信息 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: {
    Header, Footer
  },
  mounted () {
    // 派发action
    this.$store.dispatch('categoryList')
  }
}
</script>

<style lang="less">
</style>
