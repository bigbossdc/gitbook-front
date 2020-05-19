import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/join.css';

class JoinSuccess extends Component {
    render() {
        return(    
            <form method="post" className="form-signin" style={{marginTop:"50px"}}>   
                <h3 className="find-success">환영합니다!</h3>  
                <p className="find-success-info" >정혜진님 회원가입을 축하합니다. <br/>로그인 후 이용해 주세요!!</p>
                <Link to="/find"><button className="kafe-btn kafe-btn-mint btn-block" type="submit" name="subm" style={{marginTop:"10px", width:"300px"}}>깃북 시작하기</button></Link>
            </form>          
        );
    }
}

export default JoinSuccess;