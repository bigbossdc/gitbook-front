import React, { Component } from "react";
import { Route } from "react-router-dom";
import FriendSearchList from "./FriendSearchList";
import MainTimelineList from "./MainTimelineList";
import TagTimelineList from "./TagTimelineList";
import UploadPage from "./UploadPage";
import MemberOut from "./MemberOut";

class MainRouter extends Component {
  constructor(){
    super(...arguments);
    this.state={
      timelineItemList:''       
    }
  }

  render() {

    return (
      <div className="react-transition fade-in" style={{animationDuration:'0.3s'}}>
        {/* <Header2></Header2> */}
        <section className="profile-two" style={{paddingTop:"100px", minHeight:"100vh"}}>
          <div className="container-fluid">
            <div className="row" style={{marginLeft:"0px"}}>
              <div className="col-lg-8 col-lg-offset-2">

                <div className="followers-box full-width" style={{backgroundColor:"#F4F4F4",boxShadow:"none",border:"none"}}>

                  {/** 두번째 섹션 */}

                 {/* <Route path="/gitbook/main" exact component={MainTimelineList }/> */}
                 {/* <Route
                      path='/gitbook/main'
                      render={() => <MainTimelineList/>}/> */}
                  <Route path="/gitbook/main" exact render={()=> <MainTimelineList  />}></Route>
                  <Route path="/gitbook/main/tag/:tagid"  component={TagTimelineList}></Route>
                  <Route path="/gitbook/main/upload" exact render={() => <UploadPage />}/>
                  <Route path="/gitbook/main/friendsearch" exact render={() => <FriendSearchList result={this.props.result} keyword={this.props.keyword}/>}/>
                  <Route path="/gitbook/main/out" exact component={MemberOut}></Route>
                </div>
              </div>

            {/** row 종료 */}
            </div>
          {/** container-fluid 종료 */}
          </div>
        </section>
        {/** profile-twd 종료 */}
      </div>
    );
  }
  
 
  

}


export default MainRouter;