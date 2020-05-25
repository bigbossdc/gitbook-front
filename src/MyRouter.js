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


const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}


class MyRouter extends Component {
  constructor(){
    super(...arguments);
    this.state={
      repositorylist: ''
    }
  }
  render() {
    return (
      <div className="App" >
       <Header></Header>
       <Header2 name="MyTimeline"></Header2>
        <section className="profile-two" style={{paddingTop:"225px"}}>
          <div className="container-fluid">
            <div className="row">
              
                  <Navigation></Navigation>  {/** 네비게이션 */}
                
                  {/** 두번째 섹션 */}
                  <div className="col-lg-6" style={{background: "#fff",marginTop:"1px"}}>             
                  <Route  path="/gitbook/my" exact component={MyTimelinePage}/>

                  {/* <Route  path="/gitbook/my/repository" exact component={MyRepositoryListPage}/> */}
                 
                  <Route
                    exact  path='/gitbook/my/repository'
                      render={() => <MyRepositoryListPage repositorylist={this.state.repositorylist}/>}/>

                  <Route
                     path='/gitbook/my/repository/write'
                      render={() => <MyRepositoryWritePage data="123" repositorylist={this.state.repositorylist}/>}/>  

                  {/* <Route  path="/gitbook/my/repository/write" component={MyRepositoryWritePage}/> */}
                  <Route  path="/gitbook/my/repository/detail" component={MyRepositoryPage}/>
                  <Route  path="/gitbook/my/schedule" component={MainCalendar} onModal={(open)=> this.setState(open)} onDayClick={(day) => this.setState({ day })}/>
                  <Route  path="/gitbook/my/profile" component={ProfileAndAccount} />
                  <Route  path="/gitbook/my/account" component={ProfileAndAccount} />
                  
                  </div>
              
                  {/** 세번째 섹션 */}
                  <Navigation2></Navigation2>

            </div>{/** row 종료 */}
          </div>{/** container-fluid 종료 */}
        </section>{/** profile-twd 종료 */}
      </div>
    );
  }
  componentDidMount() {
    fetch(`${API_URL}/gitbook/Repository/test5/list`, {
        method: 'get',
        headers: API_HEADERS
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
          //repositorylist: JSON.stringify (json.data)
          repositorylist: json.data
           
        });
    })
    .catch( err => console.error( err ));  
    
     
}
}

export default MyRouter;
