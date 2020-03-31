// export const imgURL = "http://phd.guaguakj.com"
import Axios from 'axios';
import router from '@/router';
import { Dialog } from 'vant';

export const baseURL = "/api";
export const imgURL = "http://www.blcpoint.com";
export const http = {
    get(url,data,token){
        var list = [];
        for (var key in data){
            list.push(key+'='+data[key]);
        }
        if(token){
            list.push('token='+localStorage.getItem('token'));
        }
        return Axios.get(url+'?'+list.join('&'));
    },
    post(url,data,token){
        var list = [];
        for (var key in data){
            list.push(key+'='+data[key]);
        }
        if(token){
            list.push('token='+localStorage.getItem('token'));
        }
        return Axios.post(url+'?'+list.join('&'),data);
    },
    file(url,file,token){
        // 上传文件
        if(token){
            url+'?token='+token
        }
        return Axios.post(url,file);
    }
    
}

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    var data = response.data;
    // console.log('123',data);
    if(data.msg == '登录过期' || data.msg == "无效的token"){
        Dialog.alert({
          message: data.msg
      });
      setTimeout(()=>{
        router.replace({path:'/log'});
      },1000);
    }
  // 对响应数据做点什么
  return data;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});