import React, { Component } from 'react';
import FriendSearchItem from "./FriendSearchItem";

class FriendSearchList extends Component {
  render() {

    return (
            <div className="followers-list">
              <FriendSearchItem/>
              <FriendSearchItem/>
              <FriendSearchItem/>
              <FriendSearchItem/>
              <FriendSearchItem/>
              <FriendSearchItem/>
              <FriendSearchItem/>
              <FriendSearchItem/>
              <FriendSearchItem/>
              <FriendSearchItem/>
              <FriendSearchItem/>
            </div>
    );
  }
}

export default FriendSearchList;
