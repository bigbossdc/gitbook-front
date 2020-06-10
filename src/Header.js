import React, { Component } from "react";
import { Link } from "react-router-dom";
import AlarmBox from "./AlarmBox";
import DropdownMenu from "./DropdownMenu";



class Header extends Component {
   constructor() {
      super(...arguments);
      this.state = {
         keyword: "",
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
         keyword: "",
      });
   }

   render() {
      return (
         <header className="tr-header" style={{ position: "fixed", width: "100%", zIndex: "100" }}>
            <nav className="navbar navbar-default">
               <div className="container-fluid">
                  <div className="navbar-header">
                     <Link to="/gitbook/main" className="navbar-brand" href="index.html">
                        {" "}
                        GitBook
                     </Link>
                  </div>{" "}
                  {/* /navbar-header */}
                  <div className="navbar-right">
                     <ul className="nav navbar-nav">
                        <li>
                           {/** 검색 창 */}
                           <div className="search-dashboard">
                              <form onClick={this.onResult.bind(this)}>
                                 <input placeholder="친구 검색" onChange={this.onInputChange.bind(this)} value={this.state.keyword}></input>
                                 <Link to="/gitbook/main/friendsearch">
                                    <button
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

                        <li className="dropdown mega-avatar">
                           <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                              <span className="avatar w-32">

                                 <img src={`${global.API_URL + sessionStorage.getItem("authUserImage")}`} className="img-resonsive img-circle" width="25" height="25" alt="..."></img>

                              </span>

                              <span className="hidden-xs" style={{ fontFamily: " 'Varela Round', sans-serif", marginLeft: "10px" }}>
                                 <strong>{sessionStorage.getItem("authUserNickName")}</strong>
                              </span>
                           </a>
                           <DropdownMenu></DropdownMenu> {/** 프로필 메뉴   */}
                        </li>
                     </ul>
                     {/* */}
                  </div>{" "}
                  {/* /navbar-right */}
               </div>
            </nav>
         </header>
      );
   }
}

export default Header;