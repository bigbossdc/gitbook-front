import React, { Component } from 'react';
import "./ChattingPage.css";
import ChattingMsgItem from "./ChattingMsgItem";
import SockJsClient from "react-stomp";
import ChatFriendInviteItem from "./ChatFriendInviteItem";

class ChattingRoom extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			sendMsg: '',
			show: "none",
			show2:"none",
			userFriends:'',
			modalSearch:'',
			inviteList:'',
			changeInviteList:[],
		}
	}
	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	inviteListadd(list) {
		if (this.state.inviteList.length +this.state.changeInviteList.length<=10 ) {
		  this.setState({
			changeInviteList: this.state.changeInviteList.concat(list)
		  })
		}
	  }
	
	inviteListDelete(item) {
		this.setState({
			changeInviteList: this.state.changeInviteList.filter((list) => list != item)
		})
	  }

	handleKeyPress(e) {
		if((e.key == 'Enter') && (this.state.sendMsg.trim() !== '')) {

			const formData = new FormData();
			formData.append("contents", this.state.sendMsg);
			let inviteUserNo = [];
			this.props.inviteList.map((list) => inviteUserNo = inviteUserNo.concat(list.userNo))
			formData.append("inviteList", inviteUserNo);

			
			fetch(`${global.API_URL}/gitbook/chatting/api/sendMsg/${sessionStorage.getItem("authUserNo")}/${this.props.chatInfo.no}`, {
				method: 'post',
				headers: {},
				body: formData
			}).catch(err => console.error(err));

			this.setState({
				sendMsg: '',
			})

		


		}
	}
	onChageMsgList(msg) {

		this.props.change.change(msg);
	}


	onChageinvite2List(inviteList2) {

		this.props.change.inviteListchange(inviteList2);
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
			}).catch(err => console.error(err));

		this.onResetChatRoom()
		this.onClose();
	}
	onClose() {
		this.setState({
			show: "none",
			show2:"none"

		});
	}
	onShow() {
		
		this.setState({
			show: "block",
		});
	}
	onShow2() {
		fetch(`${global.API_URL}/gitbook/chatting/api/getInviteList/${this.props.chatInfo.no}`, {
			method: 'post',
			headers: global.API_HEADERS,
		
		  })
			.then(response => response.json())
			.then(json => {
			  this.setState({
				inviteList: json.data
			  });
			  
			})
			.catch(err => console.error(err));

		this.setState({
			show2: "block",
		});
	}
	
	onClickinviteBtn(){
		const formData = new FormData();
		let inviteuserNickname=[];
		this.state.changeInviteList.map((list) => inviteuserNickname = inviteuserNickname.concat(list.nickname))
		formData.append("inviteNicknameList",inviteuserNickname);
		let inviteUserNo = [];
		this.state.changeInviteList.map((list) => inviteUserNo = inviteUserNo.concat(list.no))
		formData.append("inviteList", inviteUserNo);

		let inviteUserNo2 = [];
		this.props.inviteList.map((list) => inviteUserNo2 = inviteUserNo2.concat(list.userNo))
		formData.append("inviteList2", inviteUserNo2);
	
		fetch(`${global.API_URL}/gitbook/chatting/api/addinviteUser/${sessionStorage.getItem('authUserNo')}/${this.props.chatInfo.no}`, {
		  method: 'post',
		  headers: {},
		  body: formData
		})
		  .catch(err => console.error(err));
		 
		 this.setState({
			changeInviteList:[]
			 
		 })
		  this.onClose();
	}

	resetAlarm() {
		fetch(`${global.API_URL}/gitbook/chatting/api/resetAlarm/${sessionStorage.getItem("authUserNo")}/${this.props.chatInfo.no}`, {
		  method: 'post',
		  headers: global.API_HEADERS
	  
		})
	}

	render() {

		const admin = this.props.inviteList && this.props.inviteList.filter((item) => item.grant === "admin")
		let inviteFilter='';
		inviteFilter = this.props.msgList && this.props.msgList.filter((list) =>
		 list.contents ==(sessionStorage.getItem("authUserNickName")+"(가)이 초대 되었습니다"))
		 if(inviteFilter !=''){
			inviteFilter= inviteFilter.reverse().pop();
		 }
		
		return (
			<div>
				


				{this.props.chatInfo && this.props.chatInfo ?
					<div className="conversation-box">
						<SockJsClient
					url={`${global.API_URL}/gitbook/socket`}
					topics={[`/topics/chatting/test/${this.props.chatInfo.no}`]}
					onMessage={(msg) => {
						this.onChageMsgList(msg);
						this.resetAlarm();
						var scrollHeigth= window.jQuery(document.getElementsByClassName("conversation-container")).prop('scrollHeight')
						window.jQuery(document.getElementsByClassName("conversation-container")).scrollTop(scrollHeigth);
					}}
					ref={(client) => {
						this.clientRef = client;
					}}
				></SockJsClient>
				<SockJsClient
					url={`${global.API_URL}/gitbook/socket`}
					topics={[`/topics/chatting/changeInviteList/${this.props.chatInfo.no}`]}
					onMessage={(msg) => {
						this.onChageinvite2List(msg);
						var scrollHeigth= window.jQuery(document.getElementsByClassName("conversation-container")).prop('scrollHeight')
						window.jQuery(document.getElementsByClassName("conversation-container")).scrollTop(scrollHeigth);
					}}
					ref={(client) => {
						this.clientRef = client;
					}}
				></SockJsClient>
						<div className="conversation-header" style={{ height: "80px" }}>
							<div className="user-message-details">

								<div className="user-message-img">
									{admin != ''?
										admin.map(list => <img src={list.image} width="50" style={{ width: "40px !importent", height: "40px" }} className="img-responsive img-circle" alt="" />):
										<img src="/gitbook/assets/img/users/default.jpg" width="50" style={{ width: "40px !importent", height: "40px" }} className="img-responsive img-circle" alt="" />
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
											<a onClick={this.onShow2.bind(this)}  id="dropdown-item" className="dropdown-item"  > 초대 하기</a>
											<a onClick={this.onResetChatRoom.bind(this)} id="dropdown-item" className="dropdown-item"  >채팅방 종료</a>
											<a onClick={this.onShow.bind(this)} id="dropdown-item" className="dropdown-item"  >채팅방 나가기</a>
										</div>
									</div>

								</div>
							</div>
							<a href="#" title=""><i className="fa fa-ellipsis-v"></i></a>
						</div>

						<div className="conversation-container" id="conversation-container">

							{inviteFilter == ''?
								this.props.msgList && this.props.msgList.map((list,index)=>
										(index<this.props.num)?
										<ChattingMsgItem
											key={list.no}
											msg={list}
										/>:''
									).reverse():
									this.props.msgList && this.props.msgList
									.filter((list)=> list.no >=inviteFilter.no)
									.map((list,index)=>
										(index<this.props.num)?
										<ChattingMsgItem
											key={list.no}
											msg={list}
										/>:''
									).reverse()
								
							}



						</div>
						<div className="type_messages">
							<div className="input-field">
								<input
									
									type="text"
									className="kkk"
									wrap="soft"
									placeholder="채팅을 입력해주세요.."
									name="sendMsg"
									value={this.state.sendMsg}
									onChange={this.handleChange.bind(this)}
									onKeyPress={this.handleKeyPress.bind(this)}></input>
								<ul className="imoji">
							
									<li><a> <i style={{margin:"6px"}} className="fas fa-location-arrow"></i></a></li>
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
								<h6 style={{ wordBreak: "break-all",fontSize:"13px",fontFamily:"'Jeju Gothic', sans-serif" }}>현재 채팅방을 나가시겠습니까?</h6>
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

				<div className="modal" style={{ display: this.state.show2 }}>
                    <div className="modal-content" style={{ height: "70%", width: "35%", minWidth: "550px", minHeight: "600px" }}>
                      <div className="modal-header" style={{
                        backgroundColor: "#0FC19E",
                        height: "70px"
                      }}>
                        <span className="close" style={{ margin: "10px" }} onClick={this.onClose.bind(this)}>&times;</span>
                        <h3 style={{ wordBreak: "break-all" }}>친구 초대하기</h3>
                      </div>

                      <div className="modal-footer">
                        <br></br>
                      <br />
                        <h4 className="chatName" >친구 목록</h4>
                        <div className="group-search-area">

                          <div className="group-input-field">
                            <input
                              placeholder="Search"
                              type="text"
                              name="modalSearch"
                              value={this.state.modalSearch}
                              onChange={this.handleChange.bind(this)}
                              style={{ fontFamily: " 'Jeju Gothic', sans-serif" }} />
                            <i className="fa fa-search" style={{ display: "inline-block" }}></i>
                          </div>
                        </div>
                        <div className="row" style={{ width: "100%" }} >
                          <ul className="group-list" id="group-list" >
                            {this.state.userFriends && this.state.userFriends
                              .filter((element) =>
                                element.nickname.indexOf(this.state.modalSearch) != -1)
                              .map(list => <ChatFriendInviteItem
                                key={list.id}
								nickname={list.nickname}
                                name={list.name}
                                id={list.id}
                                no={list.no}
                                img={list.image}
                                list={list}
								inviteList={this.state.inviteList}
								changeInviteList={this.state.changeInviteList}
                                friendListfuntion={{
                                  add: this.inviteListadd.bind(this),
                                  delete: this.inviteListDelete.bind(this)
                                }}
                              />)}
                          </ul>
                          <div className="friendList" >
                            <h4 style={{ color: "black", float: "bottom" }}>{this.state.inviteList.length+this.state.changeInviteList.length}/10</h4>
                            
							{this.state.inviteList && this.state.inviteList.map((list) =>
                              <p key={list.no}
                                id={list.nickname}
                                style={{ display: "block" }}
                                className="tagword"
								
                              >{list.nickname}</p>
                            )}

							 {this.state.changeInviteList && this.state.changeInviteList.map((list) =>
                              <p key={list.no}
                                id={list.nickname}
                                style={{ display: "block" }}
                                className="tagword"
								onClick={this.inviteListDelete.bind(this, list)}
								
                              ><strong style={{float:"left",marginLeft:"3px",color:"#FFFFFF",fontSize:"1.3em"}}>+</strong>{list.nickname}</p>
                            )}


                          </div>

                        </div>
							{this.state.changeInviteList && this.state.changeInviteList.length>0 ?
                            <button onClick={this.onClickinviteBtn.bind(this)} className="chatButton" >초대하기</button>:''
								}
                      </div>
                    </div>
                  </div>




			</div>
		);
	}

	componentDidMount() {
		fetch(`${global.API_URL}/gitbook/user/friend/list`, {
			method: 'post',
			headers: global.API_HEADERS,
			body: JSON.stringify({
			  id: sessionStorage.getItem("authUserId"),
			  kind: "친구"
			})
		  })
			.then(response => response.json())
			.then(json => {
			  this.setState({
				userFriends: json.data,
				inviteList:json.data
			  });
			})
			.catch(err => console.error(err));
			
		
	

		if (this.props.chatInfo && this.props.chatInfo) {
			
			var scrollHeigth= window.jQuery(document.getElementsByClassName("conversation-container")).prop('scrollHeight')
			window.jQuery(document.getElementsByClassName("conversation-container")).scrollTop(scrollHeigth);

		
			
		}

	
	}





}
export default ChattingRoom;