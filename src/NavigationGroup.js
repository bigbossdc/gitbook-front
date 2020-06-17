import React, { Component } from "react";
import './Fluffs/assets/css/demos/photo.css';
import GroupCalendar from './GroupCalendar'
import { Link } from "react-router-dom";
import GroupSetting from "./GroupSetting";
import GroupTimeLinePage from "./GroupTimeLinePage";

class NavigationGroup extends Component {
    render() {

        return(
            <div className="col-lg-3">
            <aside id="leftsidebar" className="sidebar">		  
             <ul className="list">
              <li>
                  <div className="user-info">
                    {(sessionStorage.getItem("authUserNo") === this.props.groupinfo.masterNo) ?
                        <div className="image">
                          <Link to={`/gitbook/my/${sessionStorage.getItem("authUserId")}/profile`}  style={{marginBottom:"20px"}}>
                            <img src={this.props.groupinfo.masterImage} className="img-responsive img-circle" style={{width:"180px", height:"180px", marginRight:"15px"}} alt="User"></img>
                            <span className="online-status online" style={{marginLeft:"10px"}}/>
                          </Link>
                          {/*그룹 관리자만 나오는 아이콘 - 설정페이지*/}
                          <Link to={`/gitbook/group/${this.props.groupinfo.no}/${this.props.groupinfo.masterNo}/setting`}><i class="fas fa-cog fa-2x"/></Link>
                        </div>
                        : <div className="image">
                            <Link style={{cursor:"default"}}>
                              <img src={this.props.groupinfo.masterImage} className="img-responsive img-circle" style={{width:"180px", height:"180px", marginRight:"15px"}} alt="User"></img>
                              <span className="online-status online" style={{marginLeft:"10px", background:"blue"}}/>
                            </Link>
                          </div>
                    }

                <div className="detail">               
                  <p style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"17px", margin:"10px"}}>
                    {/* {
                       this.props.groupinfo.groupIntro.split(/\n/g).map((word)=>
                      <div>
                        {
                          word.split(" ").map(nbsp => <div>{nbsp}&nbsp;</div>)
                        }
                      </div>
                      )

                    } */}
                    {this.props.groupinfo.groupIntro}
                  </p>                       
                </div>
                <div className="row">
                 <div className="col-12">
                 
                 </div>                                
                </div>
               </div>
              </li>
             
              <li>
               <Link to={`/gitbook/group/${this.props.groupinfo.no}`}>
                  <div className="contents-div">
                    <small className="navi"><i class="fas fa-stream"></i>&nbsp;&nbsp;&nbsp;Timeline <em className="fa fa-angle-right pull-right"></em></small>
                  </div>
               </Link>
               <Link to={`/gitbook/group/${this.props.groupinfo.no}/${sessionStorage.getItem("authUserNo")}/repository`}>
                  <div className="contents-div">
                    <small className="navi"><i class="fab fa-git-alt"></i>&nbsp;&nbsp;&nbsp;Repository <em className="fa fa-angle-right pull-right"></em></small>          
                  </div>
               </Link>
               <Link to={`/gitbook/group/${this.props.groupinfo.no}/${sessionStorage.getItem("authUserNo")}/schedule`}>
                  <div className="contents-div">
                    <small className="navi"><i class="fas fa-calendar-alt"></i>&nbsp;&nbsp;&nbsp;Schedule <em className="fa fa-angle-right pull-right"></em></small>
                  </div>
               </Link>
              </li> 
             </ul>
            </aside>
            <hr/>
            <div className="col-lg-12"> 
              <GroupCalendar
                groupno = {this.props.groupno}
                userno = {this.props.userno}
              />
              </div>	
           </div>
           
        );
    }
}

export default NavigationGroup;