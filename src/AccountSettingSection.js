import React, { Component, Fragment } from "react";
import "./Fluffs/assets/css/demos/photo.css";
import AccountSettingBeforeAuth from "./AccountSettingBeforeAuth";
import AccountSettingAfterAuth from "./AccountSettingAfterAuth";

export default class AccountSettingSection extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			editable: false,
		};
	}

	onAuth(loginInfo) {
		alert(loginInfo.email + " / " + loginInfo.password + " 로 인증되었다는 전제하에 계정 수정 창으로 이동");
		this.setState({
			editable: !this.state.editable,
		});
	}

	onModifyUserInfo(userInfo) {
		
	}

	render() {
		return <Fragment>{this.state.editable ? <AccountSettingAfterAuth /> : <AccountSettingBeforeAuth onAuthHandler={this.onAuth.bind(this)} />}</Fragment>;
	}
}
