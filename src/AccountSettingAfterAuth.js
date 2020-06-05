import React, { Component, Fragment } from "react";

import DialogBox from "./DialogBox";

export default class AccountSettingAfterAuth extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			changePassword: false,
			showDialog: false,
		};
	}

	onToggleButtonChanged = (event) => {
		this.props['onChangeDataHandler']('password', null);
		this.props['onChangeDataHandler']("password_confirm", null);
		this.props['onChangeDataHandler']('changePassword', !this.state.changePassword);
		this.setState({
			changePassword: !this.state.changePassword,
		});
	}

	onBirthChanged = (event) => {
		let name = event.target.name;
		console.log()
		if(['birthYear', 'birthMonth', 'birthDay'].includes(name)){
			let newBirthday = this.props.userData.birthday.split(' ')[0].split('-');
			if(name === 'birthYear'){
				newBirthday[0] = event.target.value;
			}
			if(name === 'birthMonth'){
				newBirthday[1] = event.target.value;
			}
			if(name === 'birthDay'){
				newBirthday[2] = event.target.value;
			}
			this.props['onChangeDataHandler']('birthday', newBirthday.join('-'));
		}
	}

	onChageInput = (event) => {
		this.props['onChangeDataHandler'](event.target.name, event.target.value);
	}

	onModifyAccount = (event) => {
		this.props['onModifyHandler'](event);
	}

	render() {
		console.log("called AccountAfterAuth...");
		console.log(this.props.userData);

		const calYear = [];
		const calMonth = [];
		const calDay = [];
		for (var y = 2020; y >= 1900; y--) {
			let str_y = y.toString();
			calYear.push(<option key={y} value={str_y}>{str_y}</option>);
		}
		for (var m = 1; m <= 12; m++) {
			let str_m = m.toString();
			str_m = (m < 10 ? '0' : '') + str_m;
			calMonth.push(<option key={m} value={str_m}>{str_m}</option>);
		}
		for (var d = 1; d <= 31; d++) {
			let str_d = d.toString();
			str_d = (d < 10 ? '0' : '') + str_d;
			calDay.push(<option key={d} value={str_d}>{str_d}</option>);
		}

		return (
			<Fragment>
				<DialogBox show={this.state.showDialog}/>
				<div className="banner-content">
					<h1 style={{ color: "black", fontFamily: "Varlera Round" }}> 계정 수정하기 </h1>
					<br />
					<br />
					<div className="form-signin">
						<div className="form-group-join">
							<h4 style={{ color: "black", fontFamily: "Varlera Round" }}> {this.props.userData.id} </h4>
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
								<input name="password" type="password" className="form-control-join" placeholder="비밀번호" onChange = {this.onChageInput.bind(this)} />
							) : (
								<input name="password" type="password" className="form-control-join" placeholder="비밀번호" disabled />
							)}
						</div>
						<div className="form-group-join">
							{this.state.changePassword ? (
								<input name="password_confirm" type="password" className="form-control-join" placeholder="비밀번호 확인" onChange = {this.onChageInput.bind(this)} />
							) : (
								<input name="password_confirm" type="password" className="form-control-join" placeholder="비밀번호 확인" disabled />
							)}
						</div>
						<div className="form-group-join">
							<input name="phone" type="tel" className="form-control-join" placeholder="휴대폰번호" value={this.props.userData.phone} onChange = {this.onChageInput.bind(this)} />
						</div>
						<div className="form-group-join">
							<input name="name" type="text" className="form-control-join" placeholder="이름" value={this.props.userData.name} onChange = {this.onChageInput.bind(this)} />
						</div>
						<div className="form-group-join">
							<select className="birth_info" name="birthYear" type="checkbox" style={{ width: "80px" }} value={this.props.userData.birthday.split(' ')[0].split('-')[0]} onChange={this.onBirthChanged.bind(this)}>
								{calYear}
							</select>
							<label className="birth_label" htmlFor="birthYear" style={{ color: "black", fontFamily: "Varlera Round" }}>
								년
							</label>
							<select className="birth_info" name="birthMonth" type="checkbox" value={this.props.userData.birthday.split(' ')[0].split('-')[1]} onChange={this.onBirthChanged.bind(this)}>
								{calMonth}
							</select>
							<label className="birth_label" htmlFor="birthMonth" style={{ color: "black", fontFamily: "Varlera Round" }}>
								월
							</label>
							<select className="birth_info" name="birthDay" type="checkbox" value={this.props.userData.birthday.split(' ')[0].split('-')[2]} onChange={this.onBirthChanged.bind(this)}>
								{calDay}
							</select>
							<label className="birth_label" htmlFor="birthDay" style={{ color: "black", fontFamily: "Varlera Round" }}>
								일
							</label>
						</div>

						<div className="form-group-join">
							<div className="chk_info">
								<input type="radio" name="gender" defaultValue="male" defaultChecked={this.props.userData.gender === 'male' ? "checked" : ""} onChange = {this.onChageInput.bind(this)} />
								<label htmlFor="gender" style={{ color: "black", fontFamily: "Varlera Round" }}>
									남자
								</label>
								<input type="radio" name="gender" defaultValue="female" defaultChecked={this.props.userData.gender === 'female' ? "checked" : ""} onChange = {this.onChageInput.bind(this)} />
								<label htmlFor="gender" style={{ color: "black", fontFamily: "Varlera Round" }}>
									여자
								</label>
							</div>
						</div>

						<button className="kafe-btn kafe-btn-mint btn-block" name="modifyButton" onClick={this.onModifyAccount.bind(this)}>
							수정하기
						</button>
						<br />
					</div>
				</div>
			</Fragment>
		);
	}
}
