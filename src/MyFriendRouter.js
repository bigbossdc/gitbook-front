import React, {Component} from 'react';
import { Route } from "react-router-dom";
import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import FriendList from './FriendList';

const API_URL = 'http://localhost:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}
class MyFriendRouter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authUser: "",
      friendList: "",
    }
  }

  componentDidMount() {

    fetch(`${API_URL}/gitbook/user/auth`, {
        method: 'get',
        headers: API_HEADERS
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
          ...this.state,
            authUser: json.data
        });  
   
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
    .catch( err => console.error( err ));        
  }
  render() {

    return (
      <div className="App" >
       <Header></Header>
       <Header2 name="Friend"></Header2>
        <section className="profile-two" style={{paddingTop:"225px"}}>
          <div className="container-fluid">
            <div className="row">
            <Navigation userinfo={this.state.authUser}></Navigation> 
                  {/** 두번째 섹션 */}
                  <div className="col-lg-6" style={{background: "#f4f4f4",marginTop:"1px"}}>             
           
                  <Route  path="/gitbook/myfriend" exact component={FriendList}/>

                  </div>
              
                  {/** 세번째 섹션 */}
                  <Navigation2 friendinfo={this.state.friendList}></Navigation2>

            </div>{/** row 종료 */}
          </div>{/** container-fluid 종료 */}
        </section>{/** profile-twd 종료 */}
      </div>
    );
  }

}

export default MyFriendRouter;
