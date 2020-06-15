import React, { Component } from "react";
import "./Fluffs/assets/css/demos/photo.css";
import "./Fluffs/assets/css/demos/join.css";
import "./Fluffs/assets/css/ProfileAndAccount_tab.css";
import "./Fluffs/assets/css/ProfileAndAccount_button.css";
import ProfileSection from "./ProfileSection";
import AccountSettingSection from "./AccountSettingSection";
import { Link } from "react-router-dom";

export default class ProfileAndAccount extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			currentTab: "",
		};
	}

	render() {
		return (
			<div className="banner-content" style={{ marginTop: "0px" }}>
				<div className="tab">
					<Link to={"/gitbook/my/" + sessionStorage.getItem("authUserId") + "/profile"}>
						<button className="tablinks" name="profile">
							Profile
						</button>
					</Link>
					<Link to={"/gitbook/my/" + sessionStorage.getItem("authUserId") + "/account"}>
						<button className="tablinks" name="account">
							Account
						</button>
					</Link>
				</div>
				<br />
				<br />

				{window.location.href.split("/").pop() === "profile" ? <ProfileSection userid={this.props.match.params.userid} /> : <AccountSettingSection />}
			</div>
		);
	}
}
