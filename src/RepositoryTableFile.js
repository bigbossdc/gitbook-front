import React, { Component } from "react";

export default class RepositoryTableFile extends Component {
	render() {
		return (
			<tr>
				<td>
					<i className="far fa-file-alt"></i>
					<a>{this.props.path}</a>
				</td>
				<td>
					<a>{this.props.commit}</a>
				</td>
				<td>{this.props.date}</td>
			</tr>
		);
	}
}
