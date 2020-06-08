import React, { Component } from "react";

const iconList = {
	comment: "fa fa-comment",
	useradd: "fa fa-user-plus",
	heart: "fa fa-heart",
};

// props: [iconType, contents, time( -> timeDifference), link]
export default class AlarmItem extends Component {
	constructor() {
		super(...arguments);
		this.state = {};

		this.getTimeDifference(this.props);
	}

	getTimeDifference(props) {}

	render() {
		return (
			<frameElement>
				<a href={this.props.link} className="dropdown-item notify-item">
					<div className="notify-icon bg-success">
						<i className={this.props.iconType == null ? iconList.comment : iconList[this.props.iconType]}></i>
					</div>
					<p className="notify-details">
						{this.props.contents}
						<small className="text-muted">{this.props.timeDifference}</small>
					</p>
				</a>
				<hr style={{ margin: "0px" }} />
			</frameElement>
		);
	}
}
