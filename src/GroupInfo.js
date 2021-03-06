import React, { Component } from "react";
import { Link } from "react-router-dom";
//import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/group.css';
import GroupHeaderImg from "./GroupHeaderImg";


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
    
        return(  
            <div className="react-transition fade-in" style={{animationDuration:'0.3s'}}>
            <GroupHeaderImg groupinfo={this.state.groupinfo} />
            <div className="group-req">
                <div className="group-master-area">  
                    <div className="row">              
                        <img className="img-fluid img-circle g-img" src={this.state.groupinfo.masterImage} alt=""></img>            
                        <span>
                            <h4>
                                {this.state.groupinfo.groupIntro}
                            </h4>
                        </span> 
                    </div>           
                </div>
                <hr/>
                <section className="notifications group-noti">
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
        fetch(`${global.API_URL}/gitbook/group/info`, {
            method: 'post',
            headers: global.API_HEADERS,
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