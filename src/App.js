import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
// import MyTimeLinePage from './MyTimeLinePage';
import RepositoryWritePage from './RepositoryWritePage';
import RepositoryPage from './RepositoryPage';
import RepositoryListPage from './RepositoryListPage';
import FriendSearchList from './FriendSearchList';
// import UploadPage from './UploadPage';
// import Join from './Join';
// import FindId from './FindID';
// import Group from './Group';
// import Group2 from './Group2';
// import FindIDSuccess from './FindIDSuccess';
// import FindPassword from './FindPassword';
// import FindPasswordChange from './FindPasswordChange';
import MyProfilePage from './MyProfilePage';
// import MainLogin from './MainLogin';
import MyCalendarPage from './MyCalendarPage'
// import ErrorPage from './ErrorPage'
// import Friend from './Friend';

import FindRouter from './FindRouter';

import GroupRouter from './GroupRouter';
import MainRouter from './MainRouter';
import MyRouter from './MyRouter';
import MyGroupRouter from './MyGroupRouter';
import MyFriendRouter from './MyFriendRouter';
import ProfileSection from './ProfileSection';

class App extends Component {

  render() {
    
    return (
      <div className="App" >
      {/* <MainLogin></MainLogin>
      <Join></Join>
      <FindId></FindId>
      <FindIDSuccess></FindIDSuccess>
      <FindPassword></FindPassword>
      <FindPasswordChange></FindPasswordChange>
      <MyTimeLinePage></MyTimeLinePage>
      <RepositoryWritePage></RepositoryWritePage>
      <RepositoryPage></RepositoryPage>
      <RepositoryListPage></RepositoryListPage>
      <FriendSearchList></FriendSearchList>
      <Friend></Friend>
      <MyCalendarPage></MyCalendarPage>
      <MyProfilePage></MyProfilePage>
      <Group></Group>
      <Group2></Group2> */}
      
      {/* <MyCalendarPage></MyCalendarPage> */}
      <Route exact path={['/']} component={FindRouter}></Route>
      <Route path={['/find']} component={FindRouter}></Route>
      <Route path="/main" component={MainRouter}></Route>
      <Route path="/my" component={MyRouter}></Route>
      <Route path="/mygroup" component={MyGroupRouter}></Route>
      <Route path="/myfriend" component={MyFriendRouter}></Route>
      <Route path="/group" component={GroupRouter}></Route>

{/* <RepositoryWritePage></RepositoryWritePage>
      <RepositoryPage></RepositoryPage>
      <RepositoryListPage></RepositoryListPage> */}

 

      </div>
    );
  }
}

export default App;
