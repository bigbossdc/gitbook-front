import React, { Component } from "react";
import './CommentItem.css';
import { Link } from "react-router-dom";



class CommentItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {
     show1:"none",
     show2:"block",
     show4:'none'
    }
  }

  onClickShow(){
    this.setState({
      show1:(this.state.show1=="none")? "block":"none",
      show2:(this.state.show2=="none")? "block":"none"
    })
  }

  onDeleteComment(){
    this.props.deleteComment.delete(this.props.list.no)
  }

  onShowOutMember() {
    this.setState({
      show4: "block",
    });
  }

  onClose() {
    this.setState({
      show4:"none"
    });
  }
  
  render() {
    
    return (
      <div>
      <div className="CommentItem" style={{display:this.state.show2}}>
        <li >
          <div className="comment-img">
            <img src={this.props.list.userProfile} className="img-responsive img-circle" alt="Image" />
          </div>
          {this.props.list.userStatus==1 ? 
           <strong><Link to={`/gitbook/my/${this.props.list.userId}`}>{this.props.list.uesrNickname}</Link></strong> 
          : <a className="text-muted" onClick={this.onShowOutMember.bind(this)} style={{cursor:"pointer"}}>{this.props.list.uesrNickname}</a>
          }
         
           {this.props.list.userId == sessionStorage.getItem("authUserId")?
           <i id="deleteIcon"   onClick={this.onClickShow.bind(this)}className="fas fa-backspace fa-1.5x"/>:''
           }
          <p style={{paddingRight:"30px",fontFamily:"'Jeju Gothic', sans-serif"}}>{this.props.list.contents.split(" ")
          .map(word=><div style={{display:"inline"}}>{word}&nbsp;</div>)}</p> <span className="date sub-text" style={{ marginBottom: "5px" }}>{this.props.list.regDate}</span>
        </li>
        <hr ></hr>
      </div>
      
      <div className="CommentItem" style={{display:this.state.show1}}>
       
              <div style={{marginLeft:"auto",marginRight:"auto",width:"200px"}}>
                <h5 onClick={this.onDeleteComment.bind(this)} className="kafe-btn kafe-btn-mint">삭제</h5>
                <h5 onClick={this.onClickShow.bind(this)} className="kafe-btn kafe-btn-mint btn-danger">취소</h5>
               
              </div>
       
        <hr ></hr>
      </div>

      {/* 탈퇴회원 알림 다이얼로그  */}
<div>

<div className="modal" style={{ display: this.state.show4 }}>
  <div className="modal-content" style={{ margin: "15% auto", height: "130px", width: "300px" }}>
    <div className="modal-header" style={{
      backgroundColor: "#0FC19E"
    }}>
      <span className="close" onClick={this.onClose.bind(this)}>&times;</span>
      <h6 style={{ wordBreak: "break-all" }}>해당 사용자는 탈퇴한 회원입니다.</h6>
    </div>

    <div className="modal-footer">
     <button
        style={{ width: "70px", marginTop: "30px" }}
        type="submit"
        className="kafe-btn kafe-btn-mint-small" name="button-ok"
        onClick={this.onClose.bind(this)}
      >
        ok
    </button>

    </div>
  </div>
</div>
</div>
{/* 탈퇴회원 알림 다이얼로그 여기까지 */}

    </div>
    );
  }
}

export default CommentItem;