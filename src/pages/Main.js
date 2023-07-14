import React from "react";
import PropTypes from "prop-types";

// Main(props) 로 접근 가능하지만 구조분해할당 사용하여 {user, address} 형태로 분해
function Main({user, address}) {
    return <div>Main, {user} / {address}</div>
}

export default Main;

// isRequired가 아닌 props의 경우 default value 설정 필요
Main.defaultProps = {
    user : ''
}

// 내려오는 props들의 자료형 선언 필요(ESLint)
Main.propTypes = {
    user:PropTypes.string,
    address : PropTypes.string.isRequired
};