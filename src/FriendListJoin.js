import React, { Component } from "react";
//import './Fluffs/assets/css/demos/photo.css';

import FriendListJoinItem from "./FriendListJoinItem";


class FriendListJoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userFriends: null
        }
    }

    render() {
        return(   
         <div>
            <div className="group-req">
                <div className="group-search-area">   
                    <p><h4 className="group-req-title"><b>친구 목록</b></h4></p>
                    <div className="group-input-field">
                        <input placeholder="Search" type="text"/>
                        <i className="fa fa-search"></i>  
                    </div>
                </div>
                <section class="notifications">
                    <ul className="group-list">
                        { this.props.userinfo && this.props.userinfo.map( list => <FriendListJoinItem 
                            key={ list.id }
                            nickname={list.nickname}
                            name={list.name}
                            id={list.id}
                            img={list.image}
                        />) }
                    </ul>
                </section>
            </div>
        </div>
        );
    }
}


export default FriendListJoin;