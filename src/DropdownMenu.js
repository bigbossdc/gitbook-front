import React, { Component } from "react";
import { Link } from "react-router-dom";

class DropdownMenu extends Component {
	onClickHandler() {
		sessionStorage.clear();
	}

	render() {
		return (
			<div className="dropdown-menu w dropdown-menu-scale pull-right" id='alarmBoxAnimation'>
				<a className="dropdown-item" href="/gitbook/user/logout" onClick={this.onClickHandler.bind(this)} style={{ fontFamily: " 'Varela Round', sans-serif" }}>
					<span style={{fontWeight: '900'}}>로그아웃</span>
				</a>
				<Link to={"/gitbook/my/" + sessionStorage.getItem("authUserId") + "/profile"} className="dropdown-item" style={{ fontFamily: " 'Varela Round', sans-serif" }}>
					<span>프로필 관리</span>
				</Link>
				<Link to={"/gitbook/my/" + sessionStorage.getItem("authUserId") + "/account"} className="dropdown-item" style={{ fontFamily: " 'Varela Round', sans-serif" }}>
					<span>계정 관리</span>
				</Link>
				<Link to="/gitbook/main/out" className="dropdown-item" style={{ fontFamily: " 'Varela Round', sans-serif" }}>
					<span style={{color: 'red', fontWeight: '900'}}>회원 탈퇴</span>
				</Link>
				<div className="dropdown-divider"></div>
			</div>
		);
	}
}

export default DropdownMenu;