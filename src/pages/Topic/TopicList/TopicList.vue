<template>
  <div class="topicList">
    <div class="listWrap" ref="column">
      <ul class="listUl">
        <li class="item" v-for="(item,index) in column" :key="index">
          <img v-lazy="item.picUrl" alt="">
          <span class="num">{{item.articleCount}}</span>
          <div class="title">{{item.title}}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['column'])
    },
    mounted() {
      this.$store.dispatch('getTopic', () => {
        this.$nextTick(() => {
          new BScroll(this.$refs.column, {
            click: true,
            scrollX: true
          })
        })
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .topicList
    height px2rem(226)
    background white
    padding px2rem(32) 0 px2rem(28) px2rem(30)
    margin-bottom px2rem(20)
    .listWrap
      display flex
      overflow hidden
      .listUl
        display flex
        .item
          width px2rem(164)
          height px2rem(220)
          position relative
          padding-right px2rem(40)
          img
            width px2rem(164)
            height px2rem(164)
          .num
            font-size px2rem(24)
            color #ffff
            position absolute
            top 0
            right px2rem(40)
            width px2rem(116)
            height px2rem(32)
            background url('../../../assets/images/bg.png') no-repeat
          .title
            font-size px2rem(24)
            color #333
            line-height 1
            height px2rem(30)
            text-align center
            margin-top px2rem(20)
            ellipsis()
</style>
