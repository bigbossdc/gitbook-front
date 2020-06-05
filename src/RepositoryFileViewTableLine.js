import React, { Component } from "react";
import "./RepositoryPage.css";

export default class RepositoryFileViewTableLine extends Component {
	render() {
		return (
			<tr>
				<td className="lineNumber" style={{ userSelect: "none" }}>
					{this.props.lineNo}
				</td>
				<td className="lineNumberContent">{this.props.lineCode}</td>
			</tr>
		);
	}
}
