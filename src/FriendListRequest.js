import React, { Component } from "react";
import './Fluffs/assets/css/demos/group.css';
import FriendListRequestItem from "./FriendListRequestItem";


class FriendListRequest extends Component {
 
    onInputChange(event) {
        this.props['onNotifyKeywordChange'](event.target.value);
        console.log(event.target.value);
    }

    render() {
        return(   
         <div>
            <div className="group-req">
            <p><h4 className="group-req-title"><b>친구 요청</b></h4></p>
                <div className="group-search-area">   
                    <div className="group-input-field">
                        <input placeholder="Search" type="text" value={this.props.keyword} onChange={this.onInputChange.bind(this)}/>
                        <i className="fa fa-search"></i>  
                    </div>
                    
                </div>
            <section className="notifications">
                    <ul className="group-list">
                        { this.props.userinfo && this.props.userinfo
                            .filter((element) => element.nickname.indexOf(this.props.keyword) != -1 || element.name.indexOf(this.props.keyword) != -1 || element.id.indexOf(this.props.keyword) != -1)
                            .map( list => <FriendListRequestItem 
                                key={ list.id }
                                nickname={list.nickname}
                                name={list.name}
                                id={list.id}
                                img={list.image}
                                no={list.no}
                                callback={this.props.callback}
                        />) }
                    </ul>
           </section>
        </div>
        </div>
        );
    }
}


export default FriendListRequest;