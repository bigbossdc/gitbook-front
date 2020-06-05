import React, { Component } from "react";
import {Link} from "react-router-dom";
//import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/group.css';


class GroupListJoinItem extends Component {
    render() {
        return(   
         <div>  
            <li>
                <div className="media"> 
                    <img src={this.props.masterimage} alt="" className="img-responsive img-circle" style={{marginTop:"10px"}}/>  
                        <div className="media_body">
                        <Link to={`/gitbook/group/${this.props.groupno}/${sessionStorage.getItem("authUserNo")}`}><p><h4><b>{this.props.groupTitle}</b></h4></p></Link>
                            <h5>{this.props.groupIntro}</h5>
                        </div> 
                </div>
            </li>
        </div>
        );
    }
}

export default GroupListJoinItem;