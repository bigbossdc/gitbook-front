import React, { Component, Fragment } from "react";

import DialogBox from "./DialogBox";


const calYear = [];
const calMonth = [];
const calDay = [];


export default class AccountSettingAfterAuth extends Component {
	constructor(props) {
		super(props);
		this.state = {
			changePassword: false,
			showDialog: false,
			birthYear: 1990,
			birthMonth: 4,
			birthDay: 20
		};

		for (var y = 1900; y <= 2020; y++) {
			calYear.push(<option key={y} value={y}>{y}</option>);
		}
		for (var m = 1; m <= 12; m++) {
			calMonth.push(<option key={m} value={m}>{m}</option>);
		}
		for (var d = 1; d <= 31; d++) {
			calDay.push(<option key={d} value={d}>{d}</option>);
		}

		this.onToggleButtonChanged = this.onToggleButtonChanged.bind(this);
		this.onBirthChanged = this.onBirthChanged.bind(this);
		this.onModifyAccount = this.onModifyAccount.bind(this);
	}

	onToggleButtonChanged(event) {
		this.setState({
			changePassword: !this.state.changePassword,
		});
	}

	onBirthChanged(event){
		let name = event.target.name;
		if(name in ['birthYear', 'birthMonth', 'birthDay']){
			this.setState({
				name: event.target.value
			});
		}
		
	}

	onModifyAccount(event) {
		alert("Modified..." + this.state.birthYear + " : " + this.state.birthMonth + " : " + this.state.birthDay);
	}

	render() {
		console.log("called AccountAfterAuth...");
		return (
			<Fragment>
				<DialogBox show={this.state.showDialog}/>
				<div className="banner-content">
					<h1 style={{ color: "black", fontFamily: "Varlera Round" }}> 계정 수정하기 </h1>
					<br />
					<br />
					<div className="form-signin">
						<div className="form-group-join">
							<h4 style={{ color: "black", fontFamily: "Varlera Round" }}> nobody@gmail.com </h4>
						</div>
						<br />

						<div className="form-group-join">
							<h4 style={{ color: "black", fontFamily: "Varlera Round" }}> 비밀번호 수정하기 </h4>
							<label className="switch">
								<input type="checkbox" onChange={this.onToggleButtonChanged.bind(this)} />
								<span className="slider round" />
							</label>
						</div>
						<div className="form-group-join">
							{this.state.changePassword ? (
								<input name="password" type="password" className="form-control-join" placeholder="비밀번호" />
							) : (
								<input name="password" type="password" className="form-control-join" placeholder="비밀번호" disabled />
							)}
						</div>
						<div className="form-group-join">
							{this.state.changePassword ? (
								<input name="password" type="password" className="form-control-join" placeholder="비밀번호 확인" />
							) : (
								<input name="password" type="password" className="form-control-join" placeholder="비밀번호 확인" disabled />
							)}
						</div>
						<div className="form-group-join">
							<input name="phone" type="tel" className="form-control-join" placeholder="휴대폰번호" />
						</div>
						<div className="form-group-join">
							<input name="username" type="text" className="form-control-join" placeholder="이름" />
						</div>
						<div className="form-group-join">
							<select className="birth_info" name="birthYear" type="checkbox" style={{ width: "70px" }} value={this.state.birthYear} onChange={this.onBirthChanged}>
								{calYear}
							</select>
							<label className="birth_label" htmlFor="birthYear" style={{ color: "black", fontFamily: "Varlera Round" }}>
								년
							</label>
							<select className="birth_info" name="birthMonth" type="checkbox" value={this.state.birthMonth} onChange={this.onBirthChanged}>
								{calMonth}
							</select>
							<label className="birth_label" htmlFor="birthMonth" style={{ color: "black", fontFamily: "Varlera Round" }}>
								월
							</label>
							<select className="birth_info" name="birthDay" type="checkbox" value={this.state.birthDay} onChange={this.onBirthChanged}>
								{calDay}
							</select>
							<label className="birth_label" htmlFor="birthDay" style={{ color: "black", fontFamily: "Varlera Round" }}>
								일
							</label>
						</div>

						<div className="form-group-join">
							<div className="chk_info">
								<input type="radio" name="gender" value="남자" defaultChecked="checked" />
								<label htmlFor="gender" style={{ color: "black", fontFamily: "Varlera Round" }}>
									남자
								</label>
								<input type="radio" name="gender" value="여자" />
								<label htmlFor="gender" style={{ color: "black", fontFamily: "Varlera Round" }}>
									여자
								</label>
							</div>
						</div>

						<button className="kafe-btn kafe-btn-mint btn-block" name="modifyButton" onClick={this.onModifyAccount}>
							수정하기
						</button>
						<br />
					</div>
				</div>
			</Fragment>
		);
	}
}
