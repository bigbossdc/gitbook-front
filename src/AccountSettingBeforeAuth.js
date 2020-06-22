import React, { Component } from "react";


export default class AccountSettingBeforeAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: "",
			password: "",
		};

		this.doChangeState = this.doChangeState.bind(this);
		this.doAuth = this.doAuth.bind(this);
	}

	doChangeState(event) {
		if (event.target.name === "id") {
			this.setState({
				id: event.target.value,
			});
			return ;
		}
		if (event.target.name === "password") {
			this.setState({
				password: event.target.value,
			});
			return ;
		}
	}

	doAuth() {
		if(this.state.id === ''){
			alert("아이디를 입력 바랍니다.");
			return;
		}
		if(this.state.password === ''){
			alert("패스워드를 입력 바랍니다.");
			return;
		}

		this.props['onAuthHandler'](this.state);
	}

	render() {
		return (
			<div className="form-signin">
				<br />
				<br />
				<br />
				<br />
				<h1 style={{ color: "black", fontFamily: "'Nanum Gothic', sans-serif" }}>계정 재인증</h1>
				<br />
				<br />
				<br />
				<div className="form-group">
					<input
						name="id"
						type="text"
						className="form-control"
						placeholder="ID"
						value={this.state.id}
						onChange={this.doChangeState.bind(this)}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						className="form-control"
						name="password"
						placeholder="Password"
						value={this.state.password}
						onChange={this.doChangeState.bind(this)}
					/>
				</div>
				<br />
				<button className="kafe-btn kafe-btn-mint btn-block" name="reauth" onClick={this.doAuth} style={{marginBottom:"15px"}}>
					인증하기
				</button>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
		);
	}
}
