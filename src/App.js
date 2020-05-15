import React, {Component} from 'react';
import MyTimeLinePage from './MyTimeLinePage';
import RepositoryWritePage from './RepositoryWritePage';
import RepositoryPage from './RepositoryPage';
import RepositoryListPage from './RepositoryListPage';
import FriendSearchList from './FriendSearchList';
import UploadPage from './UploadPage';
import Join from './Join';
import FindId from './FindID';
import Group from './Group';
import Group2 from './Group2;

/////////////////////////////////////////////////////////////////////

import MyCalendarPage from './MyCalendarPage'
import ErrorPage from './ErrorPage'


class App extends Component {
  render() {
    
    return (
      <div className="App" >
      <MyTimeLinePage></MyTimeLinePage>
      <RepositoryWritePage></RepositoryWritePage>
      <RepositoryPage></RepositoryPage>
      <RepositoryListPage></RepositoryListPage>
      <FriendSearchList></FriendSearchList>
      <MyCalendarPage></MyCalendarPage>
      <Join></Join>
      <FindId></FindId>
      <Group></Group>
      <Group2></Group2>
      </div>
    );
  }
}

export default App;
