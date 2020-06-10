import React, { Component } from "react";
import AlarmItem from "./AlarmItem";

export default class AlarmList extends Component {
	render() {
		let list = [];
		console.log("received: ", this.props.alarmList);
		console.log(typeof(this.props.alarmList));
		if (this.props.alarmList !== null) {
			this.props.alarmList.map((item) => list.push(<AlarmItem itemData={item} />));
		}

		return <div id="Slim">{list.length !== 0 ? list : <p className="dropdown-item notify-item notify-details">no alarms...</p>}</div>;
	}
}
