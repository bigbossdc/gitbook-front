import React, {Component} from 'react';
import { Route } from 'react-router-dom';

import GroupRouter from './GroupRouter';
import MainRouter from './MainRouter';
import MyRouter from './MyRouter';
import MyGroupRouter from './MyGroupRouter';
import MyFriendRouter from './MyFriendRouter';


class App extends Component {

  render() {
    
    return (
      <div className="App" >
      
        <Route path="/user" component={MainRouter}></Route>
        <Route path="/my" component={MyRouter}></Route>
        <Route path="/mygroup" component={MyGroupRouter}></Route>
        <Route path="/myfriend" component={MyFriendRouter}></Route>
        <Route path="/group" component={GroupRouter}></Route> 

      </div>
    );
  }
}

export default App;
