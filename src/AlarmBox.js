import React, { Component, Fragment } from "react";
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
      fetch(`${global.API_URL}/gitbook/alarm/list`, {
         method: "post",
         headers: global.API_HEADERS,
         body: null,
      })
         .then((response) => response.json())
         .then((json) => {
            this.setState({
               alarmList: json.data,
            });
         });
   }

   componentWillUnmount() {
      this._ismounted = false;
   }

   onAlarmRead = (no) => {
      //sql로 요청 보내기
      fetch(`${global.API_URL}/gitbook/alarm/mark`, {
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

   onClearAll = () => {
      if (this.state.alarmList === null || this.state.alarmList <= 0) {
         return;
      }

      //sql로 요청 보내기
      fetch(`${global.API_URL}/gitbook/alarm/mark`, {
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
      this.setState({
         alarmList: original,
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
					<a className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
						<i className="fa fa-bell noti-icon" style={{ display: "inline-block", cursor: "pointer", paddingLeft: this.state.alarmList === null || this.state.alarmList.length === 0 ? "20px" : "5px" }}></i>
						{this.state.alarmList === null || this.state.alarmList.length === 0 ? (
							<></>
						) : (
							<span className="badge badge-danger badge-pill noti-icon-badge" style={{ padding: "3px 6px", fontSize: "11px" }}>
								{this.state.alarmList.length > 99 ? "99+" : this.state.alarmList.length}
							</span>
						)}
					</a>
					{/** 알림 목록 보여줄 때*/}
					<div className="dropdown-menu dropdown-menu-right dropdown-lg" style={{ width: "400px", left: "-400px" }}>
						<div className="dropdown-item noti-title" style={{ height: "40px" }}>
							<h6 className="m-0" style={{ paddingTop: "5px" }}>
								<span className="pull-right">
									<button className="text-dark" onClick={this.onClearAll} style={{ border: "none" }}>
										<small>Clear All</small>
									</button>
								</span>
								Notification
							</h6>
						</div>

                  <div className="alarmBoxScrollDiv">
                     <div className="alarmBoxScrollArea">
                        <AlarmList alarmList={this.state.alarmList} onAlarmRead={this.onAlarmRead.bind(this)} /> {/** 알림 메시지 목록 */}
                     </div>
                  </div>
               </div>
            </li>
         </Fragment>
      );
   }
}