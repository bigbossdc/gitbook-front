import React, { Component } from "react";


export default class AccountSettingBeforeAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};

		this.doChangeState = this.doChangeState.bind(this);
		this.doAuth = this.doAuth.bind(this);
	}

	doChangeState(event) {
		if (event.target.name === "email") {
			this.setState({
				email: event.target.value,
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
		if(this.state.email === ''){
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
				<img src="/assets/img/users/1.jpg" className="img-responsive img-circle" alt="User" style={{ margin: "0 auto", width: "50%", height: "50%" }} />
				<br />
				<br />
				<h1 style={{ color: "black", fontFamily: "Varlera Round" }}>재인증 필요</h1>
				<br />
				<br />
				<div className="form-group">
					<input
						name="email"
						type="text"
						className="form-control"
						placeholder="Email"
						value={this.state.email}
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
				<button className="kafe-btn kafe-btn-mint btn-block" name="reauth" onClick={this.doAuth}>
					인증하기
				</button>
				<br />
			</div>
		);
	}
}
