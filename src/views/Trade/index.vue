<template>
<!--  eslint-disable vue/no-unused-vars  -->
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content">
      <h5 class="receive">请填写收件地址</h5>
      <input type="text" class="address" v-model="address"><br>
      <h5>收货地址</h5>
      {{address}}
      <div class="line"></div>
      <h5 class="pei">配送时间:预计次日19:00-22:00送达</h5>
      <div class="detail">
        <h5>商品清单</h5>
        <ul class="list clearFix" v-for="(order, index) in orderInfo.detailArrayList" :key="order.skuId">
          <li>
            <img :src="order.imgUrl" alt="" style="width:100px;height:100px">
          </li>
          <li>
            <p>{{order.skuName}}</p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥{{order.orderPrice}}</h3>
          </li>
          <li>X{{order.skuNum}}</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea placeholder="建议留言前先与商家沟通确认" class="remarks-cont" v-model="msg"></textarea>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b><i>{{orderInfo.totalNum}}</i>件商品，总商品金额</b>
          <span>¥{{orderInfo.totalAmount}}</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">应付金额: <span>¥{{orderInfo.totalAmount}}</span></div>
      <div class="receiveInfo">
        寄送至:{{address}}
        <span></span>
        收货人：<span>{{user.name}}</span>
        <span>15010658793</span>
      </div>
    </div>
    <div class="sub clearFix">
      <router-link class="subBtn" to="/pay" @click="submitOrder">提交订单</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Trade',
  data () {
    return {
      msg: '',
      // 订单号
      orderId: '',
      address: '福州大学'
    }
  },
  mounted () {
    this.$store.dispatch('getOrderInfo')
    console.log(this.$store.state.user)
  },
  computed: {
    ...mapState({
      orderInfo: state => state.trade.orderInfo,
      user: state => state.user.userInfo
    })

  },
  methods: {
    // 提交订单
    submitOrder () {
      // this.$router.push('/pay?orderId=' + this.orderId)
    }
  }
}
</script>

<style lang="less" scoped>
  .trade-container {
    .title {
      width: 1200px;
      margin: 0 auto;
      font-size: 14px;
      line-height: 21px;
    }

    .content {
      width: 1200px;
      margin: 10px auto 0;
      border: 1px solid rgb(221, 221, 221);
      padding: 25px;
      box-sizing: border-box;
      .pei{
        margin-top: 20px;
        margin-bottom: 20px;
      }
      .address{
        width: 500px;
        margin-bottom: 20px;
      }
      .receive{
        line-height: 36px;
        margin: 18px 0;
      }

      .line {
        height: 1px;
        background-color: #ddd;
      }

      .detail {
        width: 1080px;

        background: #feedef;
        padding: 15px;
        margin: 2px auto 0;

        h5 {
          line-height: 50px;
        }

        .list {
          display: flex;
          justify-content: space-between;

          li {
            line-height: 30px;

            p {

              margin-bottom: 20px;
            }

            h4 {
              color: #c81623;
              font-weight: 400;
            }

            h3 {

              color: #e12228;
            }
          }
        }
      }

      .bbs {
        margin-bottom: 15px;

        h5 {
          line-height: 50px;
        }

        textarea {
          width: 100%;
          border-color: #e4e2e2;
          line-height: 1.8;
          outline: none;
          resize: none;
        }
      }
    }

    .money {
      width: 1200px;
      margin: 20px auto;

      ul {
        width: 220px;
        float: right;

        li {
          line-height: 30px;
          display: flex;
          justify-content: space-between;

          i {
            color: red;
          }
        }
      }
    }

    .trade {
      box-sizing: border-box;
      width: 1200px;
      padding: 10px;
      margin: 10px auto;
      text-align: right;
      background-color: #f4f4f4;
      border: 1px solid #ddd;

      div {
        line-height: 30px;
      }

      .price span {
        color: #e12228;
        font-weight: 700;
        font-size: 14px;
      }

      .receiveInfo {
        color: #999;
      }
    }

    .sub {
      width: 1200px;
      margin: 0 auto 10px;

      .subBtn {
        float: right;
        width: 164px;
        height: 56px;
        font: 700 18px "微软雅黑";
        line-height: 56px;
        text-align: center;
        color: #fff;
        background-color: #e1251b;

      }
    }

  }
</style>
