import React, { Component } from "react";
import "./Fluffs/assets/css/demos/photo.css";
import "./Fluffs/assets/css/ProfileAndAccount_tab.css";
import ProfileSection from "./ProfileSection";
import AccountSettingSection from "./AccountSettingSection";

export default class ProfileAndAccount extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			currentTab: "profile",
			currentTabObj: <ProfileSection/>
		};
	}
	

	render() {
		return (
			<div className="banner-content" style={{ marginTop: "0px" }}>
				<div className="tab">
					<button className="tablinks" onClick={ () => this.setState({currentTab: "profile", currentTabObj: <ProfileSection/>}) }>
						Profile
					</button>
					<button className="tablinks" onClick={ () => this.setState({currentTab: "account", currentTabObj: <AccountSettingSection/>}) }>
						Account
					</button>
				</div>
				<br/><br/>

				{this.state.currentTabObj}
			</div>
		);
	}
}
