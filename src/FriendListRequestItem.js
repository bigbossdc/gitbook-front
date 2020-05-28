import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/group.css';


class FriendpListRequestItem extends Component {

    onClickAdd() {
        this.props.callback.add(this.props.no);
    }

    onClickDelete() {
        this.props.callback.delete(this.props.no);
    }

    render() {
        return(   
         <div>
           <div>
                <li>
                    <div className="media"> 
                        <img src={this.props.img} alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                        <div className="media_body">
                            <Link to={`/gitbook/my/${this.props.id}`}><p><h4><b>{this.props.nickname}</b></h4></p></Link>
                            <h5>{this.props.nickname}({this.props.name})님이 친구 요청을 했습니다</h5>
                            <div className="btn_group"> 
                                <a className="kafe-btn kafe-btn-mint" onClick={this.onClickAdd.bind(this)}>수락</a>
                                <a className="kafe-btn kafe-btn-mint btn-danger" onClick={this.onClickDelete.bind(this)}>거절</a>
                            </div>
                        </div> 
                    </div>
                </li>
            </div>
        </div>
        );
    }
}


export default FriendpListRequestItem;