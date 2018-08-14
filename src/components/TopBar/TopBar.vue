<template>
    <div class="topBar">
      <div class="bd">
        <i class="goHome" @click="$router.replace('/home')"></i>
        <i class="logo"></i>
        <div class="right">
          <i class="search"></i>
          <i class="cart"></i>
        </div>
      </div>
    </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
 @import '../../common/stylus/mixins.styl'
  .topBar
    width 100%
    height px2rem(87)
    background #fafafa
    position fixed
    z-index 50
    top 0
    left 0
    .bd
      padding-top px2rem(25)
      display flex
      position relative
      .goHome
        width px2rem(48)
        height px2rem(44)
        display block
        margin-left px2rem(20)
        background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
        background-position px2rem(1) px2rem(323)
      .logo
       width px2rem(180)
       height px2rem(40)
       display block
       background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
       background-position px2rem(1) px2rem(665)
       margin-left px2rem(225)
       margin-right px2rem(30)
      .right
        margin-right px2rem(10)
        display flex
        margin-left px2rem(72)
        position absolute
        right 0
        .search
          display block
          width px2rem(55)
          height px2rem(44)
          background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
          background-position px2rem(1) px2rem(55)
          margin-right px2rem(20)
        .cart
          display block
          width px2rem(55)
          height px2rem(44)
          margin-right px2rem(20)
          background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
          background-position px2rem(1) px2rem(388)

</style>
