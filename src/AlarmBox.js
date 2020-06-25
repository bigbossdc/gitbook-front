import React, { Component, Fragment } from "react";
import SockJsClient from "react-stomp";
import AlarmList from "./AlarmList";
import "./Fluffs/assets/css/AlarmBox.css";

export default class AlarmBox extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			alarmList: null,
			counted: 0,
		};
	}

	componentDidMount() {
		fetch(`${global.API_URL}/gitbook/alarm/list`, {
			method: "post",
			headers: global.API_HEADERS,
			body: null,
		})
			.then((response) => response.json())
			.then((json) => {
				let count = 0;
				json.data.forEach((element) => {
					if (element.alarmCheck === "uncheck") {
						count += 1;
					}
				});
				this.setState({
					alarmList: json.data,
					counted: count,
				});
			});
	}

	componentWillUnmount() {
		this._ismounted = false;
	}

	onAlarmDelete = (no) => {
		//sql로 요청 보내기
		fetch(`${global.API_URL}/gitbook/alarm/markDelete`, {
			headers: global.API_HEADERS,
			method: "post",
			body: JSON.stringify({ no: no, id: sessionStorage.getItem("authUserId") }),
		})
			.then((response) => response.json())
			.then((json) => {
				if (json.result === "fail") {
					console.log(json);
					return;
				}
				let original = this.state.alarmList;
				for (let index in original) {
					if (original[index].no === no) {
						original.splice(index, 1);
						break;
					}
				}
				this.setState({
					alarmList: original,
				});
			});
	};

	onAlarmRead = () => {
		if(this.state.counted === 0){
			return;
		}
		fetch(`${global.API_URL}/gitbook/alarm/markRead`, {
			headers: global.API_HEADERS,
			method: "post",
			body: JSON.stringify({ id: sessionStorage.getItem("authUserId") }),
		})
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					counted: 0,
				})
			});
	};

	onClearAll = () => {
		if (this.state.alarmList === null || this.state.alarmList.length <= 0) {
			return;
		}

		//sql로 요청 보내기
		fetch(`${global.API_URL}/gitbook/alarm/markDelete`, {
			headers: global.API_HEADERS,
			method: "post",
			body: JSON.stringify({ id: sessionStorage.getItem("authUserId") }),
		})
			.then((response) => response.json())
			.then((json) => {
				if (json.result === "fail") {
					console.log(json);
					return;
				}
				let original = this.state.alarmList;
				if (original === null || original.length <= 0) {
					return;
				}
				original.splice(0);
				this.setState({
					alarmList: original,
				});
			});
	};

	onReceiveAlarm = (newAlarmItem) => {
		let original = this.state.alarmList;
		original.unshift(newAlarmItem);
		let updatedCount = this.state.counted + 1;
		this.setState({
			alarmList: original,
			counted: updatedCount,
		});
	};

	onReceiveChatting = (newChattingItem) => {
		console.log(newChattingItem);
	};

	render() {
		return (
			<Fragment>
				<SockJsClient
					url={`${global.API_URL}/gitbook/socket`}
					topics={[`/topics/alarm/${sessionStorage.getItem("authUserId")}`, `/topics/chatting/${sessionStorage.getItem("authUserId")}`]}
					onMessage={(msg) => {
						let type = msg.split(">>")[0];
						let data = JSON.parse(msg.split(">>")[1]);
						if (type === "alarm") {
							this.onReceiveAlarm(data);
						} else if (type === "chatting") {
							this.onReceiveChatting(data);
						}
					}}
					ref={(client) => {
						this.clientRef = client;
					}}
				/>
				<li className="dropdown notification-list" style={{ display: "block", padding: "0px auto", width: "70px" }}>
					{/** 알림 버튼 아이콘*/}

					<a className="nav-link dropdown-toggle" id="notiIcon" data-toggle="dropdown" aria-expanded="true">
						<i
							className="fa fa-bell noti-icon"
							onClick={this.onAlarmRead.bind(this)}
							style={{
								display: "inline-block",
								cursor: "pointer",
								position: "absolute",
								paddingLeft: "20px",
								//this.state.alarmList === null || this.state.alarmList.length === 0 ? "20px" : "5px"
							}}
						></i>{" "}
					</a>
					{this.state.alarmList === null || this.state.counted === 0 ? (
						<></>
					) : (
						<span className="badge badge-danger badge-pill noti-icon-badge" style={{ fontSize: "11px", position: "absolute", backgroundColor: "red", marginTop: "20px", zIndex: "1000000" }}>
							{this.state.counted > 99 ? "99+" : this.state.counted}
						</span>
					)}

					{/** 알림 목록 보여줄 때*/}
					<div className="dropdown-menu dropdown-menu-right dropdown-lg" id="alarmBoxAnimation" style={{ width: "400px", left: "-400px", marginLeft: "10px" }}>
						<div className="dropdown-item noti-title" style={{ height: "40px" }}>
							<h5 className="m-0" style={{ paddingTop: "5px", fontFamily: "'Nanum Gothic', sans-serif" }}>
								<span className="pull-right">
									<button className="text-dark" onClick={this.onClearAll.bind(this)} style={{ border: "none", padding: "0px", margin:'0px', width:'50px', float:'center' }}>
										<small id='clearAllButton' style={{ fontFamily: "'Nanum Gothic', sans-serif", fontSize: '12px' }}>Clear All</small>
									</button>
								</span>
								Notification
							</h5>
						</div>

						<div className="alarmBoxScrollDiv">
							<div className="alarmBoxScrollArea">
								<AlarmList alarmList={this.state.alarmList} onAlarmDelete={this.onAlarmDelete.bind(this)} /> {/** 알림 메시지 목록 */}
							</div>
						</div>
					</div>
				</li>
			</Fragment>
		);
	}
}