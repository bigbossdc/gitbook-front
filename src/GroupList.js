import React, { Component } from "react";
import './Fluffs/assets/css/demos/group.css';
import GroupListRequest from "./GroupListRequest";
import GroupListJoin from "./GroupListJoin";


class GroupList extends Component {
    render() {
        return(   
         <div>
            <GroupListRequest></GroupListRequest>
            <hr/>
            <GroupListJoin></GroupListJoin>
        </div>
       );
    }
}

export default GroupList;