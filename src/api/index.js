import { http, imgURL } from './config';


export const getImgURL = imgURL;


// 登录 
export function login(data) {
    return http.post('/User/Login', data);
}

// 获取个人资料 
export function getMySelfInfo(data) {
    return http.post('/User/GetMySelfInfo', data, true);
}

// 修改昵称
export function userNameEdit(data) {
    return http.post('/User/UserNameEdit', data, true);
}

// 上传头像
export function uploadUserHeadPic(data) {
    return http.file('/Uploads/UploadUserHeadPic', data, true);
}



// ----------动态


// 获取动态
export function getUserDynamicList(data,isToken) {
    return http.post('/User/GetUserDynamicList', data,isToken);
}

// 动态点赞
export function setDynamicZan(data) {
    return http.post('/User/DynamicZan', data,true);
}




// 上传图片视频
export function uploadMedia(file) {
    return http.file('/Uploads/UploadMedia', file, true);
}

// 发布动态
export function dynamicAdd(data) {
    return http.post('/User/DynamicAdd', data, true);
}

//  -----------商城

// 获取一级分类  /Shop/GetCategoryFirst   --不可用
export function getCategoryFirst() {
    return http.post('/Shop/GetCategoryFirst', {}, true);
}



// ----------功能

// 点赞 
export function setArticleZan(data){
    return http.post('/User/ArticleZan', data,true);
}

// 取消点赞
export function setArticleUnZan(data){
    return http.post('/User/ArticleUnZan', data,true);
}

// 存储对象
export function setDetailDataObject(data){
    sessionStorage.setItem('detail-data-object',JSON.stringify(data));
}

// 存储对象
export function getDetailDataObject(data){
    return  JSON.parse(sessionStorage.getItem('detail-data-object'));
}

// 图文动态显示
// Head（左头像，日期，右"..."图标更多操作<本帖拥有者>）
// 轮播
//     图像(kind:0)，直接显示
//     全景图(kind:1)，显示预览图，加button，点击显示全景图(和美工商量如何做)
//     视频(kind:2),显示视频截图，加button，点击播放视频(我调试用原始video标签，你寻个美观好用的视频播放器)
//     地标(kind:3),显示地标截图，点击进mapControl显示地标(活动用，不着急做)
//     航迹(kind:4)，显示航迹截图，点击显示航迹(活动用，不着急做)
// 底部：点赞、评论、收藏、转发icon，点评论后下浮动出单行输入框

/* 上传图片视频
  *     动态发布需改动的如下：
    *    1：图像视频Upload时带token(测试阶段不用)
    *    2：图像限制(image/jpeg),视频限制(video/mpeg4)，虽然接口支持更多类型
    *    3：找个好用的上传组件，可切割图像，图文框架1080x1350，头像96x96，Log问美工，只是控制比例，后台带压缩，当然前台能压缩更省流量
    *    4：Upload接口换成UploadMedia，老接口也在，不过返回结构不同
    *    5：beforeUpload里加文件大小过滤，10M以内
      */