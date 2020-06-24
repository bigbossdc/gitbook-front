import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Fluffs/assets/css/demos/button.css';


class FriendSearchItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      status: "팔로우"
    }
  }

  reqFollow() {
    console.log("friend request 확인" + this.props.no + ":" + sessionStorage.getItem("authUserNo")); //this.props.no = friendNo
    fetch(`${global.API_URL}/gitbook/friend/request`, {
      method: 'post',
      headers: global.API_HEADERS,
      body:JSON.stringify({
        userno: sessionStorage.getItem("authUserNo"),
        friendno: this.props.no,
        userNickName: sessionStorage.getItem("authUserNickName"),
        friendId : this.props.id,
      })
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          status: "요청중"
        });
      })
      .catch(err => console.error(err))
  }


  render() {
    return (
      <div className="FriendSearchItem">
        <div className="followers-body" style={{ margin: "10px 0px" }}>
          <img
            className="img-responsive img-circle"
            alt=""
            src={this.props.img}
            style={{
              width: "70px",
              height: "70px",
              margin: " -20px 10px 0 20px",
            }}
          />
          <div className="name-box">
            <h4 style={{ fontSize: "1.2em" }}>
              <Link to={`/gitbook/my/${this.props.id}`} style={{ color: "#88898A" }}>
                <text style={{fontFamily:"'Nanum Gothic', sans-serif"}}>{this.props.nickname}</text>
              </Link>
            </h4>
            <span style={{fontFamily:"'Nanum Gothic', sans-serif"}}>{this.props.name}</span>
            <span style={{fontFamily:"'Nanum Gothic', sans-serif"}}>({this.props.id})</span>
            <div className="followers-base"></div>
          </div>
          {this.props.status === '친구' ? 
            <span style={{ marginTop: "10px" }}>
            <a className="friend-btn friend-btn-mint-small">
              <text style={{fontFamily:"'Nanum Gothic', sans-serif"}}>친구</text>
            </a>
          </span> : this.props.status === '요청중' ? 
          <span style={{ marginTop: "10px" }}>
            <a className="friend-btn req-btn-mint-small">
              <text style={{fontFamily:"'Nanum Gothic', sans-serif"}}>요청중</text>
            </a>
          </span> :
          <span style={{ marginTop: "10px" }}>
            {this.state.status === "팔로우" ? 
              <a className="friend-btn follow-btn-mint-small" onClick={this.reqFollow.bind(this)}>
                <text style={{fontFamily:"'Nanum Gothic', sans-serif"}}>팔로우</text>
              </a>
              : <a className="friend-btn req-btn-mint-small">
                  <text style={{fontFamily:"'Nanum Gothic', sans-serif"}}>요청중</text>
                </a>
            }

          </span> 
          }

        </div>
        <hr></hr>
        <br></br>
      </div>
    );
  }
}

export default FriendSearchItem;
