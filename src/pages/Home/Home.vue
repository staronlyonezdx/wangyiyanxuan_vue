<template>
  <div class="home">

    <MaskLayer/>

    <div class="head">
      <HomeHeader/>
      <ListScroll/>
    </div>

    <div class="wrapScroll">
      <div>
        <div class="lbt">
          <Navlb/>
        </div>

        <div class="explain">
          <div class="expItem">
            <i class="ziying"></i>
            <span>网易自营品牌</span>
          </div>
          <div class="expItem">
            <i class="tuihuo"></i>
            <span>30天无忧退货</span>
          </div>
          <div class="expItem">
            <i class="tuikuan"></i>
            <span>48小时无忧退款</span>
          </div>
        </div>

        <div class="whiteSpace"></div>

        <div class="goodSale">
          <div class="header">
            <span>品牌制造商直供</span>
            <i></i>
          </div>
          <div class="goods">
            <ul>
              <li v-for="(good,index) in goodSale" :key="index" v-if="index<=3">
                <div class="ctn">
                  <h4 class="title">{{good.name}}</h4>
                  <span class="price">{{good.floorPrice}}元起</span>
                </div>
                <img :src="good.picUrl" alt="">
              </li>
            </ul>
          </div>
        </div>

        <div class="whiteSpace"></div>

        <div class="indexFloor">
          <div class="moveNew">
            <span class="title">新品首发</span>
            <div class="all">
              <span>查看全部</span>
              <i></i>
            </div>
          </div>

          <GoodsShow :data="goodsNew" :one="1"/>
        </div>

        <div class="indexFloor">
          <div class="moveNew two">
            <span class="title">人气推荐,好物精选</span>
            <div class="all">
              <span>查看全部</span>
              <i></i>
            </div>
          </div>

          <GoodsShow :data="goodsPopular" :two='2'/>
        </div>

        <div class="whiteSpace"></div>

        <div class="countDown">
          <a href="javascript:;">
            <div class="itemLeft">
              <div class="title">严选限时购</div>
              <count-down :currentTime="1481450106" :startTime="1481450110" :endTime="1499999999"
                          :tipText="'活动即将开始'" :tipTextEnd="'活动结束了'" :endText="'活动结束了'"
                          :dayTxt="'天'" :hourTxt="'小时'" :minutesTxt="'分钟'" :secondsTxt="'秒'"></count-down>
              <div class="nextTitle">下一场 22:00 开始</div>
            </div>
            <div class="itemRight">
              <img src="../../assets/images/test2.png" alt="">
              <div class="price">
                <span class="now">¥42</span>
                <span class="old">¥49</span>
              </div>
            </div>
          </a>
        </div>


        <div class="whiteSpace"></div>

        <div class="weal">
          <img src="../../assets/images/move.jpg" alt="">
        </div>

        <div class="whiteSpace"></div>

        <div class="goodSale">
          <div class="header">
            <span>专题精选</span>
            <i></i>
          </div>
          <div class="subject">
            <div class="goodsScroll">
              <ul class="wrapGoods">
                <li class="goodItem" v-for="(item,index) in mainTopic" :key="index">
                  <img v-lazy="item.itemPicUrl" alt="">
                  <div class="line">
                    <h4 class="title">{{item.title}}</h4>
                    <span class="price">{{item.priceInfo}}元起</span>
                  </div>
                  <div class="desc">{{item.subtitle}}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <GoodsList :cateList="cateList"/>


        <div class="copyright">
          <div class="content">
            <div class="bd">
              <a href="javascript:;" class="goApp">下载APP</a>
              <a href="javascript:;">电脑版</a>
            </div>
            <p class="desc">
              <span>网易公司版权所有 © 1997-2018</span>
              <br>
              <span>食品经营许可证：JY13301080111719</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="goTop" @click="goTop">
      <i></i>
    </div>

  </div>

</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from "better-scroll"
  import CountDown from 'vue2-countdown'


  import HomeHeader from './HomeHeader/HomeHeader'
  import Navlb from './Navlb/Navlb'
  import GoodsShow from './GoodsShow/GoodsShow'
  import MaskLayer from '../../components/MaskLayer/Masklayer'
  import ListScroll from './ListScroll/ListScroll'
  import GoodsList from './GoodsList/GoodsList'

  export default {
    components: {
      HomeHeader,
      Navlb,
      MaskLayer,
      GoodsShow,
      ListScroll,
      GoodsList,
      CountDown
    },
    computed: {
      ...mapState(['goodSale', 'goodsNew', 'goodsPopular', 'mainTopic', 'cateList']),
    },
    mounted() {
      this.$store.dispatch('getHome', () => {
        this.$nextTick(() => {
          this.wrapScroll = new BScroll('.wrapScroll', {
            click: true,
          })

          new BScroll('.goodsScroll', {
            click: true,
            scrollX: true
          })
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
  .home
    width 100%
    height 100%
    background white
    .head
      background-color #ffffff
      position fixed
      top 0
      left 0
      right 0
      z-index 5
    .wrapScroll
      width 100%
      height 80%
      margin-bottom px2rem(100)
      .explain
        width px2rem(750)
        height px2rem(72)
        background-color white
        box-sizing border-box
        display flex
        padding 25px 5px
        justify-content space-around
        .expItem
          font-size 25px
          color black
          display flex
          i
            width px2rem(32)
            height px2rem(32)
            display inline-block
            background-image url('../../assets/images/hook.png')
            background-repeat no-repeat
            background-size cover
      .whiteSpace
        width 100%
        height px2rem(20)
        background #f4f4f4
      .goodSale
        background #fff
        margin-bottom 5px
        width 100%
        .header
          width 100%
          height px2rem(110)
          display flex
          font-size px2rem(40)
          line-height px2rem(110)
          span
            margin-left 190px
            margin-right px2rem(10)
          i
            width px2rem(30)
            height px2rem(30)
            display inline-block
            background-image url('../../assets/images/right.png')
            background-repeat no-repeat
            margin-top 40px

        .goods
          width 100%
          height px2rem(468)
          overflow hiddden
          padding-left 20px
          ul
            height px2rem(468)
            li
              width 45%
              height 45%
              float left
              background #f4f4f4
              margin-left px2rem(10)
              margin-bottom px2rem(10)
              position relative
              .ctn
                width 100%
                position absolute
                padding-top px2rem(10)
                padding-left px2rem(10)
                .title
                  font-size px2rem(30)
                .price
                  font-size px2rem(30)
              img
                width 100%
                height 100%

      .indexFloor
        background #fff
        .moveNew
          width px2rem(750)
          height px2rem(260)
          background-image url('../../assets/images/new.png')
          background-size px2rem(750) px2rem(260)
          text-align center
          color #8ba0b6
          font-size 33px
          margin-bottom 20px
          .title
            display inline-block
            margin-top px2rem(80)
          .all
            width px2rem(240)
            height px2rem(56)
            margin px2rem(20) auto
            background #d8e5f1
            line-height px2rem(56)
            i
              width px2rem(10)
              height px2rem(20)
              display inline-block
              background-image url('../../assets/images/move.png')
              background-size px2rem(10) px2rem(22)
              margin-left px2rem(6)
        .two
          background-image url('../../assets/images/hot.png')
          color #b4a078
          .all
            background #f4e9cb

      .countDown
        width 100%
        box-sizing border-box
        height px2rem(320)
        padding px2rem(30) px2rem(40) px2rem(30) px2rem(56)
        margin-bottom px2rem(20)
        background #ffffff
        overflow hidden
        a
          display block
          width 100%
          height 100%
          clearFix()
          .itemLeft
            float left
            padding-top px2rem(40)
            .title
              font-size px2rem(36)
              line-height px2rem(36)
              margin-bottom px2rem(24)
              letter-spacing px2rem(12)
              color #333333
            .countNum
              display inline
              font-size 0
              .time
                display inline-block
                font-size px2rem(32)
                text-align center
                width px2rem(62)
                height px2rem(56)
                line-height px2rem(56)
                border-radius px2rem(4)
                color #ffffff !important
                background #444444 !important
              .colon
                display inline-block
                color #333333 !important
                font-size 30px
                font-weight 700
                width px2rem(20)
                text-align center
                transform translateY(-50%)
            .nextTitle
              margin-top px2rem(40)
              color #333333
              font-size px2rem(24)
              height px2rem(24)
              line-height px2rem(24)
          .itemRight
            width px2rem(320)
            height px2rem(320)
            position relative
            float right
            img
              width 100%
              height 100%
            .price
              width px2rem(96)
              height px2rem(96)
              position absolute
              background-color rgba(244, 143, 24, .95)
              border-radius 50%
              bottom px2rem(36)
              right px2rem(20)
              color #ffffff
              text-align center
              display flex
              flex-direction column
              justify-content center
              span
                font-size px2rem(24)

      .weal
        width px2rem(750)
        height px2rem(300)
        img
          width 100%
          height 100%
      .subject
        width 100%
        height px2rem(457)
        padding-left px2rem(20)
        padding-bottom px2rem(20)
        .goodsScroll
          width 100%
          display flex
          overflow hidden
          .wrapGoods
            display flex
            .goodItem
              margin-right px2rem(40)
              img
                width px2rem(580)
                height px2rem(320)
              .line
                font-size px2rem(30)
                width px2rem(580)
                height px2rem(40)
                clearFix()
                .title
                  ellipsis()
                  float left
                  color #333
                .price
                  float right
                  color $main
              .desc
                width px2rem(580)
                height px2rem(36)
                font-size px2rem(30)
                ellipsis()

      .copyright
        border-top 1px solid rgba(0, 0, 0, .15);
        background-color #414141
        margin-top px2rem(120)
        .content
          text-align center
          padding px2rem(54) px2rem(20) px2rem(28) px2rem(20)
          .bd
            a
              display inline-block
              width px2rem(170)
              height px2rem(60)
              border: 1px solid #999;
              color #ffffff
              font-size px2rem(24)
              line-height px2rem(62)
              &.goApp
                margin-right px2rem(50)
          .desc
            margin-top px2rem(36)
            color #999999
            line-height px2rem(32)
            span
              font-size px2rem(24)

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
</style>
