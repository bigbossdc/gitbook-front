import React, { Component } from "react";
//import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/group.css';
import './Fluffs/assets/css/demos/groupTab.css';


class GroupHeaderImg extends Component {

    render() {
        return(
         <div className="imges">
                <img src={this.props.groupinfo.image} className="imges"/>
                <div className="content">
                    <h4>{this.props.groupinfo.groupTitle}</h4>
                </div> 
                <div className="img-cover"></div>
                {this.props.groupinfo.grant !== 'user_req' ? <a className='btn-floating'><div><i className="fa fa-pencil fa-1x"></i></div></a> : ''}
                
        </div>
        );
    }
}


export default GroupHeaderImg;