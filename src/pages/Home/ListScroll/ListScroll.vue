<template>
  <div class="wrapper" ref="wrapper">
    <ul class="listUl">
      <li class="listLi" v-for="(item,index) in data" :key="index" :class="{active:current === index}"
          @click="selected(index)">
        <span class="title">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        current: 0
      }
    },
    computed:{
      ...mapState(['data'])
    },
    mounted() {
      this.$store.dispatch('getData',() => {
        this.$nextTick(() => {
          new BScroll(this.$refs.wrapper, {
            click: true,
            scrollX: true
          })
        })
      })

    },
    methods: {
      selected(index) {
        this.current = index
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .wrapper
    width 100%
    overflow hidden
    display flex
    flex-direction row
    flex-wrap nowrap
    .listUl
      display flex
      flex-wrap nowrap
      justify-content space-between
      padding 0 px2rem(30)
      height px2rem(60)
      background #ffffff
      align-items center
      .listLi
        width px2rem(135)
        height px2rem(60)
        display flex
        flex-direction row
        flex-wrap nowrap
        justify-content space-between
        &.active
          .title
            color $main
            position relative
            &:after
              content ''
              left 0
              bottom 0
              position absolute
              width 100%
              height px2rem(4)
              background $main
        .title
          display inline-block
          letter-spacing px2rem(2)
          padding 0 px2rem(16)
          line-height px2rem(60)
          font-size px2rem(26)
          text-align center
          color #333333
</style>
