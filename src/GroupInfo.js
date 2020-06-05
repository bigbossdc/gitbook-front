import React, { Component } from "react";
import { Link } from "react-router-dom";
//import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/group.css';
import GroupHeaderImg from "./GroupHeaderImg";

const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
  'Content-Type': 'application/json'
}
class GroupInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
              groupinfo: ''
            };
    }

    onClickAdd() {
        this.props.callback.add(this.props.groupno);
    }

    render() {
        console.log("groupoinfo22 : " + this.props.groupno)
        return(  
        <div> 
            <GroupHeaderImg groupinfo={this.state.groupinfo} />
            <div className="group-req">
                <div className="group-master-area">                
                    <img className="img-fluid img-circle abc" src={this.state.groupinfo.masterImage} alt=""></img>            
                    <span>
                        <h4>
                            {this.state.groupinfo.groupIntro}<br/>
                            {this.state.groupinfo.groupIntro}
                        </h4>
                    </span>            
                </div>
                <section className="notifications group-noti">
                    <hr/>
                    <div className="repo">
                            <i className="fas fa-folder-open fa-3x"></i>
                            <h5>Repositories</h5>
                            <h5>{this.state.groupinfo.repoNum}개</h5>
                    </div>
                    <div className="num">
                            <i className="fas fa-users fa-3x"></i>
                            <h5>그룹 인원수</h5>
                            <h5>{this.state.groupinfo.memberNum}명</h5>
                    </div>
                    <div className="date">
                            <i className="fas fa-flag fa-3x"></i>
                            <h5>그룹 생성일</h5>
                            <h5>{this.state.groupinfo.regDate}</h5>
                    </div>
                    <Link to="/gitbook/mygroup">
                        <button className="kafe-btn kafe-btn-mint btn-block group-btn" onClick={this.onClickAdd.bind(this)} type="submit" name="subm">수락</button>
                    </Link>
                </section>
            </div>
        </div>
        );
    }
    
    componentDidMount() {
        fetch(`${API_URL}/gitbook/group/info`, {
            method: 'post',
            headers: API_HEADERS,
            body: JSON.stringify({
                userno : sessionStorage.getItem("authUserNo"),
                groupno: this.props.groupno
              })
          })
          .then( response => response.json())
          .then( json => {
              this.setState({
              groupinfo: json.data    
              });
          })
          .catch( err => console.error( err ));  
    }
}


export default GroupInfo;