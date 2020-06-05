import React, { Component } from "react";
import './CommentItem.css';




class CommentItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {
     show1:"none",
     show2:"block"
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
  
  render() {
    
    return (
      <div>
      <div className="CommentItem" style={{display:this.state.show2}}>
        <li >
          <div className="comment-img">
            <img src={this.props.list.userProfile} className="img-responsive img-circle" alt="Image" />
          </div>

          <strong><a href="/">{this.props.list.uesrNickname}</a></strong> 
           {this.props.list.userId == sessionStorage.getItem("authUserId")?
           <i id="deleteIcon"  onClick={this.onClickShow.bind(this)}className="fas fa-backspace fa-1.5x"/>:''
           }
          <p style={{paddingRight:"30px"}}>{this.props.list.contents}</p> <span className="date sub-text" style={{ marginBottom: "5px" }}>{this.props.list.regDate}</span>
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

    </div>
    );
  }
}

export default CommentItem;