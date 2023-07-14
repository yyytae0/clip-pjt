import Api from "./api";

// 유저 인증, 정보 관련 API
const commuApi = {
    logIn:async(id, pwd)=>{
        const res = await Api.post('community',{
            id,
            pwd
        },{withCredentials:true});
        return res;
    }
}

export default commuApi;