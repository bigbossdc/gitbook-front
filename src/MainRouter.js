import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./Header";
import Header2 from "./Header2";
import FriendSearchList from "./FriendSearchList";
import MainTimelineList from "./MainTimelineList";
import axios from "axios";

class MainRouter extends Component {
  render() {
    return (
      <div className="App">
        <Header ></Header>
        <Header2></Header2>
        <section className="profile-two" style={{paddingTop:"225px"}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                <div className="followers-box full-width">
                  {/** 두번째 섹션 */}
                  <Route path="/gitbook/main" exact component={MainTimelineList }/>
                  <Route path="/gitbook/main/friendsearch" exact component={FriendSearchList}/>

                </div>
              </div>
            </div>
            {/** row 종료 */}
          </div>
          {/** container-fluid 종료 */}
        </section>
        {/** profile-twd 종료 */}
      </div>
    );
  }



  componentDidMount(){
    axios.get('/user/auth').then(
      res=> {
        
      }
    ) 
  }


}




export default MainRouter;
