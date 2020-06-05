import React, { Component } from 'react';
import FriendSearchItem from "./FriendSearchItem";

class FriendSearchList extends Component {

  render() {
    return (
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
    );
  }
}

export default FriendSearchList;
