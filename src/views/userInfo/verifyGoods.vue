<template>
  <!-- eslint-disable vue/no-unused-vars  -->
  <div>
    <h2>审核列表</h2>
    <ul>
      <ul>
        <li v-for="(good, index) in checkList" :key="good.id">
          <div class="list-wrap">
            <div class="p-img">
              <!--  eslint-disable-next-line vue/no-parsing-error -->
              <img :src="isrc" alt="">
              <!-- <img src="http://43.138.43.158:8082/api/getphoto?url=/content/08c7dffb22e4448aa2b04caf0ce15011.jpg" alt=""> -->
              <!-- <img src="http://43.138.43.158:8082/api/getphoto?url=${imgSrc}"/> -->
            </div>
            <span>商品id:{{good.skuId}}</span>
            <div>商品名称：{{good.skuName}}</div><span>商品新旧程度：{{good.resource}}</span>
            <div class="price">
                商品价格：<em>¥</em><i>{{good.price}}</i>
            </div>
            <el-button type="warning" @click="adminDelete(good)">删除</el-button>
            <el-button type="success" @click="adminPass(good)">通过</el-button>
          </div>
        </li>
      </ul>
    </ul>
    <router-link to="/userInfo/allList"><h2>查看已通过商品</h2></router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      checkList: state => state.admin.checkList,
      imgsrc: state => state.user.imgSrc
    }),
    ...mapGetters(['isrc'])
  },
  methods: {
    adminDelete (good) {
      console.log(good)
      this.$store.dispatch('adminDelete', good.skuId)
    },
    adminPass (good) {
      const skuId = good.skuId
      console.log(skuId)
      this.$store.dispatch('adminPass', good.skuId)
    }
  },
  mounted () {
    console.log(this.$store.state.user)
  }
}
</script>

<style lang="less" scoped>
</style>
