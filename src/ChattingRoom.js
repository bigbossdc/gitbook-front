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
				<div className="conversation-box">

					<div className="conversation-header">
						<div className="user-message-details">

							<div className="user-message-img">
								<img src="assets/img/users/6.jpg" className="img-responsive img-circle" alt="" />
							</div>
							<div className="user-message-info" >
								
								<div style={{display:"inline-block"}}>
									<h4 style={{ fontFamily: "'Jeju Gothic', sans-serif" }}>낭기리의 채팅방</h4>
									<p style={{ fontFamily: "'Jeju Gothic', sans-serif" }}>참여인원&nbsp;5명</p>
								</div>

								<div className="dropdown pull-right" style={{ position: "relative" ,right:"-500px"}}>
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

				</div>
			</div>
		);
	}

}
export default ChattingRoom;