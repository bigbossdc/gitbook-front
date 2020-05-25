import React, { Component } from "react";
import { Route } from "react-router-dom";

import Header from "./Header";
import Header2 from "./Header2";
import Navigation from "./Navigation";
import Navigation2 from "./Navigation2";
import MyTimelinePage from "./MyTimelinePage";
import MainCalendar from "./MainCalendar";
import MyRepositoryListPage from "./MyRepositoryListPage";
import MyRepositoryPage from "./MyRepositoryPage";
import MyRepositoryWritePage from "./MyRepositoryWritePage";
import ProfileAndAccount from "./ProfileAndAccount";


const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}



class MyRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositorylist: '',
      friend: "",
      authUser: "",
      userFriends: "",
      friendList: "",
    };
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
    
    fetch(`${API_URL}/gitbook/user/auth`, {
      method: "get",
      headers: API_HEADERS,
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          ...this.state,
          authUser: json.data,
        });

        fetch(`${API_URL}/gitbook/user/friend`, {
          method: "post",
          headers: API_HEADERS,
          body: this.props.match.params.userid || this.state.authUser.id,
        })
          .then((response) => response.json())
          .then((json) => {
            this.setState({
              ...this.state,
              friend: json.data,
            });
          })
          .catch((err) => console.error(err));

          fetch(`${API_URL}/gitbook/user/friend`, {
              method: 'get',
              headers: API_HEADERS
          })
          .then( response => response.json())
          .then( json => {
              this.setState({
                ...this.state,
                userFriends: json.data
              });
          })
          .catch( err => console.error( err ));    

          fetch(`${API_URL}/gitbook/user/friend/list`, {
            method: "post",
            headers: API_HEADERS,
            body: this.props.match.params.userid || this.state.authUser.id,
          })
            .then((response) => response.json())
            .then((json) => {
              this.setState({
                ...this.state,
                friendList: json.data,
              });
            })
            .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
    }
    

  render() {

    let whoShowTarget = 'my';

    if (this.state.authUser && (typeof this.props.match.params.userid === 'undefined' || this.props.match.params.userid === this.state.authUser.id)) {
        // params 의 유저 아이디가 없거나, 내 아이디랑 같을 때
        whoShowTarget = 'my';
    } else if (this.state.authUser && this.state.friend && this.props.match.params.userid !== this.state.authUser.id) {
        whoShowTarget = 'friend';
    }



    return (
      <div className="App">
        <Header></Header>
 
        {this.state.authUser && (whoShowTarget === 'my' ? <Header2 name="MyTimeline"></Header2> : <Header2></Header2> )}
      
        <section className="profile-two" style={{ paddingTop: "225px" }}>
          <div className="container-fluid">
            <div className="row">

            {this.state.authUser && (whoShowTarget === 'my' ? <Navigation userinfo={this.state.authUser}></Navigation> : <Navigation userinfo={this.state.friend}></Navigation> )}

              {/** 두번째 섹션 */}
              <div
                className="col-lg-6"
                style={{ background: "#fff", marginTop: "1px" }}
              >
                <Route 
                  path="/gitbook/my/:userid?" 
                  exact
                  component={MyTimelinePage} 
                />
                <Route
                  path="/gitbook/my/:userid?/repository"
                  exact
                  render={() => <MyRepositoryListPage repositorylist={this.state.repositorylist}/>}
                />
                <Route
                  path="/gitbook/my/:userid?/repository/detail"
                  component={MyRepositoryPage}

                  
                />
                <Route
                  path="/gitbook/my/:userid?/repository/write"
                  render={() => <MyRepositoryWritePage data="123" repositorylist={this.state.repositorylist}/>}
                />
                <Route
                  path="/gitbook/my/:userid?/schedule"
                  component={MainCalendar}
                  onModal={(open) => this.setState(open)}
                  onDayClick={(day) => this.setState({ day })}
                />
                <Route
                  path="/gitbook/my/profile"
                  component={ProfileAndAccount}
                />
                <Route
                  path="/gitbook/my/account"
                  component={ProfileAndAccount}
                />
                
              </div>

              {/** 세번째 섹션 */}
              {this.state.authUser && (whoShowTarget === 'my' ? <Navigation2 friendinfo={this.state.userFriends}></Navigation2> : <Navigation2 friendinfo={this.state.friendList}></Navigation2> )}
            </div>
            {/** row 종료 */}
          </div>
          {/** container-fluid 종료 */}
        </section>
        {/** profile-twd 종료 */}
      </div>
    );
  }
}

export default MyRouter;
