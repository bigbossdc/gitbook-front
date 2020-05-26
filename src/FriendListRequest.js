import React, { Component } from "react";
import './Fluffs/assets/css/demos/group.css';
import FriendListRequestItem from "./FriendListRequestItem";


class FriendListRequest extends Component {
    render() {
        return(   
         <div>
            <div className="group-req">
                <div className="group-search-area">   
                    <p><h4 className="group-req-title"><b>친구 요청</b></h4></p>
                    <div className="group-input-field">
                        <input placeholder="Search" type="text"/>
                        <i className="fa fa-search"></i>  
                    </div>
                    
                </div>
            <section className="notifications">
                <FriendListRequestItem></FriendListRequestItem>
           </section>
        </div>
        </div>
            

        );
    }
}


export default FriendListRequest;