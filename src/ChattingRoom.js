import React, { Component } from 'react';
import "./ChattingPage.css";
import ChattingMsgItem from "./ChattingMsgItem";
import SockJsClient from "react-stomp";

class ChattingRoom extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			sendMsg: '',
			show: "none"
		}
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleKeyPress(e) {
		if ((e.key == 'Enter') && (this.state.sendMsg.trim() !== '')) {

			const formData = new FormData();
			formData.append("contents", this.state.sendMsg);
			let inviteUserNo = [];
			this.props.inviteList.map((list) => inviteUserNo = inviteUserNo.concat(list.userNo))
			formData.append("inviteList", inviteUserNo);
			fetch(`${global.API_URL}/gitbook/chatting/api/sendMsg/${sessionStorage.getItem("authUserNo")}/${this.props.chatInfo.no}`, {
				method: 'post',
				headers: {},
				body: formData
			})

			this.setState({
				sendMsg: '',
			})



		}
	}
	onChageMsgList(msg) {

		this.props.change.change(msg);
	}
	onResetChatRoom() {
		this.props.change.reset();
	}
	onDeleteChatRoom() {
			const formData = new FormData();
			formData.append("nickName", sessionStorage.getItem("authUserNickName"));
			let inviteUserNo = [];
			this.props.inviteList.map((list) => inviteUserNo = inviteUserNo.concat(list.userNo))
			formData.append("inviteList", inviteUserNo);
			
			fetch(`${global.API_URL}/gitbook/chatting/api/deleteChatRoom/${sessionStorage.getItem("authUserNo")}/${this.props.chatInfo.no}`, {
				method: 'post',
				headers: {},
				body: formData
			})


		this.onClose();
	}
	onClose() {
		this.setState({
			show: "none",

		});
	}
	onShow() {
		this.setState({
			show: "block",
		});
	}

	render() {

		const admin = this.props.inviteList && this.props.inviteList.filter((item) => item.grant === "admin")
		return (
			<div>
				<SockJsClient
					url={`${global.API_URL}/gitbook/socket`}
					topics={[`/topics/chatting/test/${this.props.chatInfo.no}`]}
					onMessage={(msg) => {
						this.onChageMsgList(msg);
						// document.getElementById("conversation-container").scrollTo(100000000000000,100000000000000);
					}}
					ref={(client) => {
						this.clientRef = client;
					}}
				></SockJsClient>


				{this.props.chatInfo && this.props.chatInfo ?
					<div className="conversation-box">
						<div className="conversation-header" style={{ height: "80px" }}>
							<div className="user-message-details">

								<div className="user-message-img">
									{admin.map(list => <img src={list.image} width="50" style={{ width: "40px !importent", height: "40px" }} className="img-responsive img-circle" alt="" />)
										// <img src={admin.image} className="img-responsive img-circle" alt="" />
									}
								</div>
								<div className="user-message-info" style={{ width: "90%" }} >

									<div style={{ display: "inline-block", marginTop: "6px" }}>
										<h4 style={{ fontFamily: "'Jeju Gothic', sans-serif", width: "100%" }}>{this.props.chatInfo && this.props.chatInfo.title}</h4>
										<p style={{ fontFamily: "'Jeju Gothic', sans-serif" }} key={this.props.inviteList} >참여인원&nbsp;{this.props.inviteList && this.props.inviteList.length}명</p>
									</div>

									<div className="dropdown pull-right" style={{ float: "right" }}>
										<button className="btn btn-secondary btn-flat btn-flat-icon" id="k" style={{ backgroundColor: "#FFFFFF" }} type="button" data-toggle="dropdown" aria-expanded="false">
											<em className="fas fa-cog " style={{ backgroundColor: "#FFFFFF", color: "#797979" }} />
										</button>
										<div id="dropdown" className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style={{ position: "absolute", transform: "translate3d(-136px, 28px, 0px)", top: "0px", left: "0px", willChange: "transform" }}>
											<a id="dropdown-item" className="dropdown-item" > 초대 하기</a>
											<a onClick={this.onResetChatRoom.bind(this)} id="dropdown-item" className="dropdown-item"  >채팅방 종료</a>
											<a onClick={this.onShow.bind(this)} id="dropdown-item" className="dropdown-item"  >채팅방 나가기</a>
										</div>
									</div>

								</div>
							</div>
							<a href="#" title=""><i className="fa fa-ellipsis-v"></i></a>
						</div>

						<div className="conversation-container" id="conversation-container">

							{this.props.msgList && this.props.msgList.map((list) =>
								<ChattingMsgItem
									key={list.no}
									msg={list}
								/>
							)
							}



						</div>
						<div className="type_messages">
							<div className="input-field">
								<textarea
									wrap="soft"
									placeholder="채팅을 입력해주세요.."
									name="sendMsg"
									value={this.state.sendMsg}
									onChange={this.handleChange.bind(this)}
									onKeyPress={this.handleKeyPress.bind(this)}
								/>
								<ul className="imoji">

									<li><a> <i className="fas fa-arrow-circle-right"></i></a></li>
								</ul>
							</div>
						</div>

					</div> :
					<div className="conversation-box" style={{ height: "100%", width: "100%" }}>
						<div className="conversation-header" style={{ height: "725px", width: "100%" }}>
							<h2 style={{ fontFamily: "'Jeju Gothic', sans-serif", marginTop: "200px", marginLeft: "200px" }}><strong>채팅창을 선택해주세요!</strong></h2>
							<i class="far fa-comment-dots fa-10x" style={{ marginLeft: "270px" }}></i>
						</div>
					</div>
				}

				{/* 삭제 다이얼로그  */}
				<div>

					<div className="modal" style={{ display: this.state.show }}>
						<div className="modal-content" style={{ margin: "15% auto", height: "100px", width: "300px" }}>
							<div className="modal-header" style={{
								backgroundColor: "#0FC19E"
							}}>
								<span className="close" onClick={this.onClose.bind(this)}>&times;</span>
								<h6 style={{ wordBreak: "break-all" }}>현재 채팅방을 나가시겠습니까?</h6>
							</div>
							<div className="modal-footer">

								<button
									style={{ width: "70px", margin: "10px auto" }}
									type="submit"
									className="kafe-btn kafe-btn-mint-small" name="button-ok"
									onClick={this.onDeleteChatRoom.bind(this)}
								>
									ok
   								 </button>

							</div>
						</div>
					</div>
				</div>



				{/* 삭제 다이얼로그 여기까지 */}






			</div>
		);
	}

	componentDidMount() {
		if (this.props.chatInfo && this.props.chatInfo) {
			// document.getElementById("conversation-container").scrollTo(100000,1000000);
		}
	}





}
export default ChattingRoom;