/* eslin -disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Router from 'vue-router'
import "./assets/js/rem"
import "./assets/css/base.css"
import 'vant/lib/index.css'
import { Overlay , Swipe , SwipeItem , Uploader , DatetimePicker , Popup , AddressList , Toast , AddressEdit , Area} from "vant"

Vue.use( Overlay).use(Swipe).use(SwipeItem).use(Uploader).use(DatetimePicker).use(Popup).use(AddressList).use(Toast).use(AddressEdit).use(Area)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
