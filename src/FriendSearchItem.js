import React, { Component } from "react";

class FriendSearchItem extends Component {
  render() {
    return (
      <div className="FriendSearchItem">
        <div className="followers-body" style={{ margin: "10px 0px" }}>
          <img
            className="img-responsive img-circle"
            src="/gitbook/assets/img/users/1.jpg"
            style={{
              width: "70px",
              height: "70px",
              margin: " -20px 10px 0 20px",
            }}
          />
          <div className="name-box">
            <h4 style={{ fontSize: "1.2em" }}>
              <a href="/" style={{ color: "#88898A" }}>
                유남길apple
              </a>
            </h4>
            <span>유남길</span>
            <span>(skaska5@naver.com)</span>
            <div className="followers-base"></div>
          </div>
          <span style={{ marginTop: "10px" }}>
            <a href="" className="kafe-btn kafe-btn-mint-small">
              {" "}
              Follow
            </a>
          </span>
        </div>
        <hr></hr>
        <br></br>
      </div>
    );
  }
}

export default FriendSearchItem;
