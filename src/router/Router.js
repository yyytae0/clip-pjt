import React, { useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Main from "../pages/Main";
import Train from "../pages/Train";

function Router() {
    // 이해를 돕기 위해 Router객체 안에 데이터를 지정했지만
    // 실제 개발 시에는 아마도 App.js상에서 localStorage의 토큰을 까서 유저 정보 get후에
    // 내려줄 거 같음
    // Router에선 라우팅만
    const [address, setAdd] = useState('');

    useEffect(()=>{
        setAdd('서울');
    },[])

    
    const myUser ="user1";

    return (
        <BrowserRouter>
        <Routes>
        {/* Route 컴포넌트를 커스텀해서 로그인해야 들어갈 수 있는 링크인지 아닌지 검증 예정 */}
        {/* components 디렉토리 내에 PublicRoute, AuthRoute 컴포넌트 생성해서 할듯? */}
        <Route path="/main" element={<Main user={myUser} address={address}/>} />
        <Route path="/main/:id" element={<Main user={myUser} address={address}/>} />
        <Route path="/train" element={<Train/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Router;