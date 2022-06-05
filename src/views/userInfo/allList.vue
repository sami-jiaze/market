<template>
  <!-- eslint-disable vue/no-unused-vars  -->
  <div>
    <h2>通过列表</h2>
    <ul>
      <ul>
        <li v-for="(good, index) in checkList" :key="good.id">
          <div class="list-wrap">
            <div class="p-img">
              <!--  eslint-disable-next-line vue/no-parsing-error -->
              <img :src="imgsrc" alt="">
              <!-- <img src="http://43.138.43.158:8082/api/getphoto?url=/content/08c7dffb22e4448aa2b04caf0ce15011.jpg" alt=""> -->
              <!-- <img src="http://43.138.43.158:8082/api/getphoto?url=${imgSrc}"/> -->
            </div>
            <span>商品id:{{good.skuId}}</span>
            <div>商品名称：{{good.skuName}}</div><span>商品新旧程度：{{good.resource}}</span>
            <div class="price">
                商品价格：<em>¥</em><i>{{good.price}}</i>
            </div>
          </div>
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      checkList: state => state.user.allList,
      imgsrc: state => state.user.imgSrc
    }),
    ...mapGetters(['isrc'])
  },
  methods: {

  },
  mounted () {
    this.$store.dispatch('adminPassList')
  }
}
</script>

<style lang="less" scoped>
</style>
