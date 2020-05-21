import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/group.css';


class FriendListJoinItem extends Component {
    render() {
        return(   
         <div>
            <ul className="group-list">
                <li>
                    <div className="media"> 
                        <img src="/gitbook/assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                                <Link to="/gitbook/my"><p><h4><b>에옹이</b></h4></p></Link>
                                <h5>전유진 (yjin@naver.com)</h5>
                                <div className="btn_group"> 
                                    <a className="kafe-btn kafe-btn-mint">메시지</a>
                                    <a className="kafe-btn kafe-btn-mint btn-danger">삭제</a>
                                </div>
                            </div> 
                    </div>
                </li>
                <li>
                    <div className="media first_child"> 
                        <img src="/gitbook/assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                                <p><h4><b>우굥쓰</b></h4></p>
                                <h5>김우경 (kim@google.com)</h5>
                                <div className="btn_group"> 
                                    <a className="kafe-btn kafe-btn-mint">메시지</a>
                                    <a className="kafe-btn kafe-btn-mint btn-danger">삭제</a>
                                </div>
                            </div> 
                    </div>
                </li>    
                <li>
                    <div className="media first_child"> 
                        <img src="/gitbook/assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                                <p><h4><b>옌</b></h4></p>
                                <h5>이예은 (nana@naver.com)</h5>
                                <div className="btn_group"> 
                                    <a className="kafe-btn kafe-btn-mint">메시지</a>
                                    <a className="kafe-btn kafe-btn-mint btn-danger">삭제</a>
                                </div>
                            </div> 
                    </div>
                </li>      
                <li>
                    <div className="media first_child"> 
                        <img src="/gitbook/assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                                <p><h4><b>쩡쩡</b></h4></p>
                                <h5>신정은 (jjung@hanmail.net)</h5>
                                <div className="btn_group"> 
                                    <a className="kafe-btn kafe-btn-mint">메시지</a>
                                    <a className="kafe-btn kafe-btn-mint btn-danger">삭제</a>
                                </div>
                            </div> 
                    </div>
                </li> 
            </ul>
        </div>
        );
    }
}

export default FriendListJoinItem;