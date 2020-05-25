import React, { Component } from "react";
import {Link} from "react-router-dom";
import Calendar from './Calendar';

const API_URL = 'http://localhost:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}

class Navigation extends Component {
      constructor(props) {
        super(props);
        this.state = {
            userData: {},
            authUser:""
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
      return {
        ...prevState,
        userData: nextProps.userinfo
      }
    }

    render() {
 
        return(
            <div className="col-lg-3">
            <aside id="leftsidebar" className="sidebar">		  
             <ul className="list">
              <li>
                <div className="user-info">
                  <div className="image">
                    <a href="photo_profile_two.html">
                    <img src={this.state.userData.image} className="img-responsive img-circle" alt="User"></img>
                    <span className="online-status online"></span>
                    </a>
                  </div>
                <div className="detail">
                 <h4 style={{fontFamily: " 'Varela Round', sans-serif"}}>
                    <strong>
                    { this.state.userData.nickname}
                    </strong></h4>
                    <small  style={{fontFamily: " 'Varela Round', sans-serif"}}>{this.state.userData.name}</small>  
                    <small>({this.state.userData.id})</small> 
                    <hr></hr>
                    <p style={{fontFamily: " 'Varela Round', sans-serif",margin:"10px"}}>{this.state.userData.profileContents} </p>                       
                </div>
                <div className="row">
                 <div className="col-12"></div>                                
                </div>
               </div>
              </li>
              <li>
               <Link to={`/gitbook/my/${this.state.userData.id}`}><small className="text-muted">my Timeline <em className="fa fa-angle-right pull-right"></em></small><br/></Link>
               <Link to={`/gitbook/my/${this.state.userData.id}/repository`}><small className="text-muted">my Repository <em className="fa fa-angle-right pull-right"></em></small><br/></Link>           
               {/*내 타임라인에서만 보이는 메뉴*/}
              {(this.state.authUser.id === this.state.userData.id) ?  <Link to={`/gitbook/my/${this.state.userData.id}/schedule`}><small className="text-muted">my Schedule <em className="fa fa-angle-right pull-right"></em></small><br/></Link> : ""}
              {(this.state.authUser.id === this.state.userData.id) ?  <Link to={`/gitbook/my/${this.state.userData.id}/commit`}><small className="text-muted">my Commit <em className="fa fa-angle-right pull-right"></em></small><br/></Link> : ""}

               <br></br>
              </li> 
             </ul>
            </aside>
            <div className="col-lg-12"> 
              <Calendar></Calendar>
            </div>				
           </div>
        );
    }

    componentDidMount() {
      fetch(`${API_URL}/gitbook/user/auth`, {
          method: 'get',
          headers: API_HEADERS
      })
      .then( response => response.json())
      .then( json => {
          console.log(json);
          this.setState({
              authUser: json.data
          });
      })
      .catch( err => console.error( err ));        
  }
}
export default Navigation;