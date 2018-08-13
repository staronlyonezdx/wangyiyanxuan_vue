<template>
  <div class="goodsShow">
    <div :class="myClass">
      <ul class="goodsUl">
        <li class="goodsLi" v-for="(item,index) in data" :key="index">
          <div class="img">
            <img v-lazy="item.primaryPicUrl" alt="">
          </div>
          <div class="name">{{item.name}}</div>
          <div class="nameDoc">{{item.simpleDesc}}</div>
          <div class="price">¥{{item.retailPrice}}</div>
        </li>
        <div class="more">
          <span>查看全部</span>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        myClass: 'goodsWrap'
      }
    },
    props: {
      data: Array,
      one: Number,
      two: Number
    },
    mounted() {
      this.$store.dispatch("getHome", () => {
        if (this.one === 1) {
          this.$nextTick(() => {
            new BScroll('.goodsWrap', {
              click: true,
              scrollX: true
            })
          })
        }

        if (this.two === 2) {
          this.myClass = 'goodsContainer'
          this.$nextTick(() => {
            new BScroll('.goodsContainer', {
              click: true,
              scrollX: true
            })
          })
        }
      })
    },
    // watch: {
    //   goodsNew() {
    //     if (this.one == 1) {
    //       this.$nextTick(() => {
    //         new BScroll('.goodsWrap', {
    //           click: true,
    //           scrollX: true
    //         })
    //       })
    //     }
    //
    //     if (this.two === 2) {
    //       this.myClass = 'goodsContainer'
    //       this.$nextTick(() => {
    //         new BScroll('.goodsContainer', {
    //           click: true,
    //           scrollX: true
    //         })
    //       })
    //     }
    //   }
    // }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .goodsShow
    width 100%
    height px2rem(440)
    background #fff
    margin-bottom px2rem(10)
    .goodsWrap, .goodsContainer
      margin-left 20px
      display flex
      overflow hidden
      .goodsUl
        display flex
        .goodsLi
          width px2rem(280)
          height px2rem(440)
          margin-right 40px
          .img
            width px2rem(280)
            height px2rem(280)
            background #f4f4f4
            img
              width 100%
              height 100%
          .name
            margin px2rem(10) 0
            padding 0 px2rem(10)
            color #333
            font-size px2rem(28)
            line-height px2rem(34)
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
          .nameDoc
            margin-bottom px2rem(14)
            padding 0 px2rem(10)
            color #7f7f7f
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            font-size px2rem(24)
            line-height px2rem(30)
          .price
            padding 0 px2rem(10)
            color $main
            line-height 1
            font-size px2rem(28)
      .more
        width px2rem(264)
        height px2rem(264)
        border px2rem(8) solid #f4f4f4
        text-align center
        line-height px2rem(264)
        span
          font-size px2rem(28)
          color #333333
</style>
