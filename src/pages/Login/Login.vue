<template>
  <div class="login">
    <TopBar/>
    <div class="wrapLogin">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="loginInfo">
        <div class="input-1">
          <input type="text" placeholder="请输入手机号码">
        </div>
        <div class="input-2">
          <input type="text" placeholder="请输入验证码">
        </div>
        <div class="act">
          <span class="left">遇到问题?</span>
          <span class="right">使用验证码登陆</span>
        </div>
        <div class="btnBlock">
          <span>登陆</span>
        </div>
      </div>
      <div class="footer">
        <div class="btnGhostRed" @click="$router.replace('/personal')">
          <span>其他方式登陆</span>
        </div>
        <div class="toLogin">
          <span>注册账号</span>
          <i class="arrow"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import TopBar from '../../components/TopBar/TopBar'

  export default {
    components: {
      TopBar
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .login
    width 100%
    height 100%
    background white
    .logo
      width 100%
      text-align center
      img
        width px2rem(270)
        height px2rem(90)
        margin-top px2rem(200)
    .loginInfo
      width px2rem(673)
      margin px2rem(100) auto px2rem(30)
      display flex
      flex-direction column
      font-size px2rem(30)
      input
        height px2rem(96)
        margin-left px2rem(20)
      .act
         width 100%
         height px2rem(96)
         text-align center
         line-height px2rem(96)
         font-size px2rem(24)
         .left
           float left
           margin-left px2rem(20)
         .right
           float right
           margin-right px2rem(20)
      .btnBlock
        width px2rem(673)
        height px2rem(96)
        margin 0 auto
        background-color $main
        text-align center
        line-height px2rem(96)
        font-size 30px
        color white
    .footer
      .btnGhostRed
        width px2rem(673)
        height px2rem(96)
        margin 0 auto
        border 1px solid $main
        text-align center
        line-height px2rem(96)
        font-size 30px
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
