import React, { Component, Fragment } from "react";

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
			editable: true,
		});
	}

	onModifyUserInfo(userInfo) {
		this.setState({
			editable: false,
		});
	}

	render() {
		console.log("called AccountSettingSection...");
		return (
			<Fragment>
				{this.state.editable ? (
					<AccountSettingAfterAuth onModifyHandler={this.onModifyUserInfo.bind(this)} />
				) : (
					<AccountSettingBeforeAuth onAuthHandler={this.onAuth.bind(this)} />
				)}
			</Fragment>
		);
	}
}
