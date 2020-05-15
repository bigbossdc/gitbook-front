import React, { Component } from "react";
//import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/group.css';
import './Fluffs/assets/css/demos/groupTab.css';


class GroupHeaderImg extends Component {
    render() {
        return(
            <div className="img">
                <div className="content">
                    <h4>GitBook</h4>
                </div> 
                <div className="img-cover"></div>
                <a className='btn-floating'><div><i className="fa fa-pencil fa-1x"></i></div></a>
            
            </div>
        );
    }
}


export default GroupHeaderImg;