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
			<div className="banner-content" style={{ marginTop: "0px", background:"#fff", boxShadow:"5px 5px 5px rgb(231, 230, 230)", borderRadius:"20px"}}>
				<div className="tab" style={{ borderRadius:"20px 20px 20px 0px"}}>
					<Link to={"/gitbook/my/" + sessionStorage.getItem("authUserId") + "/profile"}>
						{window.location.href.split("/").pop() === "profile" ? 
							<button className="account-btn-clicked" name="profile">
								Profile
							</button>
							:<button className="" name="profile">
								Profile
							</button>
						}

					</Link>
					<Link to={"/gitbook/my/" + sessionStorage.getItem("authUserId") + "/account"}>
						{window.location.href.split("/").pop() === "account" ?
							<button className="account-btn-clicked" name="account">
								Account
							</button>
							:<button className="tablinks" name="account">
								Account
							</button>
						}
					</Link>
				</div>
				<br />

				{window.location.href.split("/").pop() === "profile" ? <ProfileSection userid={this.props.match.params.userid} /> : <AccountSettingSection />}
			</div>
		);
	}
}
