<template>
  <div class="more">
    <div class="moreTitle">
      <div class="title">更多精彩</div>
      <div class="line"></div>
    </div>
    <div class="item" v-for="(item,index) in findMore " :key="index" v-if="index <= 8">
      <img v-lazy="item.itemPicUrl" alt="">
      <div class="desc">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['findMore'])
    },
    mounted() {
      this.$store.dispatch('getTopic')
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .more
    margin 0 px2rem(30) px2rem(30)
    .moreTitle
      height px2rem(140)
      text-align center
      line-height px2rem(140)
      margin 0 px2rem(24)
      font-size px2rem(28)
      color #333333
      position relative
      .title
        position relative
        z-index 2
      .line
        height 1px
        background #d9d9d9
        width 100%
        position absolute
        top 50%

    .item
      background white
      padding px2rem(24)
      margin-bottom px2rem(30)
      color #333
      img
        width px2rem(642)
        height px2rem(360)
      .desc
        font-size px2rem(28)
        padding px2rem(28) 0
        line-height 1.2
        ellipsis()

</style>
