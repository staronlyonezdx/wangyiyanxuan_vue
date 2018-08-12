<template>
  <div class="g-bd">
    <div class="row">
      <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg">
      <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg">
    </div>
    <div class="row">
      <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" alt="">
      <div class="download-app"></div>
      <router-link to="/home" class="toHome"></router-link>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  .g-bd
    width 100%
    height 100%
    background #eee
    color #333
    /*position relative*/
    .row
      position absolute
      margin-top px2rem(200)
      width 100%
      &:nth-child(2)
        margin-top px2rem(900)
      img
        width 100%
      .download-app
        width px2rem(400)
        height px2rem(100)
        position absolute
        bottom px2rem(340)
        left px2rem(180)
      .toHome
        width px2rem(200)
        height px2rem(20)
        display block
        position absolute
        left px2rem(256)
        bottom px2rem(180)
        font-size px2rem(24)

</style>
