<template>
<div class="shopCart">
  <div class="title">购物车</div>
  <div class="reactid">
    <ul class="m-servicePolicy">
      <li class="item">
        <div class="servicePolicy"></div>
        <span>30天无理由退换货</span>
      </li>
      <li class="item">
        <div class="servicePolicy"></div>
        <span>48小时快速退款</span>
      </li>
      <li class="item">
        <div class="servicePolicy"></div>
        <span>满88元免费邮</span>
      </li>
    </ul>
    <div class="m-defaultPage">
      <div class="container">
        <div class="img"></div>
        <div class="txt">
          <div class="cart-title">去添加点什么吧</div>
          <div class="toLogin">登录</div>
        </div>
      </div>
    </div>

  </div>

</div>
</template>

<script>
  export default {
    name: "shop-cart"
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  .shopCart
    width 100%
    height 100%
    .title
      width 100%
      height px2rem(88)
      background white
      text-align center
      line-height px2rem(88)
      font-size 35px
      color #000
      position fixed
    .reactid
      width 100%
      height 100%
      .m-servicePolicy
        width 100%
        height px2rem(50)
        padding-top px2rem(110)
        display flex
        justify-content space-around
        .item
          display flex
          .servicePolicy
            width 10px
            height 10px
            border 1px solid black
            border-radius 50%
            margin-top 8px
            margin-right 5px
          span
           font-size 26px

      .m-defaultPage
        width 100%
        height 100%
        position relative
        .container
          width 100%
          position absolute
          top 25%
          text-align center
          .img
            width px2rem(248)
            height px2rem(248)
            background url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png')
            margin-left 32%
          .txt
            width 100%
            height px2rem(200)
            position absolute
            top 90%
            .cart-title
              color #999
              font-size 27px
            .toLogin
              width px2rem(480)
              height px2rem(92)
              background $main
              margin 100px auto
              color white
              text-align center
              line-height px2rem(92)
              font-size 30px
</style>
