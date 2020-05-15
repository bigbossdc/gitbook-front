import React, { Component, Fragment } from "react";

import Header from "./Header";
import Header2 from "./Header2";
import Navigation from "./Navigation";
import Navigation2 from "./Navigation2";
import ProfileAndAccount from "./ProfileAndAccount"

class MyProfilePage extends Component {
	render() {
		console.log("called MyProfilePage...");
		return (
			<Fragment>
				<Header></Header>
				<Header2 name="MyTimeline"></Header2>
				<section className="profile-two">
					<div className="container-fluid">
						<div className="row">
							<Navigation /> {/** 네비게이션 */}
							{/** 두번째 섹션 */}
							<div className="col-lg-6" style={{ background: "#fff", marginTop: "1px" }}>
								<ProfileAndAccount />
							</div>
							{/** 두번째 섹션 */}
							<Navigation2 />
						</div>
						{/** row 종료 */}
					</div>
					{/** container-fluid 종료 */}
				</section>
				{/** profile-twd 종료 */}
			</Fragment>
		);
	}
}

export default MyProfilePage;
