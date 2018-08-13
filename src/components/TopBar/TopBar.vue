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
      padding-top 25px
      display flex
      position relative
      .goHome
        width px2rem(48)
        height px2rem(44)
        display block
        margin-left 20px
        background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
        background-position 1px 323px
      .logo
       width px2rem(180)
       height px2rem(40)
       display block
       background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
       background-position 1px 665px
       margin-left 255px
       margin-right 30px
      .right
        margin-right 10px
        display flex
        margin-left 72px
        position absolute
        right 0
        .search
          display block
          width px2rem(55)
          height px2rem(44)
          background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
          background-position 1px 55px
          margin-right 20px
        .cart
          display block
          width px2rem(55)
          height px2rem(44)
          margin-right 20px
          background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png')
          background-position 1px 388px

</style>
