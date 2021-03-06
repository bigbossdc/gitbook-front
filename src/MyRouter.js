import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import MyTimelinePage from './MyTimelinePage';
import MainCalendar from './MainCalendar';
import MyRepositoryListPage from './MyRepositoryListPage';
import MyRepositoryPage from './MyRepositoryPage';
import MyRepositoryWritePage from './MyRepositoryWritePage';
import ProfileAndAccount from './ProfileAndAccount';


class MyRouter extends Component {
  constructor(props){
    super(props);
    this.state={  
      repositorylist: '',
      userid: this.props.match.params.userid,
      scheduleValue : 'todo',
      friendlist:'',
      userstatus:''
    }
  }


changeScheduleToDoValue(){
  this.setState({
    scheduleValue : 'todo'
  })
}

changeScheduleRepoValue(){
  this.setState({
   scheduleValue : 'repo'
  })
}



  render() {
 
    return (
      
      <div className="react-transition fade-in" style={{animationDuration:'0.3s'}}>
      {/* {(this.props.match.params.userid === sessionStorage.getItem("authUserId")) ? <Header2 name="MyTimeline"
        key="123"></Header2> : 
        <Header2
         />} */}

        <section className="profile-two" style={{paddingTop:"100px", minHeight:"100vh"}}>
        {this.state.userstatus === "0" ?          
          window.location="/gitbook/main"
        :
          <div className="container-fluid">
            <div className="row">
                  <Navigation                   
                  key={ this.props.match.params.userid}
                  id={ this.props.match.params.userid}
                  name={this.state.navicontents}
                 />  {/** 네비게이션 */} 
                  {/** 두번째 섹션 */}
                  <div className="col-lg-6" style={{backgroundColor:"#F4F4F4",marginTop:"1px"}}>             
                  <Route exact path="/gitbook/my/:userid" 
                    render={() => 
                        <MyTimelinePage
                            key={this.props.match.params.userid}
                            userid={this.props.match.params.userid}
                    /> }
                  />
                  <Route
                    exact  path='/gitbook/my/:userid/repository'
                      render={() => <MyRepositoryListPage 
                      id={this.props.match.params.userid}
                      key={this.props.match.params.userid+"2"}
          
                      />}/>
                  <Route
                     path='/gitbook/my/:userid/repository/write'
                      render={() => <MyRepositoryWritePage data="123"
                      key={this.props.match.params.userid}
                      userid={this.props.match.params.userid}
                      // repositorylist={this.state.repositorylist}
                      />}/>  

                  {/* <Route  path="/gitbook/my/repository/write" component={MyRepositoryWritePage}/> */}
                  <Route  path="/gitbook/my/:userid/repository/view/:repoName" component={MyRepositoryPage}/>

                  <Route  path="/gitbook/my/:userid/schedule" component={MainCalendar}/>         
                  <Route  path="/gitbook/my/:userid/profile" component={ProfileAndAccount}/>
                  <Route  path="/gitbook/my/:userid/account" component={ProfileAndAccount}/>
          

                  </div>
                  {/** 세번째 섹션 */}
                  <Navigation2 
                  key={this.props.match.params.userid+"1"}
                  userid={this.props.match.params.userid}
                  />

            </div>{/** row 종료 */}
          </div>
         }
        </section>

      </div>
      
    );
  }

    componentDidMount() {

      fetch(`${global.API_URL}/gitbook/user/${this.props.match.params.userid}/checkstatus`, {
          method: 'post',
          headers:global.API_HEADERS
      })
      .then( response => response.json())
      .then( json => {
          this.setState({
            userstatus: json.data
          });
      })
      .catch( err => console.error( err ));      
  }
}

export default MyRouter;
