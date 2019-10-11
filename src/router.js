import Vue from 'vue'
import Router from 'vue-router'


import webpage from './components/webpage/index'
import webPageHome from './components/webpage/home'
import webPageActivity from './components/webpage/activity'
// 登录
import log from './components/log/index'
import loGin from './components/log/login'
import loGsign from './components/log/sign'
import loGforget from './components/log/forget'

import Home from './views/home/index'
import HomeGive from './views/home/give'
import HomeComment from './views/home/comment'

import Activity from './views/activity/index'
import ActivityDetails from './views/activity/details'
Vue.use(Router)

  // mode: 'history',
  // base: process.env.BASE_URL,  

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'webpage'
    },
    {
      path:'/webpage',
      component:webpage,
      children:[
        {
          path:'/',
          redirect:'home'
        },
        {
          path:'home',
          component:webPageHome
        },
        {
          path:'activity',
          component:webPageActivity
        }
      ]
    },
    {
      path:'/log',
      component:log,
      children:[
        {
          path:'/',
          redirect:'login'
        },
        {
          path:'login',
          component:loGin
        },
        {
          path:'sign',
          component:loGsign
        },
        {
          path:'forget',
          component:loGforget
        }
      ]
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/',
          redirect:'give'
        },
        {
          path:'give',
          component:HomeGive
        },
        {
          path:'comment',
          component:HomeComment
        }
        
      ]
    },
    {
      path:'/activity',
      component:Activity,
      children:[
        {
          path:'/',
          redirect:'details'
        },
        {
          path:'details',
          component:ActivityDetails
        }
        
      ]
    }
  ]
})
