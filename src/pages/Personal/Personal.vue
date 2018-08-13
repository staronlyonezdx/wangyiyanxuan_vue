<template>
  <div class="peraonal">
    <TopBar/>
    <div class="loginWrap">
      <div class="logoWrap">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="btnWrap">
        <div class="btnBlock"  @click="handleClick('phone')">
          <i class="loginPhone"></i>
          <span>手机号码登陆</span>
        </div>
        <div class="btnGhostRed" @click="handleClick">
          <i class="loginMail"></i>
          <span @click="handleClick('mail')">邮箱账号登陆</span>
        </div>
        <div class="toLogin">
          <span>手机号快速注册</span>
          <i class="arrow"></i>
        </div>
      </div>
    </div>
    <section class="otherLogin">
      <div class="itemOther">
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-QQ"></i>
        <span>QQ</span>
      </div>
      <div class="itemOther">
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import TopBar from '../../components/TopBar/TopBar'

  export default {
    components: {
      TopBar
    },
    computed:{
      ...mapGetters(['loginType'])
    },
    methods: {
      handleClick(type) {
        this.loginType = type
        this.$router.replace('/login')
      }
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
        padding-top 100px

    .btnWrap
      width 100%
      transform translateY(px2rem(120))
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

  .otherLogin
    position absolute
    width 100%
    height px2rem(60)
    left 0
    bottom px2rem(60)
    text-align center
    .itemOther
      height px2rem(26)
      border-right 1px solid #979797
      display inline-block
      text-align center
      color #979797
      padding 0 px2rem(60)
      font-size px2rem(26)
      >i
        font-size px2rem(26)
      &:last-child
        border-right none
</style>
