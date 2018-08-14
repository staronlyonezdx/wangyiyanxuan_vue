<template>
  <div class="login">
    <TopBar/>
    <div class="wrapLogin">
      <div class="logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="loginInfo">
        <div class="input-1">
          <input type="text" :placeholder="placeholder" v-model="name">
        </div>
        <div class="input-2">
          <input :type="type==='email'?'password':'text'" :placeholder="pwdholder" v-model="pwd">
        </div>
        <div class="act">
          <span class="left">{{text1}}</span>
          <span class="right">{{text2}}</span>
        </div>
        <div class="btnBlock" @click.prevent="login">
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
  import {MessageBox} from 'mint-ui';

  export default {
    data() {
      return {
        type: '',
        placeholder: '',
        pwdholder: '',
        text1: '',
        text2: '',
        pwd: '',
        name: ''
      }
    },
    components: {
      TopBar
    },
    beforeRouteEnter(to, from, next) {
      //在进入该路由的时候就要改变type状态
      next(component => {
        const type = component.$route.params.type
        // console.log(type);
        component.type = type
        if (component.type === 'phone') {
          component.placeholder = '请输入手机号'
          component.pwdholder = '请输入短信验证码'
          component.text1 = '遇到问题?'
          component.text2 = '使用密码验证登陆'
        } else if (component.type === 'email') {
          component.placeholder = '邮箱账号'
          component.pwdholder = '密码'
          component.text1 = '注册账号'
          component.text2 = '忘记密码'
        }
      })
    },
    methods: {
      showAlert(msg) {
        MessageBox.alert(msg, '提示');
      },
      login() {
        if (this.type === 'phone') {
          if (/^1\d{10}$/.test(this.name)) {
            this.showAlert('请输入正确的手机号')
          }
          if (/[a-z1-9]{3}/gi.test(this.pwd)) {
            this.showAlert('请输入正确的验证码')
          }
        } else if (this.type === 'email') {
          if (/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/gi.test(this.name)) {
            this.showAlert('请输入正确的邮箱')
          }
          if (/^[a-zA-Z0-9]{4,10}$/gi.test(this.pwd)) {
            this.showAlert('请输入正确的密码')
          }
        }

        this.name = ''
        this.pwd = ''
      }
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
        width 90%
        margin-left px2rem(20)
        outline none
        padding-left px2rem(10)
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
