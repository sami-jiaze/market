<template>
  <div class="order-right">
    <div class="order-content">
      <div class="title">
        <h3>我的订单</h3>
      </div>
      <div class="orders">
        <table class="order-item">
          <thead>
            <tr>
              <th colspan="5">
                <span class="ordertitle">2022-5-20 11:59订单编号：7867473872181848 <span class="pull-right delete"><img src="./images/delete.png"></span></span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td width="60%">
                <div class="typographic">
                  <img src="./images/goods.png">
                  <a href="#" class="block-text">包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶 新款</a>
                  <span>x1</span>
                  <a href="#" class="service">售后申请</a>
                </div>
              </td>
              <td rowspan="2" width="8%" class="center">小丽</td>
              <td rowspan="2" width="13%" class="center">
                <ul class="unstyled">
                  <li>总金额¥138.00</li>
                  <li>在线支付</li>

                </ul>
              </td>
              <td rowspan="2" width="8%" class="center">
                <a href="#" class="btn">已完成 </a>
              </td>
              <td rowspan="2" width="13%" class="center">
                <ul class="unstyled">
                  <li>
                    <a href="mycomment.html" target="_blank">评价|晒单</a>
                  </li>

                </ul>
              </td>
            </tr>
            <tr>
              <td width="50%">
                <div class="typographic">
                  <img src="./images/goods.png">
                  <a href="#" class="block-text">包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶 新款</a>
                  <span>x1</span>
                  <a href="#" class="service">售后申请</a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.orders {
  font-size: 12px;

  a {
    &:hover {
      color: #4cb9fc;
    }
  }

  table {
    border: 1px solid #e6e6e6;
    border-collapse: collapse;
    border-radius: 2px;
    width: 100%;
    margin-bottom: 18px;
    max-width: 100%;

    th {
      padding: 6px 8px;
      line-height: 18px;
      text-align: left;
      vertical-align: bottom;
      background-color: #f4f4f4;
      font-size: 12px;
      color: #666;

      .pull-right {
        float: right;
        cursor: pointer;

        img {
          margin-right: 10px;
          vertical-align: middle;
        }
      }
    }

    td {
      font-size: 12px;
      color: #666;
      padding: 6px 8px;
      line-height: 18px;
      text-align: left;
      vertical-align: middle;
      border: 1px solid #e6e6e6;

      &.center {
        text-align: center;
      }

      .typographic {
        img {
          float: left;
          margin-right: 10px;
        }

        a {
          float: left;
          min-width: 80px;
          max-width: 250px;
          color: #e1251b;

          &.service {
            color: #666;
          }
        }

        span {
          float: left;
          min-width: 80px;
          max-width: 250px;
          text-align: center;
        }
      }
    }
  }
}
</style>
