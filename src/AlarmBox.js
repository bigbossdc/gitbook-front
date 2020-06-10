import React, { Component, useRef, Fragment } from "react";
import SockJsClient from "react-stomp";
import AlarmList from "./AlarmList";
import "./Fluffs/assets/css/AlarmBox.css";

export default class AlarmBox extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			alarmList: null,
		};
	}

	componentDidMount() {
		console.log("calling list...");
		fetch(`${global.API_URL}/gitbook/alarm/list`, {
			method: "post",
			headers: global.API_HEADERS,
			body: null,
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json.data);
				this.setState({
					alarmList: json.data,
				});
			});
		
	}

	onCheckAlarm(no) {}

	render() {
		return (
			<Fragment>
				<li className="dropdown notification-list" style={{ paddingLeft: "20px" }}>
					{/** 알림 버튼 아이콘*/}
					<a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
						<i className="fa fa-bell noti-icon" style={{ display: "inline-block" }}></i>
						<span className="badge badge-danger badge-pill noti-icon-badge">{this.state.alarmList === null ? 0 : this.state.alarmList.length}</span>
					</a>
					{/** 알림 목록 보여줄 때*/}
					<div className="dropdown-menu dropdown-menu-right dropdown-lg">
						<div className="dropdown-item noti-title" style={{ height: "40px" }}>
							<h6 className="m-0" style={{ paddingTop: "5px" }}>
								<span className="pull-right">
									<button className="text-dark" style={{ border: "none" }}>
										<small>Clear All</small>
									</button>
								</span>
								Notification
							</h6>
						</div>

						<div className="alarmBoxScrollDiv">
							<div className="alarmBoxScrollArea">
								<AlarmList alarmList={this.state.alarmList} /> {/** 알림 메시지 목록 */}
							</div>
							<a href="#" className="dropdown-item text-center notify-all">
								More Alarms <i className="fa fa-arrow-right"></i>
							</a>
						</div>
					</div>
				</li>
			</Fragment>
		);
	}
}
