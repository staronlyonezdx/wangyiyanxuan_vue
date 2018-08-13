<template>
  <div class="topicShow">
    <h3 class="title">十点一刻</h3>
    <div class="showWrap">
      <ul class="showUl">
        <li class="showLi" v-for="(item,index) in tenfifteen" :key="index">
          <span class="lineTitle">-- 今日话题 --</span>
          <span class="tsTitle">{{item.title}}</span>
          <span class="desc">{{item.desc}}</span>
          <span class="joinInfo">{{item.participantNum}}人参与话题</span>
        </li>
        <div class="more">
          <span>查看全部话题</span>
          <i></i>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['tenfifteen'])
    },
    mounted() {
      this.$store.dispatch('getTopic', () => {
        new BScroll('.showWrap', {
          click: true,
          scrollX: true
        })
      })
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../../common/stylus/mixins.styl'
  .topicShow
    margin-bottom px2rem(20)
    padding-left px2rem(20)
    padding-bottom px2rem(20)
    background #fff
    .title
      font-size px2rem(28)
      line-height px2rem(120)
      text-align center
      color #333
    .showWrap
      display flex
      .showUl
        display flex
        .showLi
          width px2rem(633)
          height px2rem(412)
          background-image url('../../../assets/images/qipao.png')
          background-repeat no-repeat
          background-size 100% 100%
          margin-right px2rem(20)
          display flex
          flex-direction column
          align-items center
          .lineTitle
            font-size px2rem(24)
            color #7f7f7f
            margin-top px2rem(80)
          .tsTitle
            font-size px2rem(36)
            font-weight 700
            margin-top px2rem(60)
          .desc
            line-height 1.5
            font-size px2rem(28)
            margin-top px2rem(20)
            margin-bottom px2rem(14)
            ellipsis()

          .joinInfo
            font-size px2rem(24)
            margin-top px2rem(20)
        .more
          width px2rem(560)
          height px2rem(365)
          border 10px solid #e6e6e6
          background #fafafa
          display flex
          align-items center
          justify-content center
          span
            color #7f7f7f
            font-size px2rem(32)
            margin-right px2rem(20)
          i
            width px2rem(30)
            height px2rem(30)
            background-image url('../../../assets/images/right.png')
            background-repeat no-repeat
            background-size 100% 100%
</style>
