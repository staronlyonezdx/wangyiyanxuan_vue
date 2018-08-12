<template>
  <div class="goTop">
    <i class="iconfont icon-fanhuidingbu" id="goTop"></i>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .goTop
    position fixed
    z-index 99
    bottom px2rem(120)
    right px2rem(34)
    #goTop
      font-size 80px
      color #999
</style>
