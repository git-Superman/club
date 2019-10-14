import Vue from 'vue'
import Router from 'vue-router'


import webpage from './components/webpage/index'
import webPageHome from './components/webpage/home'
import webPageActivity from './components/webpage/activity'
import webPageStore from './components/webpage/store'
import webPageMy from './components/webpage/my'
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

import Dynamic from './views/dynamic/index'
import DynamicName from './views/dynamic/dynamic'
import DynamicActivity from './views/dynamic/activity'

import Store from './views/store/index'
import StoreName from './views/store/this'
import StoreDetails from './views/store/details'
import StoreCounter from './views/store/counter'
import StorePay from './views/store/pay'
import StoreSite from './views/store/site'
import StoreEdit from './views/store/edit'
import StoreOTC from './views/store/OTC'
import StoreIssue from './views/store/issue'

import My from './views/my/index'
import MyInfo from './views/my/info'
import MyPassword from './views/my/changePassword'
import MyPhone from './views/my/changePhone'
import MyImageText from './views/my/imageText'
import MyImageTextDetails from './views/my/imageTextDetails'
import MyActivity from './views/my/activity'
import MyEnshrine from './views/my/enshrine'
import MyCommodity from './views/my/commodity'
import MyCommodityDetails from './views/my/commodityDetails'

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
          name:'home',
          component:webPageHome
        },
        {
          path:'activity',
          name:'activity',
          component:webPageActivity
        },
        {
          path:'store',
          name:'store',
          component:webPageStore
        },
        {
          path:'my',
          name:'my',
          component:webPageMy
        },
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
    },
    {
      path:'/dynamic',
      component:Dynamic,
      children:[
        {
          path:'/',
          redirect:'this'
        },
        {
          path:'this',
          component:DynamicName
        },
        {
          path:'activity',
          component:DynamicActivity
        }
        
      ]
    },
    {
      path:'/store',
      component:Store,
      children:[
        {
          path:'/',
          redirect:'this'
        },
        {
          path:'this',
          component:StoreName
        },
        {
          path:'details',
          component:StoreDetails
        },
        {
          path:'counter',
          component:StoreCounter
        },
        {
          path:'pay',
          component:StorePay
        },
        {
          path:'site',
          component:StoreSite
        },
        {
          path:'edit',
          component:StoreEdit
        },
        {
          path:'otc',
          component:StoreOTC
        },
        {
          path:'issue',
          component:StoreIssue
        },
        
      ]
    },
    {
      path:'/my',
      component:My,
      children:[
        {
          path:'/',
          redirect:'info'
        },
        {
          path:'info',
          component:MyInfo
        },
        {
          path:'pass',
          component:MyPassword
        },
        {
          path:'phone',
          component:MyPhone
        },
        {
          path:'image-text',
          component:MyImageText
        },
        {
          path:'image-text-details',
          component:MyImageTextDetails
        },
        {
          path:'activity',
          component:MyActivity
        },
        {
          path:'enshrine',
          component:MyEnshrine
        },
        {
          path:'commodity',
          component:MyCommodity
        },
        {
          path:'commodity-details',
          component:MyCommodityDetails
        },
      ]
    }
  ]
})
