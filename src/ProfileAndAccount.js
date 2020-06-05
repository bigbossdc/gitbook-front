import React, { Component } from "react";
import "./Fluffs/assets/css/demos/photo.css";
import "./Fluffs/assets/css/demos/join.css";
import "./Fluffs/assets/css/ProfileAndAccount_tab.css";
import "./Fluffs/assets/css/ProfileAndAccount_button.css";
import ProfileSection from "./ProfileSection";
import AccountSettingSection from "./AccountSettingSection";

export default class ProfileAndAccount extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			currentTab: "profile",
		};
	}

	onChangeTab(event){
		let tabName = event.target.name;
		if (tabName !== this.state.currentTab) {
			this.setState({
				currentTab: tabName,
			});
		}
	};

	render() {
		return (
			<div className="banner-content" style={{ marginTop: "0px" }}>
				<div className="tab">
					<button className="tablinks" name="profile" onClick={this.onChangeTab.bind(this)}>
						Profile
					</button>
					<button className="tablinks" name="account" onClick={this.onChangeTab.bind(this)}>
						Account
					</button>
				</div>
				<br />
				<br />

				{this.state.currentTab === 'profile' ? <ProfileSection userid={this.props.match.params.userid}/> : <AccountSettingSection />}
			</div>
		);
	}
}
