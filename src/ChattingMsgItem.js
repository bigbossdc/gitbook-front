import React, { Component } from 'react';
import "./ChattingPage.css";


class ChattingMsgItem extends Component {
    constructor() {
      super(...arguments);
      this.state = {
        
      }
    }
   
    render() {
      return (
        <div>
       <div className="convo-box pull-right">
                          <div className="convo-area" style={{maxWidth:"832px"}}>
                            <div className="convo-message" >
                              <p className="chatContetns">이건 채팅입니다
							 
							  !!!!!44444444444444444444444444444444444444444!!!!!!!!!3333333333333333333333333333333333333!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!22222222222222222222222222222222!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
							   채팅이에요 채팅이랍니다 채팅같지용? 채팅맞아 이자식아 채팅채팅채팅채팅채팅 글이 너무 길어요 길었으면 좋겠슴돠</p>
                            </div>
                            <span>Sat, Aug 23, 1:08 PM</span>
                          </div>
                          <div class="convo-img">
                            <img  title="지존혜딘공듀" src="assets/img/users/2.jpg" alt="" class="img-responsive img-circle" />
							
                          </div>
                        </div>

                        <div className="convo-box convo-left">
                          <div className="convo-area convo-left" style={{maxWidth:"832px"}}>
                            <div className="convo-message">
                              <p>Cras ultricies ligula.</p>
                            </div>
                            <span> 5 minutes ago</span>
                          </div>
                          <div className="convo-img">
                            <img title="지존혜딘공듀" src="assets/img/users/6.jpg" alt="" className="img-responsive img-circle" />
                          </div>
                        </div>
        </div>
      );
    }
    
  }
  export default ChattingMsgItem;