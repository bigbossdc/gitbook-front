import React, {Component} from 'react';
import { Route } from "react-router-dom";
import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import MyTimelinePage from './MyTimelinePage';
import MainCalendar from './MainCalendar';
import MyRepositoryListPage from './MyRepositoryListPage';
import MyRepositoryPage from './MyRepositoryPage';
import MyRepositoryWritePage from './MyRepositoryWritePage';
import ProfileAndAccount from './ProfileAndAccount';
import FriendList from './FriendList';

const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}


class MyRouter extends Component {
  constructor(){
    super(...arguments);
    this.state={
      repositorylist: '',
     
      userid: this.props.match.params.userid
      
    }
  }
callDidmount(){
  this.componentDidMount();
}

callChangePath(id){
  this.setState({
    userid: id
   
  })
  
  console.log("함수확인"+this.state.userid)
}



  render() {
    
    return (
      <div className="App" >
       <Header></Header>
      {(this.state.userid === sessionStorage.getItem("authUserId")) ? <Header2 name="MyTimeline"
        key="123"></Header2> : 
        <Header2
           callmount={{
           mount: this.callDidmount.bind(this),
           change: this.callChangePath.bind(this)
          
        }}
         />}

        <section className="profile-two" style={{paddingTop:"225px"}}>
          <div className="container-fluid">
            <div className="row">

                  <Navigation                   
                  key={ this.state.userid}
                  id={ this.state.userid}
                  callmount={{
                    mount: this.callDidmount.bind(this)
                  

                  }}


                 />  {/** 네비게이션 */}
                  
                  {/** 두번째 섹션 */}
                  <div className="col-lg-6" style={{background: "#fff",marginTop:"1px"}}>             
                  <Route  path="/gitbook/my/:userid" exact component={MyTimelinePage}/>

                  {/* <Route  path="/gitbook/my/repository" exact component={MyRepositoryListPage}/> */}
                 
                  <Route
                    exact  path='/gitbook/my/:userid/repository'
                      render={() => <MyRepositoryListPage 
                      id={this.state.userid}
                      key={this.state.userid+"2"}
                      
                      repositorylist={this.state.repositorylist}/>}/>

                  <Route
                     path='/gitbook/my/:userid/repository/write'
                      render={() => <MyRepositoryWritePage data="123"
                      key={this.state.userid+"3"}
                      repositorylist={this.state.repositorylist}/>}/>  

                  {/* <Route  path="/gitbook/my/repository/write" component={MyRepositoryWritePage}/> */}
                  <Route  path="/gitbook/my/:userid/repository/detail" component={MyRepositoryPage}/>
                  <Route  path="/gitbook/my/:userid/schedule" component={MainCalendar} onModal={(open)=> this.setState(open)} onDayClick={(day) => this.setState({ day })}/>
                  <Route  path="/gitbook/my/:userid/profile" component={ProfileAndAccount} />
                  <Route  path="/gitbook/my/:userid/account" component={ProfileAndAccount} />
                  <Route  path="/gitbook/my/:userid/friend"  component={FriendList}/>
                  
                  </div>
              
                  {/** 세번째 섹션 */}
                  <Navigation2 
                  key={this.state.userid+"1"}
                  id={this.state.userid}
                  callChange={{
                    change: this.callChangePath.bind(this)
                  }}
                  />

            </div>{/** row 종료 */}
          </div>{/** container-fluid 종료 */}
        </section>{/** profile-twd 종료 */}
      </div>
    );
   
  }
  componentDidMount() {
  
    fetch(`${API_URL}/gitbook/Repository/${this.state.userid}/list`, {
        method: 'get',
        headers: API_HEADERS
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
          repositorylist: json.data
        });
    })
    .catch( err => console.error( err ));  
      
}
}

export default MyRouter;
