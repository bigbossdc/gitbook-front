import React, { Component } from "react";

import FriendListRequest from "./FriendListRequest";
import FriendListJoin from "./FriendListJoin";


class FriendList extends Component {

    render() {
        return(   
         <div>
            <FriendListRequest callback={this.props.callback} userinfo={this.props.reqinfo}></FriendListRequest>
            <hr/>
            <FriendListJoin userinfo={this.props.friendinfo}></FriendListJoin>
        </div>
       );
    }
    
}

export default FriendList;