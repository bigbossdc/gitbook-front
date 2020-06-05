import React, { Component } from "react";
import './Fluffs/assets/css/demos/photo.css';
import Calendar from './Calendar'
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
                    <img src={this.props.groupinfo.masterImage} className="img-responsive img-circle" alt="User"></img>
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
               <Link to="/gitbook/group"><small className="text-muted">Group Timeline <em className="fa fa-angle-right pull-right"></em></small><br/></Link>
               <Link to="/gitbook/group/repository"><small className="text-muted">Group Repository <em className="fa fa-angle-right pull-right"></em></small><br/></Link>           
               <Link to="/gitbook/group/schedule"><small className="text-muted">Group Schedule <em className="fa fa-angle-right pull-right"></em></small><br/></Link>
               <Link to="/gitbook/group/commit"><small className="text-muted">Group Commit <em className="fa fa-angle-right pull-right"></em></small><br/></Link>
                <br></br>
             
              </li> 
              
  





             </ul>
            </aside>

            <div className="col-lg-12"> 
              <Calendar></Calendar>
              </div>	

           </div>
              
         

             
         

           
        );
    }
}

export default NavigationGroup;