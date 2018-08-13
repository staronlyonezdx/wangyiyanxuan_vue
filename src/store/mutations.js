import {GETDATA, GETHOME, GETFENLEI, GETTOPIC} from './mutation-types'

export default {
  [GETDATA](state, {data}) {
    state.data = data;
  },
  [GETHOME](state, {banner, goodSale, goodsNew, goodsPopular, mainTopic, cateList}) {
    state.banner = banner;
    state.goodSale = goodSale;
    state.goodsNew = goodsNew;
    state.goodsPopular = goodsPopular;
    state.mainTopic = mainTopic;
    state.cateList = cateList
  },
  [GETFENLEI](state, {fenleiList}) {
    state.fenleiList = fenleiList
  },
  [GETTOPIC](state, {topicBanner,column,recommend,zhenpin,tenfifteen,yxLook,findMore}) {
    state.topicBanner = topicBanner
    state.column = column
    state.recommend = recommend
    state.zhenpin = zhenpin
    state.tenfifteen = tenfifteen
    state.yxLook = yxLook
    state.findMore = findMore
  }
}
