import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/group.css';



class FriendListJoinItem extends Component {



    render() {
        return(   
         <div>
                <li>
                    <div className="media"> 
                        <img src="/gitbook/assets/img/users/1.jpg" alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                            <div className="media_body">
                                <Link to={`/gitbook/my/${this.props.id}`}><p><h4><b>{this.props.nickname}</b></h4></p></Link>
                                <h5>{this.props.name} ({this.props.id})</h5>
                                <div className="btn_group"> 
                                    <a className="kafe-btn kafe-btn-mint">메시지</a>
                                    <a className="kafe-btn kafe-btn-mint btn-danger">삭제</a>
                                </div>
                            </div> 
                    </div>
                </li>
        </div>
        );
    }

}

export default FriendListJoinItem;