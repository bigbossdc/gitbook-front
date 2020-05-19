import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/join.css';

const calYear = [];
const calMonth = [];
const calDay = [];

for(let i = 1900; i <= 2020; i++) {
  calYear.push(<option value={i}>{i}</option>);
}
for(let i = 1; i <= 12; i++) {
  calMonth.push(<option value={i}>{i}</option>);
}
for(let i = 1; i <= 31; i++) {
  calDay.push(<option value={i}>{i}</option>);
}


class join extends Component {
  
    render() {
        return(
              <div>
                <form method="post" className="form-signin">                 
                  <div className="form-group-join">
                    <input name="email" type="text" className="form-control-join-email" placeholder="이메일"/>
                    <button className="kafe-btn kafe-btn-mint form-group-join-btn">인증</button>
                  </div>
                  <div className="form-group-join">
                    <input name="confirm" type="text" className="form-control-join-email" placeholder="인증번호"/>
                    <button className="kafe-btn kafe-btn-mint form-group-join-btn">확인</button>
                  </div>
                  <div className="form-group-join">
                    <input name="password" type="password" className="form-control-join" placeholder="비밀번호"/>
                  </div>
                  <div className="form-group-join">
                    <input name="password" type="password" className="form-control-join" placeholder="비밀번호 확인"/>
                  </div>
                  <div className="form-group-join">
                    <input name="phone" type="tel" className="form-control-join" placeholder="휴대폰번호"/>
                  </div>
                  <div className="form-group-join">
                    <input name="username" type="text" className="form-control-join" placeholder="이름"/>
                  </div>
                  <div className="form-group-join">
                                      
                    <select className="birth_info" name="year" type="checkbox" style={{width:"100px"}}>
                      {calYear}
                    </select>
                    <label className="birth_label" for="year">년</label>
                    <select className="birth_info" name="month" type="checkbox">
                      {calMonth}
                    </select>
                    <label className="birth_label" for="month">월</label>
                    <select className="birth_info" name="day" type="checkbox">
                      {calDay}
                    </select>
                    <label className="birth_label" for="day">일</label>
                     
                  </div>               
                  <div className="form-group-join">
                    <div className="chk_info">
                      <input type="radio" name="gender" value="남자" checked="checked"/>
                      <label for="gender">남자</label>
                      <input type="radio" name="gender" value="여자"/>
                      <label for="gender">여자</label>
                    </div>
                  </div>
                  {/*나중에 가입완료 안내 다이얼로그 필요*/}
                  <Link to="/find/join/success"><button className="kafe-btn kafe-btn-mint btn-block" type="submit" name="subm">가입하기</button></Link>
                  <br/>
                  <Link to="/find" className="btn btn-dark " role="button" style={{marginTop:"10px"}}>이미 GitBook회원이신가요? 지금 로그인 하기</Link><br/>
                
                </form>
              </div>
        );
    }
}

export default join;