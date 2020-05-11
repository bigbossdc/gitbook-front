import React, { Component } from "react";
import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/join.css';

class JoinSuccess extends Component {
    render() {
        return(    
            <section className="login">
            <div className="container">
              <div className="banner-content">
              <form method="post" className="form-signin">   
                <h1><i className="fa fa-smile"></i> GitBook </h1>
                <h3 className="find-success">환영합니다!</h3>  
                <p className="find-success-info" >정혜진님 회원가입을 축하합니다.</p>
                <button className="kafe-btn kafe-btn-mint btn-block" type="submit" name="subm">깃북 시작하기</button>
                </form>
                </div>
            </div>
            </section>
            
        );
    }
}

export default JoinSuccess;