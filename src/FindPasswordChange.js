import React, { Component } from "react";
import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/join.css';

class FindPasswordChange extends Component {
    render() {
        return(
          <section className="login">
            <div className="container">
              <div className="banner-content">
                <h1><i className="fa fa-smile"></i> GitBook </h1>
                <div className="row" style={{marginTop:"40px"}}>         
                    <a className="find-id-head">아이디 찾기</a>
                    <a className="find-pwd-head">비밀번호 찾기</a>
                </div>
                <hr className="find-act-hr"></hr>
                <p className="find-pwd-cmt">변경할 비밀번호를 입력해 주세요</p>
                <form method="post" className="form-signin" style={{padding:"0px"}}>                 
                  <div className="form-group-join">
                    <input name="password" type="password" className="form-control-join" placeholder="새 비밀번호"/>
                  </div>
                  <div className="form-group-join">
                    <input name="password" type="password" className="form-control-join" placeholder="새 비밀번호 확인"/>
                  </div>
                  <div className="form-group-join">
                    <button className="kafe-btn kafe-btn-mint form-group-join-btn">확인</button>
                  </div>
                  <br/>
                  <a className="btn btn-dark " href="photo_login.html" role="button" style={{marginTop:"10px"}}>GitBook계정이 생각나셨나요? 지금 로그인 하기</a><br/>
                </form>
              </div>
            </div>
          </section>
        );
    }
}

export default FindPasswordChange;