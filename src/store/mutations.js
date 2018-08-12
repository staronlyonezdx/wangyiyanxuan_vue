import {GETDATA,GETHOME} from './mutation-types'
export default {
  [GETDATA](state,{data}){
    state.data = data;
  },
  [GETHOME](state,{banner,goodSale,goodsNew,goodsPopular,mainTopic,cateList}){
    state.banner = banner;
    state.goodSale = goodSale;
    state.goodsNew = goodsNew;
    state.goodsPopular = goodsPopular;
    state.mainTopic = mainTopic;
    state.cateList = cateList
  }
}
