import { http } from './config';





// 登录 /log/login
export function login(data){
    return http.post('/User/Login',data);
}

// 获取个人资料 /User/GetMySelfInfo 
export function getMySelfInfo(data){
    return http.post('/User/GetMySelfInfo',data,true);
}

// 修改昵称
export function userNameEdit(data){
    return http.post('/User/UserNameEdit',data,true);
}

// 上传头像
export function uploadUserHeadPic(data){
    return http.file('/Uploads/UploadUserHeadPic',data,true);
}