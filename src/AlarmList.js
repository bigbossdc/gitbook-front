import React, { Component } from "react";
import AlarmItem from "./AlarmItem";

export default class AlarmList extends Component {
	constructor() {
		super(...arguments);
		this.state = {};
	}

	onAlarmRead = (no) => {
		this.props.onAlarmRead(no);
	};

	render() {
		let list = [];
		if (this.props.alarmList !== null) {
			this.props.alarmList.map((item) => list.push(<AlarmItem key={item.no} itemData={item} onAlarmRead={this.onAlarmRead.bind(this)} />));
		}

		return (
			<div id="Slim">
				{list.length !== 0 ? (
					list
				) : (
					<div>
						<img src={global.API_URL + "/gitbook/assets/img/error/noAlarm.png"} alt="no alarm..." style={{ width: "20%", height: "20%", display: "block", margin: "50px auto" }} />
					</div>
				)}
			</div>
		);
	}
}
