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
import Group2 from './Group2';
import RepositoryFileViewPage from './RepositoryFileViewPage';

/////////////////////////////////////////////////////////////////////

import MyCalendarPage from './MyCalendarPage'
import ErrorPage from './ErrorPage'


class App extends Component {
  render() {
    
    return (
      <div className="App" >
       <RepositoryPage></RepositoryPage>
      <RepositoryFileViewPage></RepositoryFileViewPage>
      </div>
    );
  }
}

export default App;
