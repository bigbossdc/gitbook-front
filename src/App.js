import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import GroupRouter from './GroupRouter';
import MainRouter from './MainRouter';
import MyRouter from './MyRouter';
import MyGroupRouter from './MyGroupRouter';
import MyFriendRouter from './MyFriendRouter';
import Header from './Header';

const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}

class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      keyword:'',
      result:''
    }
  }
  // Header 친구 검색
  onSearchSubmit(keyword) {
    this.setState({
      keyword: keyword
    })
    this.searchResult(keyword);
  }

  searchResult(keyword) {
    fetch(`${API_URL}/gitbook/user/friend/search`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify({
        userid: sessionStorage.getItem("authUserId"),
        keyword: keyword
      })
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
          result : json.data
        });
        this.callbackReqFriend();
    })
    .catch( err => console.error( err ));   
  }

  render() {  
    return (
      <div className="App" >
        <Header handlerSubmit={{search: this.onSearchSubmit.bind(this)}}></Header>
        <Route path="/gitbook/main" render={() => <MainRouter result={this.state.result}/>}></Route>
        <Route path="/gitbook/my/:userid?" component={MyRouter}></Route>
        <Route path="/gitbook/mygroup" component={MyGroupRouter}></Route>
        <Route path="/gitbook/myfriend" component={MyFriendRouter}></Route>
        <Route path="/gitbook/group" component={GroupRouter}></Route> 
       
      </div>
    );
  }

  componentDidMount() {
    fetch(`${API_URL}/gitbook/user/auth`, {
        method: 'get',
        headers: API_HEADERS
    })
    .then( response => response.json())
    .then( json => {
      sessionStorage.setItem("authUserId",json.data.id)
      sessionStorage.setItem("authUserName",json.data.name)
      sessionStorage.setItem("authUserPaasword",json.data.password)
      sessionStorage.setItem("authUserPhone",json.data.phone)
      sessionStorage.setItem("authUserGender",json.data.gender)
      sessionStorage.setItem("authUserNo",json.data.no)
      sessionStorage.setItem("authUserProfile",json.data.ProfileNo)
      sessionStorage.setItem("authUserImage",json.data.image)
      sessionStorage.setItem("authUserJoinDate",json.data.joinDate)
      sessionStorage.setItem("authUserBirthDay",json.data.birthday)
      sessionStorage.setItem("authUserNickName",json.data.nickname)
      sessionStorage.setItem("authUserProfileContents",json.data.Contents)
    
        this.setState({
            authUser: json.data
        });
    })
    .catch( err => console.error( err ));  
    
   
}
}

export default App;
