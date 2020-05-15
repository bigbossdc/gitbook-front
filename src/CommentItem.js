import React, { Component } from "react";



class CommentItem extends Component {
    render() {
        return(
            <div className="CommentItem">
           <li >
             <div className="comment-img">
              <img src="assets/img/users/17.jpeg" className="img-responsive img-circle" alt="Image"/>
             </div>
             
              <strong><a href="/">혜딘공듀혜딘공듀혜딘공듀</a></strong>
              <p>이건 댓글이야 댓글이란다 댓글이야이야이야아아아111111111111111111111111111111111111111</p> <span class="date sub-text" style={{marginBottom:"5px"}}>2020.05.12</span>
             
            
            </li>
            <hr ></hr>
          </div>
        );
    }
}

export default CommentItem;