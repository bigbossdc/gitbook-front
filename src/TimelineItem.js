import React, { Component, useState } from "react";
import CommentItem from './CommentItem'
import './TimelineItem.css'

class TimeLineItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    }
  }

  onTitleClick(event) {
    this.setState({
      showDetails: !this.state.showDetails
    });

  }

  render() {
    return (

      <div className="cardbox">

        <div className="cardbox-heading">

          {/** 드롭다운 메뉴 */}
          <div className="dropdown pull-right">
            <button class="btn btn-secondary btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
              <em class="fa fa-ellipsis-h"></em>
            </button>
            <div className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style={{ position: "absolute", transform: "translate3d(-136px, 28px, 0px)", top: "0px", left: "0px", willChange: "transform" }}>
              <a className="dropdown-item" href="#" style={{ fontFamily: " 'Varela Round', sans-serif" }}><strong>비공개 하기</strong></a>
              <a className="dropdown-item" href="#" style={{ fontFamily: " 'Varela Round', sans-serif" }}><strong>삭제 하기</strong></a>
              <a className="dropdown-item" href="#" style={{ fontFamily: " 'Varela Round', sans-serif" }}><strong>수정 하기</strong></a>
            </div>
          </div>

          <div className="media m-0">
            < div className="d-flex mr-3">
              <a href="#"><img className="img-responsive img-circle" src="/gitbook/assets/img/users/1.jpg" alt="User"></img></a>
            </div>
            <div className="media-body">
              <p className="m-0" style={{ fontFamily: " 'Varela Round', sans-serif", fontSize: "1.3em" }}><a className="text-muted" href="/">지존혜딘공듀</a></p>
              <small><span>2020-05-12</span></small>
            </div>
          </div>
        </div>

        <div className="cardbox-item">


          {/**<a href="#myModal" data-toggle="modal"> */}
          <div className="row">
            <div className="col-lg-3">
              <img className="img-responsive" src="/gitbook/assets/img/users/5.jpg" alt="MaterialImg"></img>
            </div>

            <div className="col-lg-3">
              <img className="img-responsive" src="/gitbook/assets/img/users/5.jpg" alt="MaterialImg"></img>
            </div>

            <div className="col-lg-3">
              <img className="img-responsive" src="/gitbook/assets/img/users/5.jpg" alt="MaterialImg"></img>
            </div>
            <div className="col-lg-3">
              <img className="img-responsive" src="/gitbook/assets/img/users/5.jpg" alt="MaterialImg"></img>
            </div>
            <div className="col-lg-3">
              <img className="img-responsive" src="/gitbook/assets/img/users/5.jpg" alt="MaterialImg"></img>
            </div>
            <div className="col-lg-3">
              <img className="img-responsive" src="/gitbook/assets/img/users/5.jpg" alt="MaterialImg"></img>
            </div>

          </div>
          <div>
            <p style={{ color: "black", fontFamily: " 'Varela Round', sans-serif", wordBreak: "break-all", fontSize: "1.2em" }}>
              동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd<br></br>
    무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세
    남산위에 저 소나무 철갑을 두른듯
</p>
          </div>
          {/**</a> */}
        </div>
        <div className="cardbox-base">
          <ul>
            <li><a className="dropdown-item" href="/"><h6 style={{ fontFamily: " 'Varela Round', sans-serif" }}>#java &nbsp;&nbsp;</h6></a></li>
            <li><a className="dropdown-item" href="/"><h6 style={{ fontFamily: " 'Varela Round', sans-serif" }}>#spring &nbsp;&nbsp;&nbsp;</h6></a></li>
            <li><a className="dropdown-item" href="/"><h6 style={{ fontFamily: " 'Varela Round', sans-serif" }}>#database &nbsp;&nbsp;&nbsp;</h6></a></li>
            <li><a className="dropdown-item" href="/"><h6 style={{ fontFamily: " 'Varela Round', sans-serif" }}>#너무 너무 어려워 &nbsp;&nbsp;&nbsp;</h6></a></li>
            <li><a className="dropdown-item" href="/"><h6 style={{ fontFamily: " 'Varela Round', sans-serif" }}>#react &nbsp;&nbsp;&nbsp;</h6></a></li>

          </ul>
        </div>
        <div className="cardbox-like">
          <ul>
            <li>
              <a href=""><i class="fa fa-heart"></i></a><span> 100</span>
            </li>
            <li>
              <a title="" className="com" onClick={this.onTitleClick.bind(this)}>
                <i className="fa fa-comments"  ></i></a> <span className="span-last">50 </span>
            </li>
          </ul>
        </div>

        {!this.state.showDetails ? null :

          <div>
            <ul className="img1-comment-list"  >
              <CommentItem />
              <CommentItem />
              <CommentItem />

            </ul>
            <div className="comment-body">
              <input className="form-control input-sm" type="text" placeholder="소중한 댓글을 적어주세요!"></input>
            </div>
          </div>

        }

      </div>

    );

  }
}


export default TimeLineItem;