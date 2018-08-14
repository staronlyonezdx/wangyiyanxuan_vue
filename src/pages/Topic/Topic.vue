<template>
  <div class="topic">

    <TopBar/>

    <div class="wrapTopic">
      <div class="wrapContent">
        <TopLb/>

        <TopicList/>

        <div class="whiteSpace"></div>

        <Recommend :data="recommend" :title="'为你推荐'"/>

        <div class="whiteSpace"></div>

        <TopicShow/>

        <div class="whiteSpace"></div>

        <Recommend :data="zhenpin" :title="'严选臻品'"/>

        <div class="whiteSpace"></div>

        <div class="look">
          <h3 class="title">严选LOOK</h3>
          <div class="content">
            <img :src="yxLook.picUrl" alt="">
            <div class="author">
              <div class="authorPic">
                <img :src="yxLook.avatar" alt="">
              </div>
              <div class="authorName">{{yxLook.nickname}}</div>
            </div>
            <p class="desc">{{yxLook.content}}</p>
          </div>
        </div>

        <MoreTopic/>

      </div>
    </div>

    <div class="goTop" @click="goTop">
      <i></i>
    </div>

  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import TopBar from '../../components/TopBar/TopBar'
  import TopLb from './TopLb/TopLb'
  import TopicList from './TopicList/TopicList'
  import Recommend from './Recommend/Recommend'
  import TopicShow from './TopicShow/TopicShow'
  import MoreTopic from './MoreTopic/MoreTopic'

  export default {
    components: {
      TopBar,
      TopLb,
      TopicList,
      Recommend,
      TopicShow,
      MoreTopic,
    },
    computed: {
      ...mapState(['recommend', 'zhenpin', 'yxLook'])
    },
    mounted() {
      this.$store.dispatch('getTopic', () => {
        this.wrapScroll = new BScroll('.wrapTopic', {
          click: true
        })
      })
    },
    methods: {
      goTop() {
        this.wrapScroll.scrollTo(0,0,2000)
      }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  .topic
    width 100%
    height 100%
    background #f4f4f4
    .goTop
      position fixed
      z-index 99
      bottom px2rem(120)
      right px2rem(34)
      i
        width px2rem(100)
        height px2rem(100)
        display block
        background url('../../assets/images/goTop.png') no-repeat
    .wrapTopic
      height 90%
    .whiteSpace
      width 100%
      height px2rem(20)
      background #f4f4f4
    .look
      margin-bottom px2rem(20)
      background #ffffff
      .title
        font-size px2rem(28)
        line-height px2rem(120)
        text-align center
        color #333
      .content
        display flex
        flex-direction column
        img
          width 100%
        .author
          padding px2rem(20) 0 px2rem(20) px2rem(20)
          display flex
          align-items center
          .authorPic
            img
              width px2rem(46)
              height px2rem(46)
              border-radius 50%
              margin-right px2rem(10)
          .authorName
            color: #333;
            font-size px2rem(28)
            letter-spacing px2rem(4)
            margin-left px2rem(20)
            ellipsis()
        .desc
          font-size px2rem(28)
          color #7f7f7f
          line-height 1.6
          padding px2rem(10) px2rem(30) px2rem(20)
</style>
