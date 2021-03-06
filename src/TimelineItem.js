import React, { Component, useState } from "react";

import CommentItem from './CommentItem';
import './TimelineItem.css'
import './dialogBox.css';
import { Link } from "react-router-dom";
import ImageItem from "./ImageItem"
import UploadPageItem from "./UploadPageItem";
import { motion } from "framer-motion";

class TimeLineItem extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false,
      userInfo: '',
      fileList: '',
      tagList: '',
      commentList: '',
      likeList: '',
      comment: '',
      show:'none',
      show2:'none',
      show3:'none',
      show4:'none',
      deleteInput:'',
    }

  }
   
  onShow() {
    this.setState({
      show: "block",
    });
  }

  onShow2() {
    this.setState({
      show2: "block",
    });
  }

  onShowOutMember() {
    this.setState({
      show4: "block",
    });
  }

  onClose() {
    this.setState({
      show: "none",
      show2:"none",
      show3:"none",
      show4:"none",
      deleteInput: ''
    });
  }

  onTitleClick(event) {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onOkhandler() {
    fetch(`${global.API_URL}/gitbook/Repository/${sessionStorage.getItem("authUserId")}/checkPW`, {
      method: 'post',
      headers:global.API_HEADERS,
      body: this.state.deleteInput
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          check: json.data
        });
        (this.state.check) ?
       this.onTimelineDelete()  
       
       : this.setState({
            show3: "inline"
          })
      })
      .catch(err => console.error(err));
     
      
  }
   

  handleKeyPress(e) {
    if ((e.key === 'Enter') && (this.state.comment.trim() !=='')) {

      const newComment = {
        contents: this.state.comment,
        userNo: sessionStorage.getItem("authUserNo"),
        timelineNo: this.props.list.no,
        userId: sessionStorage.getItem("authUserId"),
        uesrNickname: sessionStorage.getItem("authUserNickName"),
        userProfile: sessionStorage.getItem("authUserImage")
      }
      fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserId")}/addcomment`, {
        method: 'post',
        headers: global.API_HEADERS,
        body: JSON.stringify(newComment)
      })
        .then(response => response.json())
        .then(json => {
          this.setState({
            commentList: json.data
          })

        })
        .catch(err => console.error(err));
      this.setState({
        comment: '',
      })
      window.jQuery(document.getElementsByClassName("img1-comment-list")).scrollTop(0);
    }
  }

  onCommentDeleteHandler(CommentNo) {
    fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserId")}/deletecomment/${CommentNo}/${this.props.list.no}`, {
      method: 'get',
      headers: global.API_HEADERS
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          commentList: json.data
        })

      })
      .catch(err => console.error(err));
  }

  onLikeAddHandler() {
    fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserId")}/addlike/${sessionStorage.getItem("authUserNo")}/${this.props.list.no}`, {
      method: 'get',
      headers: global.API_HEADERS
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          likeList: json.data
        });
      })
      .catch(err => console.error(err));
  }

  onLikeDeleteHandler() {
    fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserId")}/deletelike/${sessionStorage.getItem("authUserNo")}/${this.props.list.no}`, {
      method: 'get',
      headers: global.API_HEADERS
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          likeList: json.data
        });
      })
      .catch(err => console.error(err));
  }

  onTimelineDelete(){
    fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserId")}/deleteTimeline/${this.props.list.no}`, {
      method: 'post',
      headers: global.API_HEADERS
    })
    .catch(err => console.error(err));
    window.location=window.location.pathname;
  }
  render() {


    let cardboxType;
    this.props.list.type && this.props.list.type === 'public' ? cardboxType = 'publicCardbox' : cardboxType = 'commitCardbox';
    return (
      <div className="cardbox" id={cardboxType}>

      <div className={cardboxType}>
        <div className="cardbox-heading" >
          {/** 드롭다운 메뉴 */}
          {this.state.userInfo && (this.state.userInfo.id == sessionStorage.getItem("authUserId") ?
            <div className="dropdown pull-right">
              <button className="btn btn-secondary btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false" style={{outline:"none"}}>
                <em className="fa fa-ellipsis-h"></em>
              </button>
              <div className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style={{ position: "absolute", transform: "translate3d(-136px, 28px, 0px)", top: "0px", left: "0px", willChange: "transform" }}>
                <a className="dropdown-item" onClick={this.onShow2.bind(this)}  href="#" ><strong style={{ fontFamily: " 'Nanum Gothic', sans-serif" }}>삭제 하기</strong></a>

                {this.props.list.type && (this.props.list.type === 'public') ?
                <a onClick ={this.onShow.bind(this)} className="dropdown-item"  style={{cursor:"pointer" }}><strong style={{ fontFamily: " 'Nanum Gothic', sans-serif" }}>수정 하기</strong></a>
                : ''}

              </div>
            </div> : ''
          )
          }
          <div className="media m-0">
            < div className="d-flex mr-3">
              <Link to={`/gitbook/my/${this.state.userInfo.id}`}><img className="img-responsive img-circle" src={this.state.userInfo.image} alt="User"></img></Link>
            </div>
            <div className="media-body">
              <p className="m-0" style={{ fontFamily: " 'Nanum Gothic', sans-serif", fontSize: "1.3em" }}>
                {(this.state.userInfo.userStatus == 1) ? 
                <Link className="text-muted" to={`/gitbook/my/${this.state.userInfo.id}`}>{this.state.userInfo.nickname}</Link>
                :<a className="text-muted" onClick={this.onShowOutMember.bind(this)} style={{cursor:"pointer"}}>{this.state.userInfo.nickname}</a>
                }
                       
                {(this.props.list.visible === 'private') ?
                  <span style={{ color: "#E16A70", fontFamily:"'Nanum Gothic', sans-serif" }}> [비공개 글입니다]</span> : ''
                }
              </p>
              <small><span style={{fontFamily:"'Nanum Gothic', sans-serif"}}>{this.props.list.regDate}</span></small>
            </div>
          </div>
        </div>
       
        <div className="cardbox-item" style={{ padding: "30px" }}>
          {/**<a href="#myModal" data-toggle="modal"> */}
          { this.props.list.type !== 'commit' ?
          <div className="row">
            {
              this.state.fileList && this.state.fileList
              .filter((element) => element.fileContents.split(".").pop() === "jpg" || 
                                   element.fileContents.split(".").pop() === "gif" || 
                                   element.fileContents.split(".").pop() === "jpeg" || 
                                   element.fileContents.split(".").pop() === "png" || 
                                   element.fileContents.split(".").pop() === "PNG")
              .map((list) => 
              <div>
                  <ImageItem
                  url={list.fileContents}/>
              </div>
              )
            }

            {
              this.state.fileList && this.state.fileList
              .filter((element) => element.fileContents.split(".").pop() === "mp4" ||
                                   element.fileContents.split(".").pop() === "mov" || 
                                   element.fileContents.split(".").pop() === "m4p" ||
                                   element.fileContents.split(".").pop() === "avi")
              .map((list) => 
              <>
              <video muted controls style={{width:"100%", height:"500px", position:"relative", marginBottom:"20px", marginLeft:"20px", borderStyle:"solid", borderWidth:"1px", borderColor:"#E3E3E3"}}>
                  <source src={list.fileContents} type="video/mp4"></source>
              </video> 
              </>
              )
            }

          </div>:''
         }
        { this.props.list.type !== 'commit' ?

          <div>
            <p style={{ color: "black", fontFamily: " 'Nanum Gothic', sans-serif", marginTop: "15px", wordBreak: "break-all", fontSize: "1.2em" }}>
              {
              this.props.list.contents.split(/\n/g).map((word)=>
              <div>
              {word.split(" ").map(nbsp=><div style={{display:"inline"}}>{nbsp }&nbsp;</div>)
              }<br></br>
              </div>
              )  
              }
            </p>
          </div>

                :  <div>
                <p style={{ color: "black", fontFamily: " 'Varela Round', sans-serif", marginTop: "15px", wordBreak: "break-all", fontSize: "1.2em"}}>
                  {
                  this.props.list.contents.split(/\n/g).map((word,index)=>
                  index==0 ?
                  <div>

                  
                    <Link style={{color:"black"}}
                       to={this.props.list.groupNo !== null ? `/gitbook/group/${this.props.list.groupNo}/${this.props.list.userNo}/${this.state.userInfo.id}/repository/view/${word.replace(".git", '').replace("[",'').replace("]",'')}`
                     :
                     `/gitbook/my/${this.state.userInfo.id}/repository/view/${word.replace(".git", '').replace("[",'').replace("]",'')}`}>
                    
                  <i className="fab fa-github" style={{fontSize:"1.5em"}}></i>
                    {word.split(" ").map(nbsp=><div style={{display:"inline",margin:"10px",fontSize:"1.3em"}}>{nbsp.replace("[",'').replace("]",'') }&nbsp;</div>)
                  }
          
                  </Link>
                  <br></br> <br></br>
      
                  </div>
                  
                  :   index==1? <div style={{height:"40px",display:"inline"}} >
              
              <i className="fas fa-edit" style={{fontSize:"1.2em"}}></i>
               
         
                 <div style={{display:"inline"}}>
                  {word.split(" ").map(nbsp=><div style={{display:"inline", marginLeft:"3px",fontSize:"1.3em"}}>
                    {nbsp }&nbsp;</div>)
                    
                }</div>
                
               
                <div style={{display:"inline",fontSize:"0.9em"}}>(를) 을 Commit 하셨습니다</div>
                </div>:''
                  )  
                  }
                </p>
              </div>
      }
        </div>
        <div className="cardbox-base" >
          <ul style={{ display: "inline-block", padding: "20px", width: "97%" }}>
            {this.state.tagList && this.state.tagList
              .map((list) =>
                <li style={{ float: "left" }}><a href={`/gitbook/main/tag/${list.tagContents}`}><h6 className="tagword" style={{ fontFamily: " 'Varela Round', sans-serif" }}>{list.tagContents}</h6></a></li>)
            }
          </ul>
        </div>
        <div className="cardbox-like">
          <ul >
            <li>
              <a>
                {this.state.likeList && (this.state.likeList.some((list) => list.userNo == sessionStorage.getItem("authUserNo")
                ) ?
                  <i id="likered" onClick={this.onLikeDeleteHandler.bind(this)} className="fa fa-heart fa-2x" /> :
                  <i id="likedblack" onClick={this.onLikeAddHandler.bind(this)} className="fa fa-heart fa-2x" />
                )}
              </a><span>{this.state.likeList && this.state.likeList.length}</span>
            </li>
            <li>
              <a title="" className="com" onClick={this.onTitleClick.bind(this)}>
                <i id="comment" className="fa fa-comments fa-2x"  ></i></a> <span className="span-last">{this.state.commentList && this.state.commentList.length} </span>
            </li>
          </ul>
        </div>
        {!this.state.showDetails ? null :

          <motion.div
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 }
          }}
          transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          
          
          >
            <motion.ul 
            
            
            className="img1-comment-list" id="uploadDescription" >

              {this.state.commentList && this.state.commentList.map((list) =>
                <CommentItem
                  key={list.no}
                  list={list}
                  deleteComment={{
                    delete: this.onCommentDeleteHandler.bind(this)
                  }}
                />)}
            </motion.ul>
            <motion.div 
            
            className="comment-body">
              <motion.input
                


                className="form-control input-sm"
                type="text"
                placeholder="소중한 댓글을 적어주세요!"
                name="comment"
                value={this.state.comment}
                onChange={this.handleChange.bind(this)}
                onKeyPress={this.handleKeyPress.bind(this)}
              />
            </motion.div>
          </motion.div>
        }

        
    {/* 여기부터 */}

    <div className="modal" style={{ display: this.state.show}}>
      <UploadPageItem 

        timelineInfo={this.props.list}
        marchid={this.props.marchid}
        filelist={this.state.fileList}
        taglist={this.state.tagList}
        close={{
          close:this.onClose.bind(this)
        }}
      />
     </div>
{/* 여기까지 */}

{/* 삭제 다이얼로그  */}
<div>

<div className="modal" style={{ display: this.state.show2 }}>
  <div className="modal-content" style={{ margin: "15% auto", height: "130px", width: "300px" }}>
    <div className="modal-header" style={{
      backgroundColor: "#0FC19E"
    }}>
      <span className="close" onClick={this.onClose.bind(this)}>&times;</span>
      <h6 style={{ wordBreak: "break-all" }}>현재 게시글을 삭제 하시겠습니까?</h6>
    </div>

    <div className="modal-footer">
      <h6 style={{ display: this.state.show3, color: "red", position: "absolute", marginLeft: "-130px" }}>비밀번호가 틀렸습니다</h6>

      <input style={{ float: "left", marginLeft: "10px", marginTop: "30px", color: "black" }} placeholder="password 입력"  value={this.state.deleteInput} type="password" name="deleteInput" onChange={this.handleChange.bind(this)}></input>
      <button
        style={{ width: "70px", marginTop: "30px" }}
        type="submit"
        className="kafe-btn kafe-btn-mint-small" name="button-ok"
        onClick={this.onOkhandler.bind(this)}
      >
        ok
    </button>

    </div>
  </div>

</div>
</div>
{/* 삭제 다이얼로그 여기까지 */}

      {/* 탈퇴회원 알림 다이얼로그  */}
      <div className="modal" style={{ display: this.state.show4 }}>
        <div className="modal-content" style={{ margin: "15% auto", height: "100px", width: "300px" }}>
          <div className="modal-header" style={{
            backgroundColor: "#0FC19E"
          }}>
            <span className="close" onClick={this.onClose.bind(this)}>&times;</span>
            <h6 style={{ wordBreak: "break-all",fontSize:"13px",fontFamily:"'Jeju Gothic', sans-serif" }}>해당 사용자는 탈퇴한 회원입니다.</h6>
          </div>
          <div className="modal-footer">

            <button
              style={{ width: "70px", margin: "10px auto" }}
              type="submit"
              className="kafe-btn kafe-btn-mint-small" name="button-ok"
              onClick={this.onClose.bind(this)}
            >
              ok
                </button>

          </div>
        </div>
      </div>
      {/* 탈퇴회원 알림 다이얼로그 여기까지 */}

    </div>
  </div>
    );
  }
  componentDidMount() {
    fetch(`${global.API_URL}/gitbook/timeline/${this.props.matchid}/info/${this.props.list.userNo}/${this.props.list.no}`, {
      method: 'get',
      headers: global.API_HEADERS
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          userInfo: json.data.userInfo,
          fileList: json.data.fileList,
          tagList: json.data.tagList,
          commentList: json.data.commentList,
          likeList: json.data.likeList
        });

      })
      .catch(err => console.error(err));
  }
}
export default TimeLineItem;