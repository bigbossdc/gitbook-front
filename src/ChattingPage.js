import React, { Component, Fragment } from 'react';
import Header2 from './Header2';
import ChattingListItem from './ChattingListItem';
import ChattingRoom from './ChattingRoom';
//import { Link } from "react-router-dom";
import "./ChattingPage.css";
import ChatFriendJoinItem from "./ChatFriendJoinItem";
import SockJsClient from "react-stomp";

class ChattingPage extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      show: "none",
      userFriends: '',
      search:'',
      modalSearch: '',
      newChatName: '',
      inviteList: [],
      inviteList2:'',
      chatRoomList:[],
      checkItem:'',
      msgList:''
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onShowHandler() {
    this.setState({
      show: "block"
    })
  }
  onCloseHandler() {
    this.setState({
      modalSearch: '',
      newChatName: '',
      inviteList: [],
      show: "none"
    })
  }
  onCheckItm(list){
    
      fetch(`${global.API_URL}/gitbook/chatting/api/chatRoomInfo/${list.no}`, {
      method: 'get',
      headers: global.API_HEADERS,
    })
      .then(response => response.json())
      .then(json => {
        window.jQuery(document.getElementsByClassName("conversation-container")).scrollTop(document.body.scrollHeight);
        this.setState({
          inviteList2: json.data.inviteList,
          checkItem:list,
          msgList:json.data.msgList
        });
      })
      .catch(err => console.error(err));
      
     this.onSendChatting();
  }
  
  

  inviteListadd(list) {
    if (this.state.inviteList.length < 9) {
      this.setState({
        inviteList: this.state.inviteList.concat(list)
      })
    }
  }

  inviteListDelete(item) {
    this.setState({
      inviteList: this.state.inviteList.filter((list) => list != item)
    })
  }
  createChattingRoom() {
    const formData = new FormData();
    formData.append("newChatName", this.state.newChatName);
    let inviteUserNo = [];
    this.state.inviteList.map((list) => inviteUserNo = inviteUserNo.concat(list.no))
    formData.append("inviteList", inviteUserNo);

    fetch(`${global.API_URL}/gitbook/chatting/api/addchatRoom/${sessionStorage.getItem('authUserNo')}`, {
      method: 'post',
      headers: {},
      body: formData
    }).then( response => response.json())
      .then( json => {
          this.setState({
            chatRoomList:json.data
          });
      })
      .catch(err => console.error(err));
      // this.clientRef.sendMessage("/app/chatting/socketCreateCahtRoom",JSON.stringify(formData));
      this.onCloseHandler();

  }

  onSendChatting = () => {
   
		this.clientRef.sendMessage("/app/chatting/send",JSON.stringify());
	};
  onChageMsgList(msgList){
    this.setState({
      msgList:msgList
    })

  }
  render() {
 
    return (

      <Fragment>
     
      <SockJsClient
				url={`${global.API_URL}/gitbook/socket`}
				topics={[`/topics/chatting/resetChatRoom/${sessionStorage.getItem("authUserNo")}`]}
				onMessage={(msg) => {
         this.setState({
          chatRoomList:msg
         })

				}}
				ref={(client) => {
					this.clientRef = client;
				}}
			></SockJsClient>

      <div className="ChattingPage" style={{height:"100vh"}}>
        {/* <Header2 name="Chatting"></Header2> */}
        <section className="profile-two" style={{ paddingTop: "100px", height:"100%", overflow: "hidden" }}>

          <div className="container" >
            <div className="row">
              <div className="messages-box">
                <div className="row">
                  <div className="col-lg-4 col-md-12 no-pdd">
                    <div className="messages-container">
                      <div className="message-header">
                        <div className="message-title">
                          <h4 style={{ display: "inline-block" }}>Chatting List</h4>
                          <i className="fa fa-plus a" id="addChatListButton" style={{ float: "right", margin: "5px", marginRight: "-10px" }}
                            onClick={this.onShowHandler.bind(this)}
                          />
                        </div>
                        <div className="search-area">
                          <div className="input-field">
                            <input placeholder="Search" 
                                   name="search" 
                                   value={this.state.search} 
                                   type="text" 
                                   onChange={this.handleChange.bind(this)}
                                   />
                            <i className="fa fa-search"></i>
                          </div>
                        </div>
                      </div>
                      <div className="messages-list" >
                        <ul >
                          { this.state.chatRoomList && this.state.chatRoomList
                            .filter((element) =>
                            element.title.indexOf(this.state.search) != -1)
                          .map((list)=> 
                          <ChattingListItem 
                              key={list.no}
                              list={list}
                              check={this.state.checkItem}
                              onCheckItm={{
                                check:this.onCheckItm.bind(this)
                              }}
                          />)
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
                    <ChattingRoom
                      key={this.state.checkItem.no}
                      chatInfo={this.state.checkItem}
                      inviteList={this.state.inviteList2}
                      msgList={this.state.msgList}
                      change={{
                        change:this.onChageMsgList.bind(this)
                      }}
                    />
                  </div>
                </div>
              </div>

            </div>

            <div>




              <div>

                <div className="modal" style={{ display: this.state.show, marginTop: "200px" }}>
                  <div className="modal-content" style={{ margin: "-4% auto", height: "80%", width: "35%", minWidth: "500px", minHeight: "700px" }}>
                    <div className="modal-header" style={{
                      backgroundColor: "#0FC19E",
                      height: "70px"
                    }}>
                      <span className="close" style={{ margin: "10px" }} onClick={this.onCloseHandler.bind(this)}>&times;</span>
                      <h3 style={{ wordBreak: "break-all" }}>New Chat!</h3>
                    </div>

                    <div className="modal-footer">
                      <br></br>
                      <h4 className="chatName" >채팅방 제목</h4><br /><br />
                      <input
                        maxLength="12"
                        className="chatNameInput"
                        name="newChatName"
                        value={this.state.newChatName}
                        onChange={this.handleChange.bind(this)}
                        style={{ float: "left", color: "black", display: "block" }} />
                      <br /><br /><br />
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
                            .map(list => <ChatFriendJoinItem
                              key={list.id}
                              nickname={list.nickname}
                              name={list.name}
                              id={list.id}
                              no={list.no}
                              img={list.image}
                              list={list}
                              callback={this.props.callback}
                              inviteList={this.state.inviteList}
                              friendListfuntion={{
                                add: this.inviteListadd.bind(this),
                                delete: this.inviteListDelete.bind(this)
                              }}
                            />)}
                        </ul>
                        <div className="friendList" >
                          <h4 style={{ color: "black", float: "bottom" }}>{this.state.inviteList.length}/9</h4>
                          {this.state.inviteList && this.state.inviteList.map((list) =>
                            <p key={list.no}
                              id={list.nickname}
                              style={{ display: "block" }}
                              className="tagword"
                              onClick={this.inviteListDelete.bind(this, list)}
                            >{list.nickname}</p>
                          )}


                        </div>

                      </div>
                      {
                        (this.state.newChatName.trim() != '' && (this.state.inviteList.length >= 1)) ?
                          <button onClick={this.createChattingRoom.bind(this)} className="chatButton" >생성</button> : ''
                      }
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>{/** profile-twd 종료 */}

      </div>
      </Fragment>
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
          userFriends: json.data
        });
      })
      .catch(err => console.error(err));
    

        fetch(`${global.API_URL}/gitbook/chatting/api/chatRoomList/${sessionStorage.getItem('authUserNo')}`, {
        method: 'get',
        headers: global.API_HEADERS,
      })
        .then(response => response.json())
        .then(json => {
          this.setState({
            chatRoomList: json.data
          });
        })
        .catch(err => console.error(err));
  }
  

}
export default ChattingPage;
