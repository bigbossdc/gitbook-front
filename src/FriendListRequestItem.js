import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/group.css';


class FriendpListRequestItem extends Component {
    render() {
        return(   
         <div>
            <ul className="group-list">
                <li>
                    <div className="media"> 
                        <img src="assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                                <Link to="/my"><p><h4><b>Ryon</b></h4></p></Link>
                                <h5>Ryon(정혜진)님이 친구 요청을 했습니다!!</h5>
                                <div className="btn_group"> 
                                    <a className="kafe-btn kafe-btn-mint">수락</a>
                                    <a className="kafe-btn kafe-btn-mint btn-danger">거절</a>
                                </div>
                            </div> 
                    </div>
                </li>
                <li>
                    <div className="media first_child"> 
                        <img src="assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                            <p><h4 style={{fontFamily: " 'Varela Round', sans-serif"}}><b>닉네임</b></h4></p>
                            <h5>닉네임(이름)님이 친구 요청을 했습니다!!</h5>
                                <div className="btn_group"> 
                                    <a className="kafe-btn kafe-btn-mint">수락</a>
                                    <a className="kafe-btn kafe-btn-mint btn-danger">거절</a>
                                </div>
                            </div> 
                    </div>
                </li>    
                <li>
                    <div className="media first_child"> 
                        <img src="assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                            <p><h4><b>푸우</b></h4></p>
                            <h5>푸우(유남길)님이 친구 요청을 했습니다!!</h5>
                                <div className="btn_group"> 
                                    <a className="kafe-btn kafe-btn-mint">수락</a>
                                    <a className="kafe-btn kafe-btn-mint btn-danger" sty>거절</a>
                                </div>
                            </div> 
                    </div>
                </li> 
                <li>
                    <div className="media first_child"> 
                        <img src="assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                            <p><h4><b>팽수</b></h4></p>
                            <h5>팽수(김정석)님이 친구 요청을 했습니다!!</h5>
                                <div className="btn_group"> 
                                    <a className="kafe-btn kafe-btn-mint">수락</a>
                                    <a className="kafe-btn kafe-btn-mint btn-danger">거절</a>
                                </div>
                            </div> 
                    </div>
                </li> 
                <li>
                    <div className="media first_child"> 
                        <img src="assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                            <p><h4><b>콘</b></h4></p>
                            <h5>콘(조종혁)님이 친구 요청을 했습니다!!</h5>
                                <div className="btn_group"> 
                                    <a className="kafe-btn kafe-btn-mint">수락</a>
                                    <a className="kafe-btn kafe-btn-mint btn-danger">거절</a>
                                </div>
                            </div> 
                    </div>
                </li>       
            </ul>
        </div>
        );
    }
}


export default FriendpListRequestItem;