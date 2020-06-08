import React, { Component } from "react";
import AlarmList from "./AlarmList";

export default class AlarmBox extends Component {
	render() {
		return (
			<li className="dropdown notification-list" style={{ paddingLeft: "20px" }}>
				<a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
					<i className="fa fa-bell noti-icon" style={{ display: "inline-block" }}></i>
					<span className="badge badge-danger badge-pill noti-icon-badge">4</span>
				</a>
				<div className="dropdown-menu dropdown-menu-right dropdown-lg">
					<div className="dropdown-item noti-title" style={{ height: "40px" }}>
						<h6 className="m-0" style={{ paddingTop: "5px" }}>
							<span className="pull-right">
								<button className="text-dark">
									<small>Clear All</small>
								</button>
							</span>
							Notification
						</h6>
					</div>

					<div className="slimScrollDiv" style={{ position: "relative ", overflow: "auto", width: "auto", height: "416.983px" }}>
						<div className="slimscroll" style={{ maxHeight: "230px", overflow: "auto", width: "auto", height: "416.983px" }}>
							<AlarmList /> {/** 알림 메시지 목록 */}
						</div>
						<a href="#" className="dropdown-item text-center notify-all">
							More Alarms <i className="fa fa-arrow-right"></i>
						</a>
					</div>
				</div>
			</li>
		);
	}
}
