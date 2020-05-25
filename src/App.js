import React, {Component} from 'react';
<<<<<<< HEAD
import MyTimeLinePage from './MyTimeLinePage';
import RepositoryWritePage from './RepositoryWritePage';
import RepositoryPage from './RepositoryPage';
import RepositoryListPage from './RepositoryListPage';
import FriendSearchList from './FriendSearchList';
import UploadPage from './UploadPage';
import Join from './Join';
import FindId from './FindID';
import Group from './Group';
import Group2 from './Group2';
import RepositoryFileViewPage from './RepositoryFileViewPage';
=======
import { Route } from 'react-router-dom';
>>>>>>> d06f7d56172efdaacef0487bbbc5f3eeed90e8f3

import GroupRouter from './GroupRouter';
import MainRouter from './MainRouter';
import MyRouter from './MyRouter';
import MyGroupRouter from './MyGroupRouter';
import MyFriendRouter from './MyFriendRouter';

const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}

class App extends Component {

  render() {
    
   
    return (
      <div className="App" >
<<<<<<< HEAD
       <RepositoryPage></RepositoryPage>
      <RepositoryFileViewPage></RepositoryFileViewPage>
=======
        <Route path="/gitbook/main" component={MainRouter}></Route>
        <Route path="/gitbook/my/:userid?" component={MyRouter}></Route>
        <Route path="/gitbook/mygroup" component={MyGroupRouter}></Route>
        <Route path="/gitbook/myfriend" component={MyFriendRouter}></Route>
        <Route path="/gitbook/group" component={GroupRouter}></Route>     
>>>>>>> d06f7d56172efdaacef0487bbbc5f3eeed90e8f3
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
