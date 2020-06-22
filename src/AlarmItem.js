import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

const iconList = {
	commit: "fas fa-code-branch",
	friend: "fa fa-user-plus",
	group: "fa fa-user-plus",
	chatting: "fa fa-comment",
};

const linkList = {
   commit: `/gitbook/my`,
   friend: "/gitbook/myfriend",
   group: "/gitbook/mygroup",
   chatting: "/gitbook/chatting",
};

export default class AlarmItem extends Component {
   constructor() {
      super(...arguments);
      this.state = {
        
         gitAddr: "",
      };
   }


	onClickRead = (event) => {
		this.props.onAlarmRead(this.props.itemData.no);
	};

	componentDidMount() {
		this.setTimeDifference(this.props.itemData.alarmDate);
		if (this.props.itemData.alarmType === "commit") {
			let msg = this.props.itemData.alarmContents;
			this.setState({
				gitAddr: msg.slice(msg.indexOf("[") + 1, msg.indexOf(".git")),
			});
		}
	}

	setTimeDifference = (originalTime) => {
		let timeMills = new Date(originalTime.split(".")[0]);
		let diffMills = Date.now() - timeMills;
		let hour = Math.floor((diffMills % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // hour
		let minute = Math.floor((diffMills % (1000 * 60 * 60)) / (1000 * 60)); // minute
		let second = Math.floor((diffMills % (1000 * 60)) / 1000); // second

		let day = Math.floor(diffMills / (1000 * 60 * 60 * 24)); // day
		let month = Math.floor(day / 30); // month
		let year = Math.floor(day / 365); // year

		let arrNum = [year, month, day, hour, minute, second];
		let arrMsg = ["년 전", "개월 전", "일 전", "시간 전", "분 전", "초 전"];
		let message = null;
		for (let i = 0; i < arrNum.length; i++) {
			if (arrNum[i] !== 0) {
				message = arrNum[i] + arrMsg[i];
				break;
			}
			message = "방금 전";
		}

		this.setState({
			message: message,
		});
	};

	render() {
		return (
			<Fragment>
				<div className="dropdown-item notify-item">
					<i
						className="fas fa-trash-alt markAsRead"
						onClick={this.onClickRead.bind(this)}
						style={{ width: "40px", height: "40px", fontSize: "18px", textAlign: "center", verticalAlign: "center", float: "right", padding: "5px 0px 0px 15px", cursor: "pointer" }}
					></i>
					<div className="notify-icon bg-success">
						<i className={iconList[this.props.itemData.alarmType]}></i>
					</div>
					<p className="notify-details" style={{ whiteSpace: "normal", fontSize: "13px", lineHeight: "20px" }}>
						<a
							href={
								this.props.itemData.groupNo !== null && this.props.itemData.alarmType === "commit"
									? `/gitbook/group/${this.props.itemData.groupNo}/${this.props.itemData.userNo}/${this.props.itemData.userId}/repository/view/${this.state.gitAddr}`
									: linkList[this.props.itemData.alarmType] + (this.props.itemData.alarmType === "commit" ? `/${this.props.itemData.userId}/repository/view/${this.state.gitAddr}` : "")
							}
							style={{ fontFamily: "'Nanum Gothic', sans-serif" }}
						>
							{this.props.itemData.alarmContents.length < 90 ? this.props.itemData.alarmContents : `${this.props.itemData.alarmContents.slice(0, 90)}...`}
							<small className="text-muted">{this.state.message}</small>
						</a>
					</p>
				</div>
				<hr style={{ margin: "0px" }} />
			</Fragment>
		);
	}
}
