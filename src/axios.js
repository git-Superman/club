import Vue from 'vue'
import Axios from 'axios'
import router from '@/router'
import { Dialog } from 'vant'


Vue.use(Dialog)


// Axios.defaults.baseURL = 'http://www.blcpoint.com';

// Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 添加请求拦截器
// Axios.interceptors.request.use(config=> {

//     // 在发送请求之前做些什么

//     // var token = null;
//     // sessionStorage.getItem('token') ? token = sessionStorage.getItem('token') : router.replace({path:'/log/login'});
//     // config.url.indexOf("?")>0?config.url += `&token=${token}`:config.url += `?token=${token}`;


//     return config;
//   }, function (error) {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   });


// 添加响应拦截器
// Axios.interceptors.response.use(function (response) {
//       var data = response.data;
//       if(data.msg == '登录过期' || data.msg == "无效的token"){
//           Dialog.alert({
//             message: data.msg
//         })
//         setTimeout(()=>{
//           router.replace({path:'/log'})
//         },3000);
//       }
//     // 对响应数据做点什么
//     return data;
//   }, function (error) {
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   });


Vue.prototype.axios = Axios;