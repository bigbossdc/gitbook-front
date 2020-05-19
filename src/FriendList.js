import React, { Component } from "react";
import './Fluffs/assets/css/demos/group.css';
import FriendListRequest from "./FriendListRequest";
import FriendListJoin from "./FriendListJoin";


class FriendList extends Component {
    render() {
        return(   
         <div>
            <FriendListRequest></FriendListRequest>
            <hr/>
            <FriendListJoin></FriendListJoin>
        </div>
       );
    }
}

export default FriendList;