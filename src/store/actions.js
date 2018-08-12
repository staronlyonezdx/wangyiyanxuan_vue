import {GETDATA, GETHOME} from './mutation-types'
import {reqData, reqHome} from '../api/index'

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
        goodsPopular:result.popularItemList,
        mainTopic:result.topicList,
        cateList:result.cateList
      })
      cb && cb()
    }
  }
}
