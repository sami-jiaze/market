<template>
  <div class="home">
    <!-- eslint-disable vue/no-unused-vars -->
    <Nav></Nav>
    <ListContainer></ListContainer>
  </div>
</template>

<script>
import ListContainer from '@/views/Home/ListContainer'
import { mapState } from 'vuex'
export default {
  components: {
    ListContainer
  },
  mounted () {
    // 派发信息获取floor组件数据
    this.$store.dispatch('getFloorList')
    // 获取用户信息
    // 这里注释这段代码并放在路由组件中
    // 该代码注释的原因是如果放在这里不能保证其他页面刷新之后用户基本信息还在
    // this.$store.dispatch('GetUserInfo')
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
}
</script>

<style>
.home{
  background-color: #e9e7e9;
}
</style>
