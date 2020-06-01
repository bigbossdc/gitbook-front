import React, { Component } from "react";
import './Fluffs/assets/css/demos/button.css';

class FriendSearchItem extends Component {
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
              <a href="/" style={{ color: "#88898A" }}>
                {this.props.nickname}
              </a>
            </h4>
            <span>{this.props.name}</span>
            <span>({this.props.id})</span>
            <div className="followers-base"></div>
          </div>
          {this.props.status === '친구' ? 
            <span style={{ marginTop: "10px" }}>
            <a href="" className="friend-btn friend-btn-mint-small">
              메시지
            </a>
          </span> : this.props.status === '요청중' ?  
          <span style={{ marginTop: "10px" }}>
            <a onClick={this.onClickHandler.bind(this)} href="" className="req-btn req-btn-mint-small">
              {this.props.status}
            </a>
          </span> : 
          <span style={{ marginTop: "10px" }}>
            <a href="" className="friend-btn friend-btn-mint-small">
              {this.props.status}
            </a>
          </span> }



        </div>
        <hr></hr>
        <br></br>
      </div>
    );
  }
}

export default FriendSearchItem;
