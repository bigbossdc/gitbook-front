import React, { Component } from "react";
//import './Fluffs/assets/css/demos/photo.css';

import FriendListJoinItem from "./FriendListJoinItem";


class FriendListJoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            userFriends: null
        }
    }

    onNotifyKeywordChange(keyword) {
        this.setState({
            keyword: keyword
        })
    }

    onInputChange(event) {
        this['onNotifyKeywordChange'](event.target.value);
       
    }

    render() {
        return(   
         <div>
            <div className="group-req">
            <p><h4 className="group-req-title"><b>친구 목록 ({this.props.friendnum}명)</b></h4></p>
                {this.props.userinfo == "" ?
                ""
                :<div className="group-search-area">   
                    <div className="group-input-field">
                        <input placeholder="Search" type="text" value={this.props.keyword} onChange={this.onInputChange.bind(this)}/>
                        <i className="fa fa-search"></i>  
                    </div>
                </div>
                }

                <section class="notifications">
                    <ul className="group-list">
                        {this.props.userinfo == "" ?
                            <div>
                                <p className="nocontents">친구가 없습니다. 친구를 추가해보세요 :)</p>
                            </div>
                            :this.props.userinfo && this.props.userinfo
                            .filter((element) => element.nickname.indexOf(this.state.keyword) != -1 || element.name.indexOf(this.state.keyword) != -1 || element.id.indexOf(this.state.keyword) != -1)
                            .map( list => <FriendListJoinItem 
                                key={ list.id }
                                nickname={list.nickname}
                                name={list.name}
                                id={list.id}
                                no={list.no}
                                img={list.image}
                                callback={this.props.callback}
                            />) 
                        }
                    </ul>
                </section>
            </div>
        </div>
        );
    }
}


export default FriendListJoin;