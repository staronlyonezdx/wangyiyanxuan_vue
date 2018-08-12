<template>
  <div class="goodsList">
    <h3 class="title">居家好物</h3>
    <ul class="list">
      <li class="item">
        <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png" alt="">
        <div class="desc">宽细夹排，升级爽滑凉感</div>
        <div class="name">天然宽篾头层青碳化竹凉席</div>
        <div class="price">￥209.25</div>
      </li>
      <li class="item">
        <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png" alt="">
        <div class="desc">宽细夹排，升级爽滑凉感</div>
        <div class="name">天然宽篾头层青碳化竹凉席</div>
        <div class="price">￥209.25</div>
      </li>
      <li class="item">
        <img src="http://yanxuan.nosdn.127.net/1059f517cd4a529fcc3f9299f5173bef.png" alt="">
        <div class="desc">宽细夹排，升级爽滑凉感</div>
        <div class="name">天然宽篾头层青碳化竹凉席</div>
        <div class="price">￥209.25</div>
      </li>
      <div class="more">
        <p>更多居家好物</p>
        <i></i>
      </div>
    </ul>
  </div>
</template>

<script>

  export default {
    props: {
      cateList: Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .goodsList
    width 100%
    background #fff
    margin-bottom px2rem(20)
    .title
      font-size px2rem(30)
      line-height px2rem(100)
      background #fff
      text-align center

    .list
      display flex
      justify-content space-around
      flex-flow row wrap
      overflow hidden
      .item
        background-color #f4f4f4
        width px2rem(345)
        img
          width px2rem(345)
          height px2rem(345)
        .desc
          width 100%
          padding px2rem(20) px2rem(10)
          background-color #f1ece2
          border-radius 0 px2rem(4) px2rem(4) 0
          color #9f8a60
          letter-spacing 0
          line-height px2rem(30)
          font-size px2rem(24)
          box-sizing border-box
          ellipsis()

        .name
          margin-top px2rem(10)
          padding 0 px2rem(10)
          color #333
          font-size px2rem(27)
          line-height px2rem(40)
          ellipsis()

        .price
          line-height 1
          font-size px2rem(32)
          color $main
          padding 0 px2rem(10)



</style>
