import React, { Component } from 'react';
import Header2 from './Header2';
import './Fluffs/assets/css/demos/join.css'
import { Link } from "react-router-dom";

class UploadPage extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      editable: false,
			userData: null,
      id: "",
			password: ""
    };

    this.doChangeState = this.doChangeState.bind(this);
		this.doAuth = this.doAuth.bind(this);
  }

  memberOutHandler() {
    fetch(`${global.API_URL}/gitbook/user/out/${sessionStorage.getItem("authUserNo")}`, {
      method: 'post',
      headers: global.API_HEADERS
    })
  }

  onAuth = (loginInfo) => {
		fetch(`${global.API_URL}/gitbook/user/account/checkUser`, {
			method: 'post',
			headers: global.API_HEADERS,
			body: JSON.stringify(loginInfo)
		})
		.then(response => response.json())
		.then(json => {
			if(json.result === 'success'){
          this.setState({
            editable: true
          })
       
			} else{
        alert("사용자 인증에 실패했습니다.");
        this.setState({
          editable: false
        })
			}
		})
		.catch(err => console.error(err));

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

		this['onAuth'](this.state);
	}

  render() {
   
    return (
      <div className="out-box">
        <div className="out-container" style={{marginTop:"0px"}}>
          <p><h2 className="out-title"><b>회원탈퇴</b></h2></p><br/>
          <div style={{marginLeft:"10%"}}>
            <p><i class="fas fa-check" style={{color:"#0fc19e"}}></i> 사용하고 계신 아이디({sessionStorage.getItem("authUserId")})는 탈퇴할 경우 재사용 및 복구가 불가능합니다.</p>
            <p><i class="fas fa-check" style={{color:"#0fc19e"}}></i> 탈퇴 후 회원정보 및 개인형 서비스 이용기록은 모두 삭제됩니다.</p>
            <p><i class="fas fa-check" style={{color:"#0fc19e"}}></i> 탈퇴 후에도 게시판형 서비스에 등록한 게시물은 그대로 남아 있습니다.</p><br/>
          </div>
          <div className="form-group" style={{margin:"10px auto", width:"50%"}}>
            <input
              name="id"
              type="text"
              className="form-control"
              placeholder="ID"
              value={this.state.id}
              onChange={this.doChangeState.bind(this)}
              disabled={this.state.editable ? "none" : ""}
            />
          </div>
          <div className="form-group" style={{margin:"10px auto", width:"50%"}}>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.doChangeState.bind(this)}
              disabled={this.state.editable ? "none" : ""}
            />
          </div>
     
          <div style={{margin:"0px auto", width:"50%"}}>
            {this.state.editable ? (
              <a href="/gitbook/user/logout">
                <text style={{color:"red"}}>인증이 완료되었습니다. 회원탈퇴를 계속 진행하려면 아래 버튼을 눌러주세요.</text>
                <button className="kafe-btn kafe-btn-mint btn-block" name="reauth" onClick={this.memberOutHandler} style={{marginBottom:"5px"}}>
                  탈퇴하기
                </button>
              </a>
            ) : (
            <button className="kafe-btn kafe-btn-mint btn-block" name="reauth" onClick={this.doAuth} style={{marginBottom:"5px"}}>
              인증하기
            </button>
            )}

          </div>
          <div style={{margin:"0px auto", width:"50%"}}>
          </div>
          <br />
        </div>
      </div>
    );
  }
  componentWillUnmount(){
    setTimeout({},500);
  }

}
export default UploadPage;
