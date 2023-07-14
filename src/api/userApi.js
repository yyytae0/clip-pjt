import Api from "./api";

// 유저 인증, 정보 관련 API
const userApi = {
    logIn:async(id, pwd)=>{
        const res = await Api.post('login',{
            id,
            pwd
        },{withCredentials:true});
        return res;
    }
}

export default userApi;