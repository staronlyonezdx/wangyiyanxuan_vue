<template>
  <div class="wrap">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner,index) in topicBanner" :key="index">
          <img v-lazy="banner.picUrl" alt="">
          <div class="content">
            <div class="subTitle">-- {{banner.subTitle}} --</div>
            <div class="title">{{banner.title}}</div>
            <div class="desc">{{banner.desc}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import Swiper from 'swiper'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['topicBanner'])
    },
    mounted() {
      this.$store.dispatch('getTopic', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            direction: 'horizontal',
            spaceBetween: 20,
            loop: true,
            slidesPerView: 1.15,
            centeredSlides: true,
            autoplay: true
          });
        })
      })


    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .wrap
    margin-top px2rem(100)
    padding px2rem(25) 0
    width 100%
    background white
    .swiper-container
      .swiper-wrapper
        .swiper-slide
          width px2rem(650)
          height px2rem(385)
          margin-right px2rem(40)
          position relative
          img
            width 100%
            height px2rem(385)
          .content
            position absolute
            width px2rem(466)
            height px2rem(198)
            display flex
            flex-direction column
            align-items center
            top 0
            left 0
            bottom 0
            right 0
            margin auto
            background rgba(255,255,255,0.9)
            .subTitle
              font-size px2rem(20)
              color #7f7f7f
              line-height px2rem(30)
              padding 0 px2rem(8)
              margin-top px2rem(20)
            .title
              font-size px2rem(32)
              line-height px2rem(48)
              color #333
              margin-top px2rem(26)
              font-weight 700
            .desc
               font-size px2rem(24)
               color #333
               line-height px2rem(36)
               padding-top px2rem(4)
</style>
