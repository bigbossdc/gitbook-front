import React, {Component} from 'react';
import MyTimeLinePage from './MyTimeLinePage';
import RepositoryWritePage from './RepositoryWritePage';
import RepositoryPage from './RepositoryPage';
import RepositoryListPage from './RepositoryListPage';
import FriendSearchList from './FriendSearchList';
import UploadPage from './UploadPage';

class App extends Component {
  render() {
    
    return (
      <div className="App" >
      



      <UploadPage/>
      <FriendSearchList/>
      <RepositoryPage/>
      <RepositoryWritePage/>
      <RepositoryListPage/>
      
      
      
      </div>
    );
  }

}

export default App;
