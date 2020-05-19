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
                    <img src="/assets/img/users/13.jpeg" className="img-responsive img-circle" alt="User"></img>
                  </a>
                     {/*그룹 관리자만 나오는 아이콘 - 설정페이지*/}
                    <Link to="/group/setting"><i class="fas fa-cog fa-2x"/></Link>
               
                    </div>
                <div className="detail">
                 
                <p style={{fontFamily: " 'Varela Round', sans-serif",margin:"10px"}}>
                  안녕하세요! GibBook그룹에 오신것을 환영합니다!!
                  여기는 개발자들을 위한 공간입니다.
                  만나서 반갑습니다!! 지금 바로 가입하세요!!!!!!!!!!!!!!!!!!!!!!!!!!!</p>                       
                </div>
                <div className="row">
                 <div className="col-12">
                 
                 </div>                                
                </div>
               </div>
              </li>
             
              <li>
               <Link to="/group"><small className="text-muted">Group Timeline <em className="fa fa-angle-right pull-right"></em></small><br/></Link>
               <Link to="/group/repository"><small className="text-muted">Group Repository <em className="fa fa-angle-right pull-right"></em></small><br/></Link>           
               <Link to="/group/schedule"><small className="text-muted">Group Schedule <em className="fa fa-angle-right pull-right"></em></small><br/></Link>
               <Link to="/group/commit"><small className="text-muted">Group Commit <em className="fa fa-angle-right pull-right"></em></small><br/></Link>
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