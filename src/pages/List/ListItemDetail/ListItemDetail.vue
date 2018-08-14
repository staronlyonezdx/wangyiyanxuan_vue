<template>
  <div class="moreDetail">
    <div class="detailWrap">
      <div class="detailContent">
        <div class="img" v-if="currentDetail">
          <img :src="currentDetail.bannerUrl" alt="">
        </div>

        <div class="detailTit" v-if="currentDetail">
          <div class="title">{{currentDetail.name}}分类</div>
          <div class="line"></div>
        </div>

        <div class="detail">
          <ul class="detailUl" v-if="currentDetail">
            <li class="item" v-for="(sub,index) in currentDetail.subCateList" :key="index" v-if="sub">
              <img :src="sub.wapBannerUrl" alt="">
              <div>{{sub.name}}</div>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  // import PubSub from 'pubsub-js'
  import {mapState} from 'vuex'

  export default {
    props: {
      currentIndex:Number
    },
    // data() {
    //   return {
    //     index: 0
    //   }
    // },
    mounted() {
      // PubSub.subscribe('index', (msg, data) => {
      //   this.index = data
      // })

      this.$store.dispatch('getFenlei', () => {
        new BScroll('.detailWrap', {
          click: true
        })
      })

    },
    computed: {
      ...mapState(['fenleiList']),
      currentDetail() {
        return this.fenleiList[this.currentIndex]
        // return this.fenleiList[this.index]
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .moreDetail
    margin-left px2rem(162)
    height px2rem(1140)
    .detailWrap
      overflow hidden
      height 100%
      .detailContent
        padding px2rem(30) px2rem(30) px2rem(21)
        .img
          width 100%
          height px2rem(192)
          img
            width 100%
            height 100%

        .detailTit
          height px2rem(108)
          line-height px2rem(108)
          color #333
          text-align center
          font-size px2rem(24)
          position relative
          .title
            position relative
            z-index 6
          .line
            width px2rem(200)
            height 1px
            background #d9d9d9
            position absolute
            top 50%
            left 0
            right 0
            margin 0 auto
        .detail
          .detailUl
            display flex
            flex-flow row wrap
            .item
              margin-right px2rem(30)
              width px2rem(144)
              img
                width px2rem(144)
                height px2rem(144)
              div
                font-size px2rem(24)
                text-align center
                height px2rem(72)
</style>
