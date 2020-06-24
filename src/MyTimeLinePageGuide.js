import React, {Component} from 'react';
import {Link} from "react-router-dom";

import "./Fluffs/assets/css/demos/guide.css";
import TimelineItem from './TimelineItem';


class MyTimeLinePageGuide extends Component {
  constructor(){
    super(...arguments);
    this.state={
 
    }
  }


  render() {
  console.log("!!!!!!! " + this.props.groupno)
    return (
      <div>
      <div className="guide-box">
        <div style={{textAlign:"center", margin:"20px 0px"}}>
        {(this.props.groupno && this.props.groupno !== undefined) ? 
            <Link to={`/gitbook/upload/${this.props.groupno}`}>
             <p className="timeline-file-icon"><i class="fas fa-file-medical fa-6x"></i></p>
            </Link>
            : (this.props.userid === sessionStorage.getItem("authUserId")) ?
              <Link to="/gitbook/upload">
                <p className="timeline-file-icon"><i className="fas fa-file-medical fa-6x"></i></p>
              </Link>
              :<p style={{color:"#5b6160"}}><i class="fas fa-file-alt fa-6x"></i></p>
        }

      </div>

      <div style={{textAlign:"center", marginBottom:"25px"}}>
        <p><h4 className="group-req-title" style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"1.5em", color:"#606665"}}><b>게시한 타임라인이 없습니다</b></h4></p>
        {
          (this.props.groupno && this.props.groupno !== undefined) ? 
            <p style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"1.2em", color:"#606665"}}>팀원들에게 하고 싶은 이야기가 있나요? <br/> 아래 가이드를 보고 지금 업로드해보세요</p>
            :(this.props.userid === sessionStorage.getItem("authUserId")) ? 
              <p style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"1.2em", color:"#606665"}}>깃북에 처음 방문하셨나요? <br/> 아래 가이드를 보고 "{this.props.userid}"님의 이야기를 업로드해보세요</p>
              :<p><br/></p>
        }
      </div>

     
        <video autoPlay="autoplay" loop="loop" muted style={{width:"100%", height:"500px", position:"relative"}}>
          <source src="/gitbook/assets/player/gitbook.mp4" type="video/mp4"></source>
        </video>
        
      </div>
      
  </div>
    );
  }

}
export default MyTimeLinePageGuide;
