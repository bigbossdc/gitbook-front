import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/join.css';

class FindPasswordChange extends Component {
    render() {
        return(
              <div>
                <div className="row" style={{marginTop:"40px"}}>         
                  <Link to="/find/id" className="find-id-head">아이디 찾기</Link>
                  <Link to="/find/pw" className="find-pwd-head">비밀번호 찾기</Link>
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
                    {/*비밀번호 변경 안내 다이얼로그 필요*/}
                    <Link to="/find"><button className="kafe-btn kafe-btn-mint form-group-join-btn">확인</button></Link>
                  </div>
                  <br/>
                  <Link to="/find" className="btn btn-dark " href="photo_login.html" role="button" style={{marginTop:"10px"}}>GitBook계정이 생각나셨나요? 지금 로그인 하기</Link><br/>
                </form>
              </div>
        );
    }
}

export default FindPasswordChange;