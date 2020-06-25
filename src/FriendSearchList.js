import React, { Component } from 'react';
import FriendSearchItem from "./FriendSearchItem";
import "./Fluffs/assets/css/demos/friend.css";

class FriendSearchList extends Component {

  render() {
    return (
            (this.props.result == "" || !this.props.result) ? 
             <div className="friend-wrapper">
               <div className="friend-box">
               <i className="fas fa-cloud-showers-heavy fa-3x"></i>
                <h4 className="friend-contents">"{this.props.keyword}"에 대한 검색결과 없음</h4>
               </div>               
             </div>
            :
            <div className="followers-box full-width">
              <div className="followers-list">
                {this.props.result && this.props.result.map(list => <FriendSearchItem
                  name={list.name}
                  img={list.image}
                  id={list.id}
                  nickname={list.nickname}
                  status={list.status}
                  no={list.no}
                />)}
              </div>
            </div>
    );
  }
}

export default FriendSearchList;
