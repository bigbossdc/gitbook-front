import React, { Component } from "react";
import "./RepositoryPage.css";
import Highlight from "react-highlight.js";

const codeFileExtentions = ["c", "cpp", "conf", "css", "classpath", "html", "htm", "ini", "java", "json", "js", "jsp", "jsx", "lock", "md", "NGINX", "php", "py", "sql", "scss", "txt"];

class RepositoryFileViewTable extends Component {
	onClicklist2(e) {
		let a = e.target.id.split("/");
		a.splice(a.length - 1, 1);
		this.props.clicklist.newList(a.join("/"));
	}

	render() {
		let contents = "";
		let type = this.props.srcName.split(".")[1];

		if (codeFileExtentions.includes(type)) {
			contents = this.props.contents;
		} else {
			type = "binary";
		}
		
		return (
			<div className="RepositoryFileViewTable">
				<div className="FileViewHeader">
					<i id={this.props.callPath} onClick={this.onClicklist2.bind(this)} className="fas fa-angle-double-left" style={{ cursor: "pointer", float: "left", paddingLeft: "10px" }}></i>
					{this.props.srcName}
				</div>
				<div className="FileViewContents" style={{ backgroundColor: "#fff"}}>
					{type !== "binary" ? (
						type !== "txt" ? (
							<Highlight className="repo-view" style={{ margin: "0px auto", overflowX: "hidden", display: 'block', width: '99%' }}>
								{contents}
							</Highlight>
						) : (
							<pre style={{ border: "none", backgroundColor: "#fff", width: "99%", overflowX: "auto", margin: "0px auto", fontSize: '15px' }}>{contents}</pre>
						)
					) : (
						<>
							<br/>
							<br/>
							<i class="fas fa-exclamation-triangle fa-10x" style={{ textAlign: 'center', display: "block", float: "center" }} />
							<br/>
							<h4 style={{ textAlign: 'center', float: "center" }}>
								<strong>미리보기가 불가능한 파일입니다</strong>
							</h4>
							<br/>
							<br/>
						</>
					)}
				</div>
			</div>
		);
	}
}

export default RepositoryFileViewTable;
