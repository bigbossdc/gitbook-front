import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./Fluffs/assets/css/demos/navi.css";
import Calendar from './Calendar'

import ErrorBoundary from './ErrorBoundary';

class Navigation extends Component {

 constructor() {
    super(...arguments); 
    this.state = {
          userinfo:'',
          show: "none"   
    }
}


reqFollow() {

  fetch(`${global.API_URL}/gitbook/friend/request`, {
    method: 'post',
    headers: global.API_HEADERS,
    body:JSON.stringify({
      userno: sessionStorage.getItem("authUserNo"),
      friendno: this.state.userinfo.no,
      userNickName: sessionStorage.getItem("authUserNickName"),
      friendId: this.props.id
    })
  })
    .then(response => response.json())
    .then(json => {
      this.setState({
        show: "none"
      });
      this.getUserinfo();
    })
    .catch(err => console.error(err))
}

getUserinfo() {
  fetch(`${global.API_URL}/gitbook/user/friend`, {
    method: 'post',
    headers: global.API_HEADERS,
    body: JSON.stringify({
      userno: sessionStorage.getItem("authUserNo"),
      friendid: this.props.id
    })
 })
  .then( response => response.json())
  .then( json => {

    this.setState({
       userinfo: json.data
    });
})
.catch( err => console.error( err ));  
}


onShow() {
  this.setState({
    show: "block",
  });
}

onClose() {
  this.setState({
      show: "none"
  });
}
 
  render() {
        return(
          <ErrorBoundary>
           <div className="react-transition fade-in" style={{animationDuration:'0.3s'}}>
            <div className="col-lg-3">
            <aside id="leftsidebar" className="sidebar">		  
             <ul className="list">
              <li>
                <div className="user-info">
                  {(sessionStorage.getItem("authUserId") === this.state.userinfo.id) ? 
                    <div className="image">
                      <Link to={`/gitbook/my/${this.state.userinfo.id}/profile`} style={{marginBottom:"20px"}}>
                       <img src={this.state.userinfo.image} className="img-circle" alt="" style={{width:"180px", height:"180px", marginRight:"15px"}}></img>
                       <span className="online-status online" style={{marginLeft:"10px"}}/>
                      </Link>       
                    </div> : 
                    (this.state.userinfo.status === "기타") ?
                    <div className="image">
                      <Link style={{marginBottom:"20px"}}>
                      <img src={this.state.userinfo.image} className="img-circle" onClick={this.onShow.bind(this)} alt="" style={{width:"180px", height:"180px", marginRight:"15px"}}></img>
                      <span className="online-status online" style={{background:"red"}}></span>
                      </Link>
                    </div> :
                    <div className="image">
                       <Link style={{marginBottom:"20px"}}>
                      <img src={this.state.userinfo.image} className="img-circle" alt="" style={{width:"180px", height:"180px", marginRight:"15px", cursor:"default"}}></img>
                      <span className="online-status online" style={{background:"blue"}}></span>
                      </Link>
                    </div>}

                  <div className="detail">
                      <h4><strong style={{fontFamily:"'Nanum Gothic', sans-serif"}}>{this.state.userinfo && this.state.userinfo.nickname}</strong></h4>
                      <small style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"17px", color:"#848484"}}>{this.state.userinfo && this.state.userinfo.name}&nbsp;({this.state.userinfo && this.state.userinfo.id})</small>  
                      <hr></hr>
                      {/* <p style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"17px", margin:"10px"}}>{this.state.userinfo && this.state.userinfo.profileContents} </p>                        */}
                      <p style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"17px", margin:"10px"}}>
                        {this.state.userinfo && this.state.userinfo.profileContents.split(/\n/g).map((word)=>
                        <div>
                          {
                            word.split(" ").map(nbsp=><div style={{display:"inline"}}>{nbsp}&nbsp;</div>)
                          }<br/>
                        </div>
                        )} 
                      </p>
                  </div>
                <div className="row">
                 <div className="col-12"></div>                                
                </div>
               </div>
              </li>
              <li>
              
                <Link to={`/gitbook/my/${this.state.userinfo && this.state.userinfo.id}`}>
                  <div className="contents-div">
                    <small className="navi"><i class="fas fa-stream"></i>&nbsp;&nbsp;&nbsp;Timeline <em className="fa fa-angle-right pull-right"></em></small>
                  </div>
                </Link>
                <Link to={`/gitbook/my/${this.state.userinfo && this.state.userinfo.id}/repository`}>
                  <div className="contents-div">
                    <small className="navi"><i class="fab fa-git-alt"></i>&nbsp;&nbsp;&nbsp;Repository <em className="fa fa-angle-right pull-right"></em></small>       
                  </div>
                </Link>
                { (sessionStorage.getItem("authUserId") === this.state.userinfo.id)?
                  <Link to={`/gitbook/my/${this.state.userinfo && this.state.userinfo.id}/schedule`}>
                    <div className="contents-div">
                    <small className="navi"><i class="fas fa-calendar-alt"></i>&nbsp;&nbsp;&nbsp;Schedule <em className="fa fa-angle-right pull-right"></em></small>
                    </div>
                  </Link>
                : ''
                }
               
              </li> 
             </ul>
            </aside>
            <hr/>
            <div className="col-lg-12" style={{marginTop:"10px"}}> 

              <Calendar userid = {this.props.id}/>
            </div>            
           </div>
           <div className="modal" style={{display: this.state.show}}>
            <div className="modal-content" style={{margin:"15% auto",height:"100px" ,width:"300px"}}>
                <div className="modal-header" style={{backgroundColor:"#0FC19E"}}>
                    <span className="close" onClick={this.onClose.bind(this)}>&times;</span>
                    <h6 style={{color:"#ffff",wordBreak: "break-all",fontSize:"13px",fontFamily:"'Jeju Gothic', sans-serif" }}>해당 맴버를 팔로우 하시겠습니까?</h6>
                </div>      
                <div className="modal-footer">
                    <button 
                        style={{width:"70px",margin:"10px auto"}}
                        type="submit"
                        className="kafe-btn kafe-btn-mint-small" name="button-ok"
                        onClick={this.reqFollow.bind(this)}>
                        ok
                    </button>
                </div>
            </div>
          </div> 
          </div>
          </ErrorBoundary>
        );
    }

    componentDidMount() {
      fetch(`${global.API_URL}/gitbook/user/friend`, {
        method: 'post',
        headers: global.API_HEADERS,
        body: JSON.stringify({
          userno: sessionStorage.getItem("authUserNo"),
          friendid: this.props.id
        })
     })
      .then( response => response.json())
      .then( json => {
 
        this.setState({
           userinfo: json.data
        });
    })
    .catch( err => console.error( err ));   
  }
}

export default Navigation;