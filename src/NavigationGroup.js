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
                    <div className="image">
                  <a href="photo_profile_two.html">
                    <img src={this.props.groupinfo.masterImage} className="img-responsive img-circle" style={{width:"180px", height:"180px", marginBottom:"10px"}} alt="User"></img>
                  </a>
                     {/*그룹 관리자만 나오는 아이콘 - 설정페이지*/}
                     {(sessionStorage.getItem("authUserNo") === this.props.groupinfo.masterNo) ? 
                      <Link to={`/gitbook/group/${this.props.groupinfo.no}/${this.props.groupinfo.masterNo}/setting`}><i class="fas fa-cog fa-2x"/></Link> : ''
                     }
               
                    </div>
                <div className="detail">
                 
                <p style={{fontFamily: " 'Varela Round', sans-serif",margin:"10px"}}>
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
               <Link to={`/gitbook/group/${this.props.groupinfo.no}`}><small className="text-muted">Group Timeline <em className="fa fa-angle-right pull-right"></em></small><br/></Link>
               <Link to={`/gitbook/group/${this.props.groupinfo.no}/${sessionStorage.getItem("authUserNo")}/repository`}><small className="text-muted">Group Repository <em className="fa fa-angle-right pull-right"></em></small><br/></Link>           
               <Link to={`/gitbook/group/${this.props.groupinfo.no}/${sessionStorage.getItem("authUserNo")}/schedule`}><small className="text-muted">Group Schedule <em className="fa fa-angle-right pull-right"></em></small><br/></Link>
               <br></br>
              </li> 
            
             </ul>
            </aside>

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