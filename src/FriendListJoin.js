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

    onInputChange(event) {
        this.props['onNotifyKeywordChange'](event.target.value);
        console.log(event.target.value);
    }

    render() {
        return(   
         <div>
            <div className="group-req">
                <div className="group-search-area">   
                    <p><h4 className="group-req-title"><b>친구 목록</b></h4></p>
                    <div className="group-input-field">
                        <input placeholder="Search1" type="text" value={this.props.keyword} onChange={this.onInputChange.bind(this)}/>
                        <i className="fa fa-search"></i>  
                    </div>
                </div>
                <section class="notifications">
                    <ul className="group-list">
                        { this.props.userinfo && this.props.userinfo
                            .filter((element) => element.nickname.indexOf(this.props.keyword) != -1 || element.name.indexOf(this.props.keyword) != -1 || element.id.indexOf(this.props.keyword) != -1)
                            .map( list => <FriendListJoinItem 
                                key={ list.id }
                                nickname={list.nickname}
                                name={list.name}
                                id={list.id}
                                no={list.no}
                                img={list.image}
                                callback={this.props.callback}
                        />) }
                    </ul>
                </section>
            </div>
        </div>
        );
    }
}


export default FriendListJoin;