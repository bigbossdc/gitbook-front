import React, { Component } from "react";
import "./Fluffs/assets/css/demos/photo.css";

export default class ProfileSection extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			editable_nickname: false,
			editable_introduction: false,
			editables: {
				nickname: "별명 010101",
				introduction: "At w3schools.com you will learn how to make a website. We offer free tutorials in all web development technologies.",
			},
		};
	}

	onStatusChange = (event) => {
		let name = event.target.name;
		if(name === 'nickname'){
			this.setState({
				editables: {nickname : event.target.value}
			});
			return;
		}

		if(name === 'introduction'){
			this.setState({
				editables: {introduction: event.target.value}
			});
			return;
		}
		
	};

	render() {
		console.log("called ProfileSection...");
		return (
			<aside id="leftsidebar" className="sidebar">
				<ul className="list">
					<li>
						<div className="user-info">
							<div className="image">
								<a href="#">
									<img src="assets/img/users/1.jpg" className="img-responsive img-circle" alt="User" />
									<span className="online-status online"></span>
								</a>
							</div>
							<br />
							<br />
							<div className="detail">
								<h4>사용자 이름</h4>
								<small>이메일@gmail.com</small>
							</div>
							<div className="row"></div>
						</div>
					</li>
					<li>
						<small className="text-muted">Nickname</small>
						<p />
						<p>{this.state.editables.nickname}</p>
						<input
							name="nickname"
							type="text"
							className="form-control-join-email"
							placeholder="닉네임"
							style={{ color: "black" }}
							value={this.state.editables.nickname}
							onChange={this.onStatusChange.bind(this)}
						/>
						<button className="kafe-btn kafe-btn-mint form-group-join-btn">수정</button>

						<hr />

						<small className="text-muted">Introduction</small>
						<p />
						<p>{this.state.editables.introduction}</p>
						<textarea
							name="introduction"
							rows="4"
							cols="40"
							style={{ color: "black", resize: "none" }}
							value={this.state.editables.introduction}
							onChange={this.onStatusChange.bind(this)}
						/>
						<hr />
					</li>
				</ul>
			</aside>
		);
	}
}
