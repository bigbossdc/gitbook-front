import React, {Component} from 'react';
import MyTimeLinePage from './MyTimeLinePage';

import {BrowserRouter as Router, Route} from "react-router-dom";
import Join from './Join';
import FindID from './FindID';
import FindPassword from './FindPassword';
import FindPasswordAuth from './FindPasswordAuth';
import FindPasswordChange from './FindPasswordChange'

/////////////////////////////////////////////////////////////////////

import MyCalendarPage from './MyCalendarPage'
import ErrorPage from './ErrorPage'


class App extends Component {
  render() {
    
    return (
      <div className="App" >
         <MyCalendarPage/>
      </div>
    );
  }
}

export default App;
