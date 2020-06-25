import React, {Component} from 'react';
import { Route } from "react-router-dom";
import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation';
import MyFriendNavigation2 from './MyFriendNavigation2';
import FriendList from './FriendList';



class MyFriendRouter extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      reqFriends: "",
      userFriends: "",
      friendNum: ""
    }
  }
  
  // 친구 요청 수락
  callbackAddFriend(friendNo){
    fetch(`${global.API_URL}/gitbook/user/friend/add`, {
        method: 'post',
        headers: global.API_HEADERS,
        body: JSON.stringify({
          userno: sessionStorage.getItem("authUserNo"), 
          friendno: friendNo,
          id: sessionStorage.getItem("authUserId"), // zozfd@daum.net : 17(friendId)
          kind: "친구"
        })
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
            userFriends : json.data,
            friendNum: Object(json.data).length
        });
        this.callbackReqFriend();
    })
    .catch( err => console.error( err ));   
  }

  // 친구 요청 거절 및 삭제
  callbackRejectFriend(friendNo){
    fetch(`${global.API_URL}/gitbook/user/friend/delete`, {
        method: 'post',
        headers: global.API_HEADERS,
        body: JSON.stringify({
          userno: sessionStorage.getItem("authUserNo"),
          friendno: friendNo,
          id: sessionStorage.getItem("authUserId"),
          kind: "친구"
        })
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
          userFriends : json.data,
          friendNum: Object(json.data).length
      });
      this.callbackReqFriend();

    })
    .catch( err => console.error( err ));        
  }

  // 수락 및 거절, 삭제 후 요청 리스트 다시 가져오기
  callbackReqFriend() {
    fetch(`${global.API_URL}/gitbook/user/friend/req`, {
        method: 'post',
        headers: global.API_HEADERS,
        body: JSON.stringify({
            no : sessionStorage.getItem("authUserNo"),
            kind: "요청"
        })
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
        reqFriends: json.data    
        });
    })
    .catch( err => console.error( err )); 
  }


  render() {
    return (
      <div className="react-transition fade-in" style={{animationDuration:'0.3s'}}>
       {/* <Header2 name="Friend"></Header2> */}
        <section className="profile-two" style={{paddingTop:"100px", minHeight:"100vh"}}>
          <div className="container-fluid">
            <div className="row">
            <Navigation id={ sessionStorage.getItem("authUserId")}></Navigation> 
            
                  {/** 두번째 섹션 */}
                  <div className="col-lg-6" style={{background: "#f4f4f4"}}>             
                  <Route path="/gitbook/myfriend" exact render={() => <FriendList 
                          callback={{add: this.callbackAddFriend.bind(this), 
                                     delete: this.callbackRejectFriend.bind(this)
                                    }} 
                          reqinfo={this.state.reqFriends} 
                          friendinfo={this.state.userFriends}
                          friendnum={this.state.friendNum}
                          />}
                  />
                  </div>
              
                  {/** 세번째 섹션 */}
                  <MyFriendNavigation2 userid={sessionStorage.getItem("authUserId")} friendlist={this.state.userFriends}></MyFriendNavigation2>

            </div>{/** row 종료 */}
          </div>{/** container-fluid 종료 */}
        </section>{/** profile-twd 종료 */}
      </div>
    );
  }

  componentDidMount() {    
    fetch(`${global.API_URL}/gitbook/user/friend/req`, {
        method: 'post',
        headers: global.API_HEADERS,
        body: JSON.stringify({
            no : sessionStorage.getItem("authUserNo"),
            kind: "요청"
        })
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
        reqFriends: json.data    
        });
    })
    .catch( err => console.error( err ));    

    fetch(`${global.API_URL}/gitbook/user/friend/list`, {
        method: 'post',
        headers: global.API_HEADERS,
        body: JSON.stringify({
            id : sessionStorage.getItem("authUserId"),
            kind: "친구"
        })
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
            userFriends: json.data,
            friendNum: Object(json.data).length
        });
    })
    .catch( err => console.error( err ));    
    
  }
}

export default MyFriendRouter;
