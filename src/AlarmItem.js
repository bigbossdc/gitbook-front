import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

const iconList = {
	commit: "fa fa-comment",
	friend: "fa fa-user-plus",
	group: "fa fa-user-plus",
	heart: "fa fa-heart",
};

const linkList = {
	commit: "",
	friend: "/gitbook/myfriend",
	group: "",
	chatting: "/gitbook/chatting",
};

export default class AlarmItem extends Component {
	constructor() {
		super(...arguments);
		this.state = {};
	}

	onClickRead = (event) => {
		this.props.onAlarmRead(this.props.itemData.no);
	};

	/*
	setTimeDifference = (originalTime) => {
		let timeMills = new Date(originalTime.split(".")[0]);
		let diffMills = Date.now() - timeMills;

		var hour = Math.floor((diffMills % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minute = Math.floor((diffMills % (1000 * 60 * 60)) / (1000 * 60));
		var second = Math.floor((diffMills % (1000 * 60)) / 1000);

		this.setState({
			hour: hour,
			minute: minute,
			second: second,
		});
	};
	*/

	render() {
		return (
			<Fragment>
				<Link to="#" className="dropdown-item notify-item">
					<input type="button" className="markAsRead" value="확인" onClick={this.onClickRead.bind(this)} />
					<div className="notify-icon bg-success">
						<i className={iconList[this.props.itemData.alarmType]}></i>
					</div>
					<p className="notify-details" style={{ whiteSpace: "normal", fontSize: "13px" }}>
						{this.props.itemData.alarmContents.length < 70 ? this.props.itemData.alarmContents : `${this.props.itemData.alarmContents.slice(0, 70)}...`}
						<small className="text-muted">{this.props.itemData.alarmDate}</small>
					</p>
				</Link>

				<hr style={{ margin: "0px" }} />
			</Fragment>
		);
	}
}
