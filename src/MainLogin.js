import React, { Component } from "react";
import './Fluffs/assets/css/demos/photo.css';


class MainLogin extends Component {
        
    render() {
        return(
            <section className="login">
            <div className="container" >
             <div className="banner-content">
	   
		  <h1><a href="/">gitbook </a> </h1>
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
		   <a className="btn btn-dark " href="photo_register.html" role="button">아직 gitbook의 회원이 아니십니까? click!!</a>
		   <a className="btn btn-dark " href="photo_register.html" role="button">아이디 찾기</a>
           <br></br>
           <a className="btn btn-dark " href="photo_register.html" role="button">비밀번호 찾기</a>
		  </form>
		
       </div>
      </div>
     </section> 
        );
    }
}

export default MainLogin;