import React, { Component } from 'react';
import Header from './Header';
import Header2 from './Header2';
import FriendSearchItem from "./FriendSearchItem";




class FriendSearchList extends Component {
  render() {

    return (
      <div className="ApFriendSearchListp" >
        <Header></Header>
        <Header2 name="Group"></Header2>
        <section className="profile-two">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="followers-box full-width">
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
                </div>
              </div>
            </div>
          </div>
        </section>{/** profile-twd 종료 */}
      </div>
    );
  }

}

export default FriendSearchList;
