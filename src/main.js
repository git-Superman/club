/* eslin -disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/js/rem"
import "./assets/css/base.css"
import 'vant/lib/index.css'
import { Overlay , Swipe , SwipeItem} from "vant"

Vue.use( Overlay).use(Swipe).use(SwipeItem)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
