/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data'
import data_nav from './data_nav'
import fenlei_data from './fenlei_data'
import home_data from './home_data'
import shiwu_data from './shiwu_data'
//返回data接口
Mock.mock('/data', {code: 0, data: data})
//返回bnner接口
Mock.mock('/home', {
  code: 0,
  focusList: home_data.focusList,
  tagList: home_data.tagList,
  newItemNewUserList: home_data.newItemNewUserList,
  popularItemList: home_data.popularItemList,
  topicList:home_data.topicList,
  cateList:home_data.cateList
})

