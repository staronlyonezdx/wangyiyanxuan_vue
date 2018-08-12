<template>
  <div class="header">
    <div class="logo"></div>
    <div class="search">
      <i></i>
      <span>搜索商品, 共9789款好物</span>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .header
    height px2rem(56)
    display flex
    padding px2rem(16) px2rem(30)
    align-items center
    .logo
      width px2rem(140)
      height px2rem(40)
      background-image url('../../../assets/images/icons.png')
      background-position -4px 236px
      background-size 108%
      margin-right px2rem(20)
      display inline-block
    .search
      flex-grow 1
      display flex
      flex-flow row nowrap
      align-items center
      justify-content center
      width px2rem(532)
      height px2rem(56)
      background-color #ededed
      border-radius 6px
      i
        display inline-block
        width px2rem(28)
        height px2rem(28)
        background url('../../../assets/images/search.png')
        margin-right px2rem(6px)
      span
        color #666666
        font-size px2rem(26)


</style>
