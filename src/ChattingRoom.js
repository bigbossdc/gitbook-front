import React, { Component } from 'react';
import "./ChattingPage.css";
import ChattingMsgItem from "./ChattingMsgItem";


class ChattingRoom extends Component {
	constructor() {
		super(...arguments);
		this.state = {

		}
	}

	render() {
		return (
			<div>
				{this.props.chatInfo&&this.props.chatInfo?
				<div className="conversation-box">

					<div className="conversation-header">
						<div className="user-message-details">

							<div className="user-message-img">
								<img src="assets/img/users/6.jpg" className="img-responsive img-circle" alt="" />
							</div>
							<div className="user-message-info" style={{width:"90%"}} >
								
								<div style={{display:"inline-block",marginTop:"6px"}}>
									<h4 style={{ fontFamily: "'Jeju Gothic', sans-serif",width:"100%" }}>{this.props.chatInfo && this.props.chatInfo.title}</h4>
									<p style={{ fontFamily: "'Jeju Gothic', sans-serif" }}>참여인원&nbsp;5명</p>
								</div>

								<div className="dropdown pull-right" style={{float:"right"}}>
									<button className="btn btn-secondary btn-flat btn-flat-icon" id="k"style={{backgroundColor:"#FFFFFF"}} type="button" data-toggle="dropdown" aria-expanded="false">
										<em className="fas fa-cog " style={{backgroundColor:"#FFFFFF",color:"#797979"}}/>
									</button>
									<div  id="dropdown" className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style={{ position: "absolute", transform: "translate3d(-136px, 28px, 0px)", top: "0px", left: "0px", willChange: "transform" }}>
										<a id="dropdown-item" className="dropdown-item" > 초대 하기</a>
										<a id="dropdown-item" className="dropdown-item"  >채팅방 종료</a>	
										<a id="dropdown-item" className="dropdown-item"  >채팅방 나가기</a>
									</div>
								</div>

							</div>
						</div>
						<a href="#" title=""><i className="fa fa-ellipsis-v"></i></a>
					</div>

					<div className="conversation-container">

						<ChattingMsgItem />
						<ChattingMsgItem />
						<ChattingMsgItem />
						<ChattingMsgItem />
						<ChattingMsgItem />



					</div>
					<div className="type_messages">
						<div className="input-field">
							<textarea placeholder="채팅을 입력해주세요.."></textarea>
							<ul className="imoji">

								<li><a> <i className="fas fa-arrow-circle-right"></i></a></li>
							</ul>
						</div>
					</div>

				</div>:
				<div className="conversation-box" style={{height:"100%",width:"100%"}}>	
					<div className="conversation-header" style={{height:"725px",width:"100%"}}>
					<h2 style={{fontFamily:"'Jeju Gothic', sans-serif",marginTop:"200px",marginLeft:"200px"}}><strong>채팅창을 선택해주세요!</strong></h2>
					<i class="far fa-comment-dots fa-10x" style={{marginLeft:"270px"}}></i>
					</div>
				</div>
	}
			</div>
		);
	}

}
export default ChattingRoom;