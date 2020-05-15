import React, { Component } from "react";
import './Fluffs/assets/css/demos/group.css';


class GroupListRequestItem extends Component {
    render() {
        return(   
         <div>
            <ul className="group-list">
                <li>
                    <div className="media"> 
                        <img src="assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                                <p><h4><b>Douzone</b></h4></p>
                                <h5>Douzone 그룹에서 참여를 원합니다!!</h5>
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
                            <p><h4><b>GitBook</b></h4></p>
                            <h5>GitBook 그룹에서 참여를 원합니다!!</h5>
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
                            <p><h4><b>Mysite</b></h4></p>
                            <h5>Mysite 그룹에서 참여를 원합니다!!</h5>
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
                            <p><h4><b>Bit</b></h4></p>
                            <h5>Bit 그룹에서 참여를 원합니다!!</h5>
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
                            <p><h4><b>kakao</b></h4></p>
                            <h5>kakao 그룹에서 참여를 원합니다!!</h5>
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


export default GroupListRequestItem;