import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/photo.css';


class MainLogin extends Component {
        
    render() {
        return(
		  <form method="post" className="form-signin">
		   <h3 className="form-signin-heading"></h3>
		   <div className="form-group" >
		    <input name="email" type="text" class="form-control" placeholder="Email"></input>
		   </div>
		   <div className="form-group">
		    <input type="password" className="form-control" name="password" placeholder="Password"></input>
		   </div>
		   <button className="kafe-btn kafe-btn-mint btn-block" type="submit" name="subm">Sign in</button>
		   <br/>
		   <Link to="/find/join" className="btn btn-dark " role="button">아직 gitbook의 회원이 아니십니까? click!!</Link>
		   <Link to="/find/id" className="btn btn-dark " role="button">아이디 찾기</Link>
           <br></br>
           <Link to="find/pw" className="btn btn-dark " role="button">비밀번호 찾기</Link>
		  </form>
        );
    }
}

export default MainLogin;