<template>
  <div>
    <!-- eslint-disable vue/no-unused-vars  -->
    <div class="type-nav">
      <div class="container">
        <h2 class="all" @mouseenter="enterShow" >全部商品分类</h2>
        <div @mouseleave="leaveShow">
        <!-- 过渡动画 -->
        <transition name="sort">
        <div class="sort" v-show="show">
          <!-- 利用事件委派+编程式导航实现路由的跳转 -->
          <div class="all-sort-list2" @click="goSearch" >
            <div class="item" v-for="(c1, index) in categoryList" :key="c1.categoryId" :class="{cur:index===currentIndex}" >
              <h3 @mouseover="changeIndex(index)" >
                <!-- 添加自定义属性便于路由导航 -->
                <a :data-cname="c1.categoryName" :data-cid1="c1.categoryId">{{c1.categoryName}}</a>
              </h3>
              <!-- 二三级分类 -->
              <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a :data-cname="c2.categoryName" :data-cid2="c2.categoryId">{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                        <a :data-cname="c3.categoryName" :data-cid3="c3.categoryId">{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
        </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
import { mapState } from 'vuex'
// 防抖与节流
import { throttle } from '../../../node_modules/lodash'
export default {
  name: 'Nav',
  data () {
    return {
      currentIndex: -1,
      show: true
    }
  },
  mounted () {
    if (this.$route.path != '/home') {
      this.show = false
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList
      }
    })
  },
  methods: {
    // changeIndex (index) {
    //   this.currentIndex = index
    // },
    // 防抖与节流
    changeIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    leaveIndex () {
      this.currentIndex = -1
    },
    // dataset可获取节点自定义属性
    goSearch (event) {
      let element = event.target
      console.log(element.dataset)
      let { cname, cid1, cid2, cid3 } = element.dataset
      if (cname) {
        let location = { name: 'search' }
        let query = { categoryName: cname }
        if (cid1) {
          query.category1Id = cid1
        } else if (cid2) {
          query.category2Id = cid2
        } else if (cid3) {
          query.category3Id = cid3
        }
        location.query = query
        this.$router.push(location)
      }
    },
    enterShow () {
      this.show = true
    },
    leaveShow () {
      this.currentIndex = -1
      if (this.$route.path != '/home') {
        this.show = false
      }
    },
    goRank () {

    }
  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 27px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;

            a {
              color: #333;
            }
          }

          .item-list {
            // display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
        .cur{
          background-color: skyblue;
        }
      }
    }
    // 过渡动画
    .sort-enter{
      height: 0px;
    }
    .sort-enter-to{
      height: 461px;
      transform: rotate(360deg);
    }
    .sort-enter-active{
      transition: all .5s linear;
    }
  }
}
</style>
