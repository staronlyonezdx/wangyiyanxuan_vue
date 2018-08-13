<template>
  <div class="navBarContainer" v-show="$route.meta.showFooter">
    <ul class="navbar">
      <li class="navbar-item" :class="{on:$route.path === '/home'}" @click="goTo('/home')">
        <span class="item_icon">
          <i class="iconfont icon-shouye2"></i>
        </span>
        <span class="title">首页</span>
      </li>
      <li class="navbar-item" :class="{on:$route.path === '/topic'}" @click="goTo('/topic')">
        <span class="item_icon">
          <i class="iconfont icon-fangkuai"></i>
        </span>
        <span class="title">识物</span>
      </li>
      <li class="navbar-item" :class="{on:$route.path === '/list'}" @click="goTo('/list')">
        <span class="item_icon">
          <i class="iconfont icon-fenlei"></i>
        </span>
        <span class="title">分类</span>
      </li>
      <li class="navbar-item" :class="{on:$route.path === '/shopCart'}" @click="goTo('/shopCart')">
        <span class="item_icon">
          <i class="iconfont icon-gouwuchekong"></i>
        </span>
        <span class="title">购物车</span>
      </li>
      <li class="navbar-item" :class="{on:$route.path === '/personal'}" @click="goTo('/personal')">
        <span class="item_icon">
          <i class="iconfont icon-icon-"></i>
        </span>
        <span class="title">个人</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      goTo(path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .navBarContainer
    width 100%
    height px2rem(100)
    background-color: #f5f5f5;
    position fixed
    bottom 0
    overflow hidden
    .navbar
      width 100%
      height px2rem(100)
      display flex
      justify-content space-around
      align-items center
      .navbar-item
        width px2rem(80)
        display flex
        flex-direction column
        text-align: center;
        &.on
          color #b4282d
        .item_icon
          .iconfont
            font-size px2rem(48)
        .title
          font-size px2rem(24)
          margin-top px2rem(10)


</style>
