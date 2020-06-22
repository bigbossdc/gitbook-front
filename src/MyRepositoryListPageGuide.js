import React, {Component} from 'react';
import {Link} from "react-router-dom";

import "./Fluffs/assets/css/demos/guide.css";
import TimelineItem from './TimelineItem';


class MyRepositoryListPageGuide extends Component {
  constructor(){
    super(...arguments);
    this.state={
 
    }
  }


  render() {
  
    return (
      <div>
      <div className="guide-box">
        <div style={{textAlign:"center", margin:"20px 0px"}}>
          {
            (this.props.groupno && this.props.groupno !== undefined) ?
               <Link to={`/gitbook/group/${this.props.groupno}/${sessionStorage.getItem("authUserId")}/repository/write`}>
                <p className="timeline-file-icon"><i className="fas fa-database fa-6x"></i><i className="fas fa-plus fa-2x"></i></p>
              </Link>
              :<Link to={`/gitbook/my/${sessionStorage.getItem("authUserId")}/repository/write`}>
                  <p className="timeline-file-icon"><i className="fas fa-database fa-6x"></i><i className="fas fa-plus fa-2x"></i></p>
                </Link>
              
          }
      </div>
      <div style={{textAlign:"center", marginBottom:"25px"}}>
        <p><h4 className="group-req-title" style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"1.5em", color:"#606665"}}><b>생성한 레포지토리가 없습니다</b></h4></p>
        {
           (this.props.groupno && this.props.groupno !== undefined) ?
           <p style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"1.2em", color:"#606665"}}>깃 생성이 어렵나요? <br/> 아래 가이드를 보고 그룹의 소스코드를 관리해보세요</p>
           :<p style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"1.2em", color:"#606665"}}>깃 생성이 어렵나요? <br/> 아래 가이드를 보고 "{this.props.userid}"님의 소스코드를 관리해보세요</p>
        }
        
      </div>
     
        <video autoPlay="autoplay" loop="loop" muted style={{width:"100%", height:"500px", position:"relative"}}>
          <source src="/gitbook/assets/player/gitbook_repo.mp4" type="video/mp4"></source>
        </video>
        
      </div>
  </div>
    );
  }

}
export default MyRepositoryListPageGuide;
