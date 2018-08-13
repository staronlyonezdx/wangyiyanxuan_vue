<template>
  <div class="mask" v-if="maskShow">
    <i class="close" @click="handleMask"></i>
    <div class="wrap">
      <div class="modle">
        <div class="title">
          <span class="titleContent">- 新人专享礼 -</span>
        </div>
        <div class="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
        <div class="newUserItem">
          <div class="img">
            <img
              src="http://yanxuan.nosdn.127.net/4c372b5314d26235324abb0cf7f0713a.jpg?imageView&quality=85&thumbnail=232y232"
              alt="">
          </div>
          <div class="content">
            <div class="itemName">花样年华女士小白鞋</div>
            <div class="manu">
              <i class="manuTag">舒适透气，时尚经典</i>
            </div>
            <div class="price">
              <span class="newPrice">¥ 259.00</span>
              <span class="oldPrice">
                <span>¥</span>
                <span>899.00</span>
              </span>
            </div>
          </div>
        </div>
        <div class="actCouponBtn">
          <span>领券立减¥ 60.00</span>
          <div class="linkBtn">查看更多特惠商品</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        maskShow: true
      }
    },
    methods: {
      handleMask() {
        this.maskShow = false
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .mask
    width 100%
    height px2rem(1334)
    background rgba(0, 0, 0, 0.5)
    position fixed
    top 0
    z-index 100
    .close
      width px2rem(64)
      height px2rem(64)
      display inline-block
      background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/modalClose-9365f12572.png')
      position fixed
      top px2rem(40)
      right px2rem(40)
      background-repeat no-repeat
      vertical-align middle
      background-size 100% 100%
      z-index 2
    .wrap
      width px2rem(678)
      height px2rem(752)
      position absolute
      top 50%
      left 50%
      transform translate(-50%, -50%)
      .modle
        width px2rem(628)
        height px2rem(712)
        padding px2rem(20)
        background #fff
        border-radius px2rem(10)
        .title
          font-size px2rem(40)
          text-align center
          .titleContent
            display inline-block
            font-weight 700
        .subTitle
          font-size px2rem(24)
          margin-top px2rem(100)
          text-align center
        .newUserItem
          width 100%
          height px2rem(230)
          margin-top px2rem(50)
          background #f4f4f4
          border-radius px2rem(5)
          display flex
          .content
            padding 20px 0
            margin-left px2rem(10)
            color #333
            .itemName
              font-size px2rem(30)
              width px2rem(300)
              margin-top px2rem(20)
              white-space nowrap
              overflow hidden
            .manu
              margin-top px2rem(30)
              font-size px2rem(24)
              .manuTag
                border 1px solid #7f7f7f
                border-radius 5px
            .price
              margin-top px2rem(30)
              .newPrice
                font-size px2rem(30)
                color $main
              .oldPrice
                font-size px2rem(30)
                color #999
                span
                  text-decoration line-through

        .actCouponBtn
          span
            height px2rem(88)
            display block
            background $main
            color #fff
            font-size px2rem(30)
            margin-top px2rem(20)
            text-align center
            line-height px2rem(88)
          .linkBtn
            height px2rem(88)
            font-size px2rem(30)
            margin-top px2rem(20)
            text-align center
            line-height px2rem(88)
            border 1px solid #7F7F7F

</style>
