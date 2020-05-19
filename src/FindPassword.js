import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/join.css';

class FindPassword extends Component {
    render() {
        return(
              <div>
                <div className="row" style={{marginTop:"40px"}}>
                  <Link to="/find/id" className="find-id-head">아이디 찾기</Link>
                  <Link to="/find/pw" className="find-pwd-head">비밀번호 찾기</Link>
                </div>
                <hr className="find-act-hr"></hr>
                <p className="find-pwd-cmt">찾고자 하는 비밀번호의 아이디를 입력해 주세요</p>
                <form method="post" className="form-signin" style={{padding:"0px"}}>                 
                  <div className="form-group-join">
                    <input name="email" type="text" className="form-control-join-email" placeholder="이메일"/>
                    {/* DB저장된 메일인지 확인 후 페이지 넘김*/}
                    <Link to="/find/pw/auth" ><button className="kafe-btn kafe-btn-mint form-group-join-btn">확인</button></Link>
                  </div>
                  <br/>
                  <Link to="/find" className="btn btn-dark " href="photo_login.html" role="button" style={{marginTop:"10px"}}>GitBook계정이 생각나셨나요? 지금 로그인 하기</Link><br/>
                </form>
              </div>
        );
    }
}

export default FindPassword;