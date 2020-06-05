import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/group.css';


class GroupListRequestItem extends Component {

    onClickAdd() {
        this.props.callback.add(this.props.groupno);
    }

    onClickDelete() {
        this.props.callback.delete(this.props.groupno);
    }

    render() {
        return(   
            <li>
                <div className="media"> 
                    <img src={this.props.masterimage} alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                        <div className="media_body">
                            <Link to={`/gitbook/mygroup/${this.props.groupno}/info`}><p><h4><b>{this.props.groupTitle}</b></h4></p></Link>
                            <h5>{this.props.groupTitle} 그룹에서 참여를 원합니다!!</h5>
                            <div className="btn_group"> 
                                <a className="kafe-btn kafe-btn-mint" onClick={this.onClickAdd.bind(this)}>수락</a>
                                <a className="kafe-btn kafe-btn-mint btn-danger" onClick={this.onClickDelete.bind(this)}>거절</a>
                            </div>
                        </div> 
                </div>
            </li>    
        );
    }
}


export default GroupListRequestItem;