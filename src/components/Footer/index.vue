<template>
  <div>
    <div class="footer">
      <div class="footer-container">
        <div class="footerList">
          <div class="footerItem">
            <h4>购物指南</h4>
            <ul class="footerItemCon">
              <li>购物流程</li>
              <li>常见问题</li>
              <li>购物指南</li>
            </ul>

          </div>
          <div class="footerItem">
            <h4>配送方式</h4>
            <ul class="footerItemCon">
              <li>上门自提</li>
              <li>限时达</li>
              <li>配送服务查询</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>支付方式</h4>
            <ul class="footerItemCon">
              <li>货到付款</li>
              <li>在线支付</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>售后服务</h4>
            <ul class="footerItemCon">
              <li>售后联系</li>
              <li>价格保护</li>
              <li>退款说明</li>
              <li>返修/退换货</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>售后服务</h4>
            <ul class="footerItemCon">
              <li>售后联系</li>
              <li>价格保护</li>
              <li>退款说明</li>
              <li>返修/退换货</li>
            </ul>
          </div>
          <div class="footerItem">
            <h4>售后服务</h4>
            <ul class="footerItemCon">
              <li>售后联系</li>
              <li>价格保护</li>
              <li>退款说明</li>
              <li>返修/退换货</li>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <ul class="helpLink">
            <li>关于我们
              <span class="space"></span>
            </li>
            <li>关于我们
              <span class="space"></span>
            </li>
            <li>关于我们
              <span class="space"></span>
            </li>
            <li>关于我们
              <span class="space"></span>
            </li>
            <li>关于我们
              <span class="space"></span>
            </li>
            <li>关于我们
              <span class="space"></span>
            </li>
            <li>关于我们
              <span class="space"></span>
            </li>
            <li>关于我们
              <span class="space"></span>
            </li>
            <li>关于我们</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.footer {
  background-color: #eaeaea;

  .footer-container {
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .footerList {
      padding: 20px;
      border-bottom: 1px solid #e4e1e1;
      border-top: 1px solid #e4e1e1;
      overflow: hidden;
      padding-left: 40px;

      .footerItem {
        width: 16.6666667%;
        float: left;

        h4 {
          font-size: 14px;
        }

        .footerItemCon {
          li {
            line-height: 18px;
          }
        }

        &:last-child img {
          width: 121px;
        }
      }
    }

    .copyright {
      padding: 20px;

      .helpLink {
        text-align: center;

        li {
          display: inline;

          .space {
            border-left: 1px solid #666;
            width: 1px;
            height: 13px;
            background: #666;
            margin: 8px 10px;
          }
        }
      }

      p {
        margin: 10px 0;
        text-align: center;
      }
    }
  }
}
</style>
