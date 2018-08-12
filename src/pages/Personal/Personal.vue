<template>
    <div>
      <TopBar/>
      <div class="loginWrap">
        <div class="logoWrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="btnWrap">
          <div class="btnBlock">
            <i class="loginPhone"></i>
            <span>账号登陆</span>
          </div>
          <div class="btnGhostRed">
            <i class="loginMail"></i>
            <span>短信登陆</span>
          </div>
          <div class="toLogin">
            <span>手机号快速注册</span>
            <i class="arrow"></i>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import TopBar from '../../components/TopBar/TopBar'
  export default {
    components:{
      TopBar
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  .loginWrap
    width 100%
    margin-top px2rem(120)
    .logoWrap
      width 100%
      text-align center
      img
        width px2rem(270)
        height px2rem(90)
        margin-top 100px

    .btnWrap
      width 100%
      margin-top px2rem(120)
      .btnBlock
        width px2rem(673)
        height px2rem(96)
        margin 0 auto
        background-color $main
        text-align center
        line-height px2rem(96)
        font-size 30px
        color white
        display flex
        .loginPhone
          width px2rem(40)
          height px2rem(40)
          display inline-block
          margin-top 25px
          margin-left 240px
          margin-right 10px
          background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png')
          background-position -40px 246px
      .btnGhostRed
        width px2rem(673)
        height px2rem(96)
        margin 0 auto
        border 1px solid $main
        text-align center
        line-height px2rem(96)
        font-size 30px
        display flex
        margin-top 30px
        .loginMail
          width px2rem(40)
          height px2rem(40)
          display inline-block
          margin-top 25px
          margin-left 240px
          margin-right 10px
          background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png')
          background-position -40px 295px
      .toLogin
        width px2rem(673)
        height px2rem(40)
        text-align center
        font-size 27px
        line-height px2rem(40)
        margin-top 30px
        .arrow
          width px2rem(27)
          height px2rem(27)
          display inline-block
          background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-right3-c1ab37e88b.png')
          background-position 32px 30px
</style>
