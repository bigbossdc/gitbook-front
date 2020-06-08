import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header2 from "./Header2";
import FriendSearchList from "./FriendSearchList";
import MainTimelineList from "./MainTimelineList";
import UploadPage from "./UploadPage";

class MainRouter extends Component {
  constructor(){
    super(...arguments);
    this.state={
      timelineItemList:''       
    }
  }
  render() {
    console.log("mainrouter : " + this.props.keyword)
    return (
      <div className="App">
        <Header2></Header2>
        <section className="profile-two" style={{paddingTop:"225px"}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2">
                
                  {/** 두번째 섹션 */}

                 {/* <Route path="/gitbook/main" exact component={MainTimelineList }/> */}
                 {/* <Route
                      path='/gitbook/main'
                      render={() => <MainTimelineList/>}/> */}

                  <Route path="/gitbook/main" exact render={()=> <MainTimelineList  
                  timelineItemList={this.state.timelineItemList}
                  userid={this.props.userid}
                  />}></Route>
                  <Route path="/gitbook/main/friendsearch" render={() => <FriendSearchList result={this.props.result} keyword={this.props.keyword}/>}/>
                
                </div>
              </div>
            </div>
            {/** row 종료 */}
       
          {/** container-fluid 종료 */}
        </section>
        {/** profile-twd 종료 */}
      </div>
    );
  }

  componentDidMount() {
    fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserId")}/mainlist`, {
      method: 'get',
      headers:global.API_HEADERS
  })
  .then( response => response.json())
  .then( json => {
   
      this.setState({
        timelineItemList: json.data
      });
  })
  .catch( err => console.error( err )); 


  }


}


export default MainRouter;
