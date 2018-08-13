import {GETDATA, GETHOME, GETFENLEI, GETTOPIC} from './mutation-types'
import {reqData, reqHome, reqFeilei, reqTopic} from '../api/index'

export default {
  async getData({commit}, cb) {
    const result = await reqData()
    if (result.code === 0) {
      const data = result.data
      commit(GETDATA, {data})
      cb && cb()
    }
  },
  async getHome({commit}, cb) {
    const result = await reqHome()
    if (result.code === 0) {
      commit(GETHOME, {
        banner: result.focusList,
        goodSale: result.tagList,
        goodsNew: result.newItemNewUserList,
        goodsPopular: result.popularItemList,
        mainTopic: result.topicList,
        cateList: result.cateList
      })
      cb && cb()
    }
  },
  async getFenlei({commit}, cb) {
    const result = await reqFeilei()
    if (result.code === 0) {
      commit(GETFENLEI, {fenleiList: result.categoryL1List})
      cb && cb()
    }
  },
  async getTopic({commit}, cb) {
    const result = await reqTopic()
    if (result.code === 0) {
      commit(GETTOPIC, {
        topicBanner: result.banner,
        column: result.column,
        recommend: result.recommend,
        zhenpin: result.zhenpin,
        tenfifteen: result.tenfifteen,
        yxLook: result.yxLook,
        findMore: result.findMore
      })
      cb && cb()
    }
  }
}
