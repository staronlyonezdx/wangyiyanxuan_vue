<template>
  <div>
    <div class="goodsList" v-for="(cate,index) in cateList" :key="index">
      <h3 class="title">{{cate.name}}好物</h3>
      <ul class="list">
        <li class="item" v-for="(item,index) in cate.itemList" :key="index">
          <img v-lazy="item.listPicUrl" alt="">
          <div class="desc">{{item.simpleDesc}}</div>
          <div class="name">{{item.name}}</div>
          <div class="price">￥{{item.retailPrice}}</div>
        </li>
        <div class="more">
          <p>更多{{cate.name}}好物</p>
          <i></i>
        </div>
      </ul>
    </div>
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
      .item
        background-color #fff
        width 50%
        float left
        box-sizing border-box
        clearFix()
        &:nth-child(odd)
          padding 0 px2rem(10) px2rem(33) px2rem(20)
        &:nth-child(even)
          padding 0 px2rem(20) px2rem(33) px2rem(10)
        img
          width px2rem(345)
          height px2rem(345)
          background #f4f4f4
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

      .more
        width px2rem(345)
        height px2rem(416)
        border-radius px2rem(4)
        padding px2rem(128) 0
        box-sizing border-box
        display flex
        flex-direction column
        align-items center
        justify-content center
        background more
        background #f4f4f4
        p
          color #333333
          font-size px2rem(32)
          line-height px2rem(32)
          margin-bottom px2rem(60)

        i
          display block
          background url('../../../assets/images/gsmove.png')
          vertical-align middle
          background-repeat no-repeat
          backgroung-size 100% 100%
          width px2rem(66)
          height px2rem(66)
</style>
