import React, { Component } from "react";
import './Fluffs/assets/css/demos/group.css';
import GroupListRequestItem from "./GroupListRequestItem";


class GroupListRequest extends Component {
    render() {
        return(   
         <div>
            <div className="group-req">
                <div className="group-search-area">   
                    <p><h4 className="group-req-title"><b>그룹 요청</b></h4></p>
                    <div className="group-input-field">
                        <input placeholder="Search" type="text"/>
                        <i className="fa fa-search"></i>  
                    </div>
                    <div className="group-add-btn">     
                        <span>그룹 생성&nbsp;&nbsp;<i className="fa fa-plus a"></i></span>
                    </div>
                </div>
            <section class="notifications">
                <GroupListRequestItem></GroupListRequestItem>
           </section>
        </div>
        </div>
            

        );
}
}


export default GroupListRequest;