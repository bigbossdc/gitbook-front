import React, { Component } from "react";
//import './Fluffs/assets/css/demos/photo.css';

import FriendListJoinItem from "./FriendListJoinItem";

const API_URL = 'http://localhost:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}
class FriendListJoin extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            userFriends: null
        }
    }

    componentDidMount() {
        fetch(`${API_URL}/gitbook/user/friend`, {
            method: 'get',
            headers: API_HEADERS
        })
        .then( response => response.json())
        .then( json => {
            console.log(json);
            console.log('.........>')
            this.setState({
                userFriends: json.data
            });
        })
        .catch( err => console.error( err ));        
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
                        { this.state.userFriends && this.state.userFriends.map( list => <FriendListJoinItem 
                            key={ list.id }
                            nickname={list.nickname}
                            name={list.name}
                            id={list.id}
                        />) }
                    </ul>
                </section>
            </div>
        </div>
        );
    }
}


export default FriendListJoin;