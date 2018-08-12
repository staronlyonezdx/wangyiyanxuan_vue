import Vue from 'vue'
import VueRouter  from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home/Home'
import List from '../pages/List/List'
import Topic from '../pages/Topic/Topic'
import Personal from '../pages/Personal/Personal'
import ShopCart from '../pages/ShopCart/ShopCart'
import InterPage from '../pages/InterPage/InterPage'


export default  new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/topic',
      component:Topic,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/list',
      component:List,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/shopCart',
      component:ShopCart,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/personal',
      component:Personal,
      meta:{
        showFooter:true
      }
    },
    {
      path:'/interPage',
      component:InterPage,
      meta:{
        showFooter:false
      }
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})
