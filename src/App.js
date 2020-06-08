import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import GroupRouter from './GroupRouter';
import MainRouter from './MainRouter';
import MyRouter from './MyRouter';
import MyGroupRouter from './MyGroupRouter';
import MyFriendRouter from './MyFriendRouter';
import Header from './Header';
import UploadPage from './UploadPage';



class App extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      keyword:'',
      result:'',
      authUser:''    
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
    fetch(`${global.API_URL}/gitbook/user/friend/search`, {
      method: 'post',
      headers: global.API_HEADERS,
      body: JSON.stringify({
        userid: sessionStorage.getItem("authUserId"),
        userno: sessionStorage.getItem("authUserNo"),
        keyword: keyword
      })
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
          result : json.data,
          keyword: ''
        });
        this.callbackReqFriend();
    })
    .catch( err => console.error( err ));   
  }
  
  render() {  
  
    return (
      <div className="App"   >
      <Header handlerSubmit={{search: this.onSearchSubmit.bind(this)}}></Header>
     
        <Route path="/gitbook/main" render={() => <MainRouter result={this.state.result}/>}></Route>
        <Route path="/gitbook/my/:userid?"  component={MyRouter}></Route>
        <Route path="/gitbook/mygroup/:groupno?" component={MyGroupRouter}></Route>
        <Route path="/gitbook/myfriend" component={MyFriendRouter}></Route>
        <Route path="/gitbook/upload" render={() => <UploadPage result={this.state.result}/>}></Route> 
        <Route path="/gitbook/group/:groupno?/:userno?" component={GroupRouter}></Route> 


      </div>
    );
  }

  componentDidMount() {
    fetch(`${global.API_URL}/gitbook/user/auth`, {
        method: 'get',
        headers: global.API_HEADERS
    })
    .then( response => response.json())
    .then( json => {
      sessionStorage.setItem("authUserId",json.data.id)
      sessionStorage.setItem("authUserName",json.data.name)
      sessionStorage.setItem("authUserPassword",json.data.password)
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