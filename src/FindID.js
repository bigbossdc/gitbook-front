import React, { Component } from "react";
import {Link} from "react-router-dom";


class FindID extends Component {
    render() {
        return(      
              <div>
                <div className="row" style={{marginTop:"40px"}}>
                  <Link to="/find/id" className="find-id-head" style={{color:"#0fc19e"}} >아이디 찾기</Link>
                  <Link to="/find/pw" className="find-pwd-head" style={{color:"#fff"}}>비밀번호 찾기</Link>
                </div>
                <hr className="find-act-hr"></hr>
                <form method="post" className="form-signin">                 
                  <div className="form-group-join">
                    <input name="username" type="text" className="form-control-join" placeholder="이름"/>
                  </div>
                  <div className="form-group-join">
                    <input name="phone" type="tel" className="form-control-join" placeholder="휴대폰번호"/>
                  </div>
                  <div className="form-group-join">
                    <input name="email" type="text" className="form-control-join-email" placeholder="이메일"/>
                    <button className="kafe-btn kafe-btn-mint form-group-join-btn">인증</button>
                  </div>
                  <br/>
                  <Link to="/find" className="btn btn-dark " role="button" style={{marginTop:"10px"}}>GitBook계정이 생각나셨나요? 지금 로그인 하기</Link><br/>               
                </form>
              </div>
        );
    }
}

export default FindID;