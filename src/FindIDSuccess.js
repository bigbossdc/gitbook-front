import React, { Component } from "react";
import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/join.css';

class FindIDSuccess extends Component {
    render() {
        return(    
            <section className="login">
            <div className="container">
              <div className="banner-content">
              <form method="post" className="form-signin">   
                <h1><i className="fa fa-smile"></i> GitBook </h1>
                <h3 className="find-success">아이디찾기 성공</h3>  
                <p className="find-success-info" >정혜진님의 아이디는 jhjin1106@naver.com입니다.</p>
                <button className="kafe-btn kafe-btn-mint btn-block" type="submit" name="subm">로그인</button>
                </form>
                </div>
            </div>
            </section>
            
        );
    }
}

export default FindIDSuccess;