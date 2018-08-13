<template>
  <div class="swiper-container" v-if="banner.length">
    <div class="swiper-wrapper" >
      <div class="swiper-slide" v-for="(b,index) in banner" :key="index">
        <img v-lazy="b.picUrl" alt="">
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['banner'])
    },
    mounted() {
      this.$store.dispatch('getHome', () => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .swiper-container
    width 100%
    margin-top px2rem(148)
    .swiper-wrapper
      height px2rem(400)
      .swiper-slide
        height 100%
        img
          width 100%
          height 100%
  .swiper-pagination-bullet
    width px2rem(40)
    height px2rem(8)
    display block
    background #ffffff
    opacity .4
    border-radius 0
  .swiper-pagination-bullet-active
    opacity 1
</style>
