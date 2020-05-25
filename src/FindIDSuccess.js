import React, { Component } from "react";
import {Link} from "react-router-dom";


class FindIDSuccess extends Component {
    render() {
        return(    
            <form method="post" className="form-signin" style={{marginTop:"50px"}}>   
                <h3 className="find-success">아이디찾기 성공</h3>  
                <p className="find-success-info" >정혜진님의 아이디는 jhjin1106@naver.com입니다.</p>
                <Link to="/"><button className="kafe-btn kafe-btn-mint btn-block" type="submit" name="subm" style={{marginTop:"10px", width:"300px"}}>로그인</button></Link>
            </form>
        );
    }
}

export default FindIDSuccess;