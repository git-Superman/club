// export const imgURL = "http://phd.guaguakj.com"
import Axios from 'axios';
import router from '@/router';
import { Dialog } from 'vant';

export const baseURL = "http://www.blcpoint.com";
export const imgURL = "http://www.blcpoint.com";
export const http = {
    get(url, data, token) {
        var list = [];
        for (var key in data) {
            list.push(key + '=' + data[key]);
        }
        if (token) {
            // if(!localStorage.getItem('token')){
            //     Dialog.confirm({
            //         title: '消息',
            //         message: '您还没有登录，去登录？'
            //       }).then(() => {
            //         // on confirm
            //         router.replace({ path: '/log' });
            //       }).catch(() => {
            //         // on cancel
            //       });
            // }
            list.push('token=' + localStorage.getItem('token'));
        }
        return Axios.get(baseURL + url + '?' + list.join('&'));
    },
    post(url, data, token) {
        
        var list = [];
        for (var key in data) {
            list.push(key + '=' + data[key]);
        }
        if (token) {
            // if(!localStorage.getItem('token')){
            //     Dialog.confirm({
            //         title: '消息',
            //         message: '您还没有登录，去登录？'
            //       }).then(() => {
            //         // on confirm
            //         router.replace({ path: '/log' });
            //       }).catch(() => {
            //         // on cancel
            //       });
            // }
            list.push('token=' + localStorage.getItem('token'));
        }
        // console.log(data, '~~~~~~~', baseURL + url + '?' + list.join('&'));
        console.log(baseURL + url + '?' + list.join('&'));
        return Axios.post(baseURL + url + '?' + list.join('&'));
    },
    file(url, file, token) {
        // 上传文件
        if (token) {
            url + '?token=' + token
            // if(!localStorage.getItem('token')){
            //     Dialog.confirm({
            //         title: '消息',
            //         message: '您还没有登录，去登录？'
            //       }).then(() => {
            //         // on confirm
            //         router.replace({ path: '/log' });
            //       }).catch(() => {
            //         // on cancel
            //       });
            // }
        }
        return Axios.post(baseURL + url, file);
    }

}

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    var data = response.data;
    if (data.msg === '登录过期' || data.msg === "无效的token") {
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
    //     Dialog.alert({
    //         message: data.msg
    //     });
    //     // setTimeout(() => {
    //     //     router.replace({ path: '/log' });
    //     // }, 1000);
    }
    // 对响应数据做点什么

    return data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});