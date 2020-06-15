import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import AlarmBox from "./AlarmBox";
import DropdownMenu from "./DropdownMenu";
import "./Fluffs/assets/css/demos/header.css"



class Header extends Component {
   constructor() {
      super(...arguments);
      this.state = {
         keyword: "",
         contents:""
      };
   }

   onNotifyKeywordChange(keyword) {
      this.setState({
         keyword: keyword,
      });
   }

   onInputChange(event) {
      this["onNotifyKeywordChange"](event.target.value);
   }

   onResult() {
      this.props.handlerSubmit.search(this.state.keyword);
      this.setState({
         keyword: ""
      });
   }

   render() {
      const { match, location, history } = this.props;
      console.log({
         match,
         location,
         history
      });
      
      let contentsname = location.pathname.split('/')[2];
   
      if(contentsname === "my" && location.pathname.split('/')[3] !== sessionStorage.getItem("authUserId")) {
         contentsname = "main";
      }

      if(contentsname === "my" && location.pathname.split('/')[4] === "profile") {
         contentsname = "main";
      }

      if(contentsname === "my" && location.pathname.split('/')[4] === "account") {
         contentsname = "main";
      }
      
      return (
         <header className="tr-header" style={{ position: "fixed", width: "100%", zIndex: "100" }}>
            <nav className="navbar navbar-default">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-lg-3">
                        <div className="navbar-header" style={{width:"30%"}}>
                           <Link to="/gitbook/main" className="navbar-brand" href="index.html">
                              {" "}
                              GitBook
                           </Link>
                        </div>{" "}
                     </div>
                     
                     <div className="col-lg-6" style={{paddingLeft:"150px"}}>
                        {contentsname === "my" ?
                           <div className="select-contents">
                              <Link to={`/gitbook/my/${sessionStorage.getItem("authUserId")}`} className="nav-icon">
                                 <em className="fa fa-home"></em>
                              </Link>
                           </div>
                           : <div className="noselect-contents">
                              <Link to={`/gitbook/my/${sessionStorage.getItem("authUserId")}`} className="nav-icon">
                                 <em className="fa fa-home"></em>
                              </Link>
                             </div>
                        }
                        {contentsname == "mygroup" ?
                           <div className="select-contents">
                              <Link to="/gitbook/mygroup" className="nav-icon">
                                 <em className="fa fa-crosshairs"></em>
                              </Link>
                           </div>
                           : <div className="noselect-contents">
                              <Link to="/gitbook/mygroup" className="nav-icon">
                                 <em className="fa fa-crosshairs"></em>
                              </Link>
                             </div>
                        }
                        {contentsname == "upload" ?
                           <div className="select-contents">
                              <Link to="/gitbook/upload" className="nav-icon">
                                 <em className="fa fa-instagram"></em>
                              </Link>
                           </div>
                           :<div className="noselect-contents">
                              <Link to="/gitbook/upload" className="nav-icon">
                                 <em className="fa fa-instagram"></em>
                              </Link>
                           </div>
                        }
                        {contentsname == "chatting" ?
                           <div className="select-contents">
                              <Link className="nav-icon" to="/gitbook/chatting">
                                 <em className="fas fa-comments"></em>
                              </Link>
                           </div>
                           :<div className="noselect-contents">
                              <Link className="nav-icon" to="/gitbook/chatting">
                                 <em className="fas fa-comments"></em>
                              </Link>
                           </div>
                        }
                        {contentsname == "myfriend" ?
                           <div className="select-contents">
                              <Link to="/gitbook/myfriend" className="nav-icon">
                                 <em className="fas fa-user-friends"></em>
                              </Link>
                           </div>
                           :<div className="noselect-contents">
                              <Link to="/gitbook/myfriend" className="nav-icon">
                                 <em className="fas fa-user-friends"></em>
                              </Link>
                           </div>
                        }
                     </div>
                     {/* /navbar-header */}
                     <div className="col-lg-3">
                     <div className="navbar-right" style={{width:"446.47px", marginRight:"0px"}}>
                        <ul className="nav navbar-nav">
                           <li>
                              {/** 검색 창 */}
                              <div className="search-dashboard" style={{marginLeft:"0px", width:"250px"}}>
                                 <form style={{width: "250px"}}>
                                    <input placeholder="친구 검색" onChange={this.onInputChange.bind(this)} value={this.state.keyword} style={{outline:"none"}}></input>
                                    <Link to="/gitbook/main/friendsearch">
                                       <button
                                          onClick={this.onResult.bind(this)}
                                          type="submit"
                                          style={{
                                             display: "inline-block",
                                             background: "transparent none repeat scroll 0 0",
                                             border: "medium none",
                                             color: "#a7a7a7",
                                             padding: "12px 22px",
                                             position: "absolute",
                                             right: "0",
                                             top: "-7px",
                                             cursor: "pointer",
                                             outline:"none"
                                          }}
                                       >
                                          <i className="fa fa-search"></i>
                                       </button>
                                    </Link>
                                 </form>
                              </div>
                           </li>{" "}
                           {/** 여기까지 검색창 */}

                           <AlarmBox />
                           {/** 여기까지가 알림 창 */}
                           <li className="dropdown mega-avatar" style={{marginRight:"10px", paddingLeft:"0px"}}>
                              <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true" style={{paddingLeft:"0px"}}>
                                 <span className="avatar w-32" style={{marginRight:"0px", marginLeft:"0px"}}>

                                    <img src={`${global.API_URL + sessionStorage.getItem("authUserImage")}`} className="img-resonsive img-circle" width="25" height="25" alt="..."></img>

                                 </span>

                                 <span className="hidden-xs" style={{ fontFamily: " 'Varela Round', sans-serif", marginLeft: "10px" }}>
                                    <strong title={sessionStorage.getItem("authUserNickName")}>
                                       {sessionStorage.getItem("authUserNickName") && sessionStorage.getItem("authUserNickName").length > 5 ? 
                                          sessionStorage.getItem("authUserNickName").substring(0, 5) + ".."
                                          : sessionStorage.getItem("authUserNickName")}
                                    </strong>
                                 </span>
                              </a>
                              <DropdownMenu></DropdownMenu> {/** 프로필 메뉴   */}
                           </li>
                        </ul>
                        {/* */}
                     </div>{" "}
                     </div>
                     {/* /navbar-right */}
               </div>
               </div>
            </nav>
         </header>
      );
   }
}

export default withRouter(Header);