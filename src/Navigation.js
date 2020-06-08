import React, { Component } from "react";
import {Link} from "react-router-dom";

import Calendar from './Calendar'



class Navigation extends Component {
  constructor() {
    super(...arguments);
   
    this.state = {
          userinfo:'',
          show: "none"
        
    }
}

reqFollow() {
  console.log("friend request 확인" + this.state.userinfo.no + ":" + sessionStorage.getItem("authUserNo"));
  fetch(`${global.API_URL}/gitbook/friend/request`, {
    method: 'post',
    headers: global.API_HEADERS,
    body:JSON.stringify({
      userno: sessionStorage.getItem("authUserNo"),
      friendno: this.state.userinfo.no
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
    console.log("aaa :" + this.state.userinfo.status)
        return(
          <div>
            <div className="col-lg-3">
            <aside id="leftsidebar" className="sidebar">		  
             <ul className="list">
              <li>
                <div className="user-info">
                  {(sessionStorage.getItem("authUserId") === this.state.userinfo.id) ? 
                    <div className="image">
                      <Link to={`/gitbook/my/${this.state.userinfo.id}/profile`}>
                      <img src={this.state.userinfo.image} className="img-circle" alt="User" style={{width:"180px", height:"180px", marginBottom:"10px"}}></img>
                      <span className="online-status online"></span>
                      </Link>
                    </div> : 
                    (this.state.userinfo.status === "기타") ?
                    <div className="image">
                      <Link>
                      <img src={this.state.userinfo.image} className="img-circle" onClick={this.onShow.bind(this)} alt="User" style={{width:"180px", height:"180px", marginBottom:"10px"}}></img>
                      <span className="online-status online" style={{background:"red"}}></span>
                      </Link>
                    </div> :
                    <div className="image">
                       <Link>
                      <img src={this.state.userinfo.image} className="img-circle" alt="User" style={{width:"180px", height:"180px", marginBottom:"10px"}}></img>
                      <span className="online-status online" style={{background:"blue"}}></span>
                      </Link>
                    </div>}

                  <div className="detail">
                      <h4 style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>{this.state.userinfo && this.state.userinfo.nickname}</strong></h4>
                      <small  style={{fontFamily: " 'Varela Round', sans-serif"}}>{this.state.userinfo && this.state.userinfo.name}</small>  
                      <small>({this.state.userinfo && this.state.userinfo.id})</small> 
                      <hr></hr>
                      <p style={{fontFamily: " 'Varela Round', sans-serif",margin:"10px"}}>{this.state.userinfo && this.state.userinfo.profileContents} </p>                       
                  </div>
                <div className="row">
                 <div className="col-12"></div>                                
                </div>
               </div>
              </li>
              <li>
               <Link to={`/gitbook/my/${this.state.userinfo && this.state.userinfo.id}`}><small className="text-muted">my Timeline <em className="fa fa-angle-right pull-right"></em></small><br/></Link>

               <Link to={`/gitbook/my/${this.state.userinfo && this.state.userinfo.id}/repository`}><small className="text-muted">my Repository <em className="fa fa-angle-right pull-right"></em></small><br/></Link>           

               { (sessionStorage.getItem("authUserId") === this.state.userinfo.id)?
               <Link to={`/gitbook/my/${this.state.userinfo && this.state.userinfo.id}/schedule`}><small className="text-muted">my Schedule <em className="fa fa-angle-right pull-right"></em></small><br/></Link>
                : ''
              }
               <br></br>
              </li> 
             </ul>
            </aside>
            <div className="col-lg-12"> 

              <Calendar userid = {this.props.id}/>
            </div>            
           </div>
           <div className="modal" style={{display: this.state.show}}>
            <div className="modal-content" style={{margin:"15% auto",height:"130px" ,width:"300px"}}>
                <div className="modal-header" style={{backgroundColor:"#0FC19E"}}>
                    <span className="close" onClick={this.onClose.bind(this)}>&times;</span>
                    <h6 style={{color:"#ffff"}}>친구 팔로우</h6>
                </div>      
                <div className="modal-footer">
                    <h6 style={{color:"gray",position:"absolute",marginLeft:"10px"}}>해당 맴버를 팔로우 하시겠습니까?</h6>            
                    <button 
                        style={{width:"70px",marginTop:"30px"}}
                        type="submit"
                        className="kafe-btn kafe-btn-mint-small" name="button-ok"
                        onClick={this.reqFollow.bind(this)}>
                        ok
                    </button>
                </div>
            </div>
          </div> 
          </div>
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