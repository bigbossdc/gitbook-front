import React, { Component } from "react";
import './Fluffs/assets/css/demos/photo.css';


class DropdownMenu extends Component {
    render() {
        return(
            <div className="dropdown-menu w dropdown-menu-scale pull-right">
                <a className="dropdown-item" href="#" style={{fontFamily: " 'Varela Round', sans-serif"}}><span>로그아웃</span></a> 
                <a className="dropdown-item" href="#" style={{fontFamily: " 'Varela Round', sans-serif"}}><span>프로필 관리</span></a> 
                <a className="dropdown-item" href="#" style={{fontFamily: " 'Varela Round', sans-serif"}}><span>계정 관리</span></a> 
                <div className="dropdown-divider"></div>  
		  </div>
        );
    }
}

export default DropdownMenu;