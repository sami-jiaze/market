<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <!-- eslint-disable-next-line vue/no-unused-vars -->
      <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
        <img :src="carousel.url" />
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: 'Carousel',
  props: ['list'],
  watch: {
    list: {
      immediate: true,
      handler () {
        this.$nextTick(() => {
          // eslint-disable-next-line no-unused-vars
          var mySwiper = new Swiper(this.$refs.cur, {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }
          })
        })
      }
    }
  }
}
</script>

<style>
</style>
