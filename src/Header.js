import React, { Component } from "react";
import { Link } from 'react-router-dom'
import Slim from './Slim';
import DropdownMenu from './DropdownMenu';


const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}


class Header extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            anuthUser: null,
            keyword:''
        }
    }

    onNotifyKeywordChange(keyword) {
        this.setState({
            keyword: keyword
        })
    }

    onInputChange(event) {
        this['onNotifyKeywordChange'](event.target.value);
    }
    
    onResult() {
        this.props.handlerSubmit.search(this.state.keyword)
        this.setState({
            keyword: ''
        })
    }

    render() {
        return(
           <header className="tr-header"style={{position:"fixed", width:"100%",zIndex:"100" }}>
               <nav className="navbar navbar-default" >
                    <div className="container-fluid">
	                    <div className="navbar-header">
                         <Link to="/gitbook/main" className="navbar-brand" href="index.html"> GitBook</Link>
                        </div> {/* /navbar-header */}
                        
                        <div className="navbar-right">
                        <ul className="nav navbar-nav">
		                    
                            <li>{/** 검색 창 */}
		                     <div className="search-dashboard">
                                 <form onClick={this.onResult.bind(this)}>
                                    <input placeholder="친구 검색" onChange={this.onInputChange.bind(this)} value={this.state.keyword}></input>
                                    <Link to="/gitbook/main/friendsearch">
                                    <button type="submit" style={{display:"inline-block",     
                                                                    background: "transparent none repeat scroll 0 0",
                                                                    border: "medium none",
                                                                    color: "#a7a7a7",
                                                                    padding: "12px 22px",
                                                                    position: "absolute",
                                                                    right: "0",
                                                                    top: "-7px",
                                                                    cursor: "pointer"}}>
                                        <i className="fa fa-search" >
                                        </i>
                                    </button>  
                                    </Link>
                                 </form>
                              </div>							
		                    </li> {/** 여기까지 검색창 */}

		<li className="dropdown notification-list">
			  <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
				<i className="fa fa-bell noti-icon" style={{display:"inline-block"}}></i>
					<span className="badge badge-danger badge-pill noti-icon-badge">4</span>
			</a>
			<div className="dropdown-menu dropdown-menu-right dropdown-lg">

					<div className="dropdown-item noti-title">
						<h6 className="m-0">
							<span className="pull-right">
							<a href="" className="text-dark"><small>Clear All</small></a> 
							</span>Notification
					</h6>
				</div>



			 <div className="slimScrollDiv" style={{position: "relative " ,overflow: "hidden", width: "auto", height: "416.983px"}}>
			  <div className="slimscroll" style={{ maxHeight :  "230px", overflow: "hidden", width: "auto", height: "416.983px"}}>

			  <Slim></Slim> {/** 알림 메시지 목록 */}

			   <div className="slimScrollBar" style={{background: "rgb(158, 165, 171) none repeat scroll 0% 0%", width: "8px", position: "absolute", top: "0px", opacity:" 0.4" ,display: "block", borderRadius: "7px", zIndex: "99" ,right: " 1px"}}></div>
			   <div className="slimScrollRail" style={{width: "8px" ,height: "100%", position: "absolute", top: "0px" ,display: "none", borderRadius : "7px", background: "rgb(51, 51, 51) none repeat scroll 0% 0%", opacity: "0.2" ,zIndex: "90" ,right:" 1px"}}></div>
			  </div>
			 </div>

			 <a href="photo_notifications.html" className="dropdown-item text-center notify-all">
			  View all <i className="fa fa-arrow-right"></i>
			 </a>
            </div>
		   </li> {/** 여기까지가 알림 창 */}

           <li className="dropdown mega-avatar">
		  <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
		   <span className="avatar w-32"><img src={ this.state.authUser && this.state.authUser.image } className="img-resonsive img-circle" width="25" height="25" alt="..."></img></span>
		  
		   <span className="hidden-xs" style={{fontFamily: " 'Varela Round', sans-serif",marginLeft:"10px"}}>
			<strong>
            { this.state.authUser && this.state.authUser.name  
              
            }
            </strong>
		   </span>
		  </a>
            <DropdownMenu></DropdownMenu> {/** 프로필 메뉴   */}
		 </li>

     </ul>{/* */}

    </div> {/* /navbar-right */}
                        



                    </div>
                </nav>
           </header>
        );
	}
	
	componentDidMount() {
        fetch(`${API_URL}/gitbook/user/auth`, {
            method: 'get',
            headers: API_HEADERS
        })
        .then( response => response.json())
        .then( json => {
          sessionStorage.setItem("authUserId",json.data.id)
          sessionStorage.setItem("authUserName",json.data.name)
          sessionStorage.setItem("authUserPassword",json.data.password)
          sessionStorage.setItem("authUserPhone",json.data.phone)
          sessionStorage.setItem("authUserGender",json.data.gender)
          sessionStorage.setItem("authUserNo",json.data.no)
          sessionStorage.setItem("authUserProfile",json.data.ProfileNo)
          sessionStorage.setItem("authUserImage",json.data.image)
          sessionStorage.setItem("authUserJoinDate",json.data.joinDate)
          sessionStorage.setItem("authUserBirthDay",json.data.birthday)
          sessionStorage.setItem("authUserNickName",json.data.nickname)
          sessionStorage.setItem("authUserProfileContents",json.data.Contents)
        
            this.setState({
                authUser: json.data
               
            });
        })
        .catch( err => console.error( err ));  
        
       
    }
    
}

export default Header;