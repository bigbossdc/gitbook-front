import React, { Component } from "react";

import FriendListRequest from "./FriendListRequest";
import FriendListJoin from "./FriendListJoin";


class FriendList extends Component {
    constructor() {
        super(...arguments);
        this.state = {
           
        }
        
    }

    // onNotifyKeywordChange(keyword) {
    //     this.setState({
    //         keyword: keyword
    //     })
    // }

    render() {
        return(   
         <div>
            <FriendListRequest 
                callback={this.props.callback} 
                userinfo={this.props.reqinfo}
                
                />
            <hr/>
            <FriendListJoin 
                callback={this.props.callback} 
                userinfo={this.props.friendinfo}
               
                friendnum={this.props.friendnum}
                />
        </div>
       );
    }
    
}

export default FriendList;