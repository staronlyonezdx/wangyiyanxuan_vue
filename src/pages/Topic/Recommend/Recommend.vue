<template>
  <div class="recommend">
    <h3 class="title">{{title}}</h3>
    <div class="itemMajor" v-if="data[0]">
      <img v-lazy="data[0].picUrl" alt="">
      <div class="info">
        <div class="line1">
          <div class="lineTitle">{{data[0].title}}</div>
          <div class="price">{{data[0].priceInfo}}元起</div>
        </div>
        <div class="line2">{{data[0].subTitle}}</div>
      </div>
    </div>
    <div class="item" v-for="(item,index) in data[1]" :key="index" v-if="item">
      <div class="info">
        <div class="topicTitle">{{item.title}}</div>
        <div class="cont">{{item.subTitle}}</div>
      </div>
      <div class="topicPic">
        <img v-lazy="item.picUrl" alt="">
        <div class="tag">{{item.typeName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: Array,
      title: String
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .recommend
    padding 0 px2rem(30) px2rem(40)
    margin-bottom px2rem(20)
    background #fff
    .title
      font-size px2rem(28)
      line-height px2rem(120)
      text-align center
      color #333
    .itemMajor
      margin-bottom px2rem(30)
      color #333
      border 1px solid #d9d9d9
      border-radius px2rem(8)
      overflow hidden
      img
        height px2rem(386)
        border-radius px2rem(8) px2rem(8) 0 0
      .info
        color #333
        display flex
        box-sizing border-box
        flex-direction column
        padding px2rem(24) px2rem(20) px2rem(67)
        .line1
          width 100%
          margin-bottom px2rem(30)
          .lineTitle
            font-size px2rem(36)
            margin-right px2rem(170)
            float left
            ellipsis()
          .price
            font-size px2rem(32)
            float right
        .line2
          color #7f7f7f
          font-size px2rem(28)
          line-height 1.2
          ellipsis()
    .item
      display flex
      color #333
      border 1px solid #d9d9d9
      border-radius px2rem(4)
      margin-bottom px2rem(30)
      .info
        width px2rem(350)
        height 100%
        padding-left px2rem(20)
        padding-right px2rem(30)
        font-size px2rem(32)
        ellipsis()
        .topicTitle
          margin-top px2rem(80)
          height px2rem(38)
        .cont
          ellipsis()
          margin-top px2rem(30)
          font-size px2rem(24)
      .topicPic
        width px2rem(280)
        height px2rem(280)
        position relative
        img
          width 100%
        .tag
          font-size px2rem(24)
          height px2rem(36)
          width px2rem(202)
          text-align center
          line-height px2rem(34)
          position absolute
          top px2rem(20)
          left px2rem(20)
          color #333333
          border-radius px2rem(20)
          background-color rgba(255, 255, 255, .9)

</style>
