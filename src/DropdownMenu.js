import React, { Component } from "react";
import {Link} from "react-router-dom";



class DropdownMenu extends Component {
    render() {
        return(
            <div className="dropdown-menu w dropdown-menu-scale pull-right">
                <a className="dropdown-item" href="/gitbook/user/logout" style={{fontFamily: " 'Varela Round', sans-serif"}}><span>로그아웃</span></a> 
                <Link to="/my/profile" className="dropdown-item" style={{fontFamily: " 'Varela Round', sans-serif"}}><span>프로필 관리</span></Link> 
                <Link to="/my/account"  className="dropdown-item" href="#" style={{fontFamily: " 'Varela Round', sans-serif"}}><span>계정 관리</span></Link> 
                <div className="dropdown-divider"></div>  
		  </div>
        );
    }
}

export default DropdownMenu;