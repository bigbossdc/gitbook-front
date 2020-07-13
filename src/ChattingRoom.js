import React, { Component } from 'react';
import "./ChattingPage.css";
import ChattingMsgItem from "./ChattingMsgItem";
import SockJsClient from "react-stomp";
import ChatFriendInviteItem from "./ChatFriendInviteItem";
import { motion } from "framer-motion";
import {Link} from "react-router-dom";
import './TimelineItem.css'
import './dialogBox.css';
import ChatGitListItem from './ChatGitListItem';


class ChattingRoom extends Component {
   constructor() {
      super(...arguments);
      this.state = {
         sendMsg: '',
         imageMsg:'',
         emoticonMsg:'',
         show: "none",
         show2:"none",
         imageShow:false,
         imageShow2:false,
         imageShow2View:'',
         userFriends:'',
         modalSearch:'',
         inviteList:'',
         changeInviteList:[],
         emoticonShow:"none",
         gitShow:"none",
         gitList:'',
         gitSelect:''

      }
   }
   onGitSelecthandler(item){
      this.setState({
         gitSelect:item
      })
   }

   handleChange(e) {
      this.setState({
         [e.target.name]: e.target.value
      })
   }
   inviteListadd(list) {
      if (this.state.inviteList.length +this.state.changeInviteList.length<10 ) {
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

         
         fetch(`${global.API_URL}/gitbook/chatting/api/sendMsg/${sessionStorage.getItem("authUserNo")}/${this.props.chatInfo.no}/text`, {
            method: 'post',
            headers: {},
            body: formData
         }).catch(err => console.error(err));

         this.setState({
            sendMsg: '',
         })

      


      }
   }
   handleSendGit(){
      const formData = new FormData();
      const url="/gitbook/my/"+sessionStorage.getItem("authUserId")+"/repository/view/"+this.state.gitSelect
      formData.append("contents",url );
      let inviteUserNo = [];
      this.props.inviteList.map((list) => inviteUserNo = inviteUserNo.concat(list.userNo))
      formData.append("inviteList", inviteUserNo);

      fetch(`${global.API_URL}/gitbook/chatting/api/sendMsg/${sessionStorage.getItem("authUserNo")}/${this.props.chatInfo.no}/git`, {
         method: 'post',
         headers: {},
         body: formData
      }).catch(err => console.error(err));

      this.setState({
         gitSelect:''
      })
   }

   handleSendImage(){
      if(this.state.imageMsg !== ''){
         const formData = new FormData();
         formData.append("contents", this.state.imageMsg);
         let inviteUserNo = [];
         this.props.inviteList.map((list) => inviteUserNo = inviteUserNo.concat(list.userNo))
         formData.append("inviteList", inviteUserNo);

         fetch(`${global.API_URL}/gitbook/chatting/api/sendMsg/${sessionStorage.getItem("authUserNo")}/${this.props.chatInfo.no}/image`, {
            method: 'post',
            headers: {},
            body: formData
         }).catch(err => console.error(err));
      }else if((this.state.imageMsg ==='')&&(this.state.emoticonMsg !=='')){
         const formData = new FormData();
         formData.append("contents", this.state.emoticonMsg);
         let inviteUserNo = [];
         this.props.inviteList.map((list) => inviteUserNo = inviteUserNo.concat(list.userNo))
         formData.append("inviteList", inviteUserNo);

         fetch(`${global.API_URL}/gitbook/chatting/api/sendMsg/${sessionStorage.getItem("authUserNo")}/${this.props.chatInfo.no}/emoticon`, {
            method: 'post',
            headers: {},
            body: formData
         }).catch(err => console.error(err));

      }


         this.resetImageBtn();

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

   resetAlarm(msg) {
      if(msg=='1'){
         fetch(`${global.API_URL}/gitbook/chatting/api/resetAlarm/${sessionStorage.getItem("authUserNo")}/${this.props.chatInfo.no}`, {
         method: 'post',
         headers: global.API_HEADERS
      
         })
         .catch(err => console.error(err));
      }   
   }
   onChageMsgList() {

      fetch(`${global.API_URL}/gitbook/chatting/api/resetAlarm2/${sessionStorage.getItem("authUserNo")}/${this.props.chatInfo.no}`, {
         method: 'post',
         headers: global.API_HEADERS
      
         })
         .then(response => response.json())
         .then(json => {
            this.props.change.change(json.data);
         
            var scrollHeigth= window.jQuery(document.getElementsByClassName("conversation-container")).prop('scrollHeight')
            window.jQuery(document.getElementsByClassName("conversation-container")).scrollTop(scrollHeigth);
         })
         .catch(err => console.error(err));

   
   }

   handleChangeFile = (e) => {
      const formData = new FormData();
      formData.append("file", e.target.files[0])
      fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserId")}/fileupload`, {
        method: 'post',
        headers: {
   
        },
        body: formData
      })
        .then(response => response.json())
        .then(json => {
         const check = json.data.split('.').pop()
         if (check === 'png' || check === "jpg" || check === "gif" || check === "jpeg" || check === "PNG") {
           this.setState({
            imageMsg: json.data,
            emoticonMsg:''
           });
         }
        })
        .catch(err => console.error(err));
      
     }

     resetImageBtn(){
      window.jQuery(document.getElementsByClassName("imagebutton")).val('');
         this.setState({
           imageMsg:'',
           emoticonMsg:''
        })
      
     }

     onClickEmoticonShow(){
        this.setState({
           emoticonShow: this.state.emoticonShow==='none'?'block':"none",
           gitShow:"none"
        })
     }
     onClickGitShow(){
      this.setState({
         gitShow: this.state.gitShow==='none'?'block':"none",
         emoticonShow:"none",
         gitSelect:''

      })
   }
     onClickEmoticon(e){
       
      this.setState({
         imageMsg:'',
         emoticonMsg:e.target.src,
         gitSelect:''
      })
     }

     onImageShow(){
        this.setState({
           imageShow:this.state.imageShow? false: true
        })
     }

     onImageShow2(list){
      this.setState({
         imageShow2:this.state.imageShow2? false: true,
         imageShow2View:list
      })
   }
   
   render() {
      console.log("나와랑"+this.state.gitList)
      const admin = this.props.inviteList && this.props.inviteList.filter((item) => item.grant === "admin")
      let inviteFilter='';
      inviteFilter = this.props.msgList && this.props.msgList.filter((list) =>
       list.contents ==(sessionStorage.getItem("authUserNickName")+"(가)이 초대 되었습니다"))
       if(inviteFilter !=''){
         inviteFilter= inviteFilter.reverse().pop();
       }
       var emoticonCount=[];
      for(var i=1; i<=10; i++){
         emoticonCount= emoticonCount.concat(i);
      }
      const transition = {
         duration: 1,
         ease: [0.43, 0.13, 0.23, 0.96]
        };
      return (      
         <div>
            {this.props.chatInfo && this.props.chatInfo ?
            <motion.div 
            initial={true}
            animate={(this.props.chatInfo && this.props.chatInfo)?{
               clipPath: `circle(${1000 * 2 + 200}px at 40px 40px)`,
               transition: {
                 type: "spring",
                 stiffness: 20,
                 restDelta: 2
               }
              }:{
               clipPath: "circle(30px at 40px 40px)",
               transition: {
                 delay: 0.5,
                 type: "spring",
                 stiffness: 400,
                 damping: 40
               }
              }
            }
            custom={1000}
            
               className="conversation-box">
                  <SockJsClient
               url={`${global.API_URL}/gitbook/socket`}
               topics={[`/topics/chatting/test/${this.props.chatInfo.no}`]}
               onMessage={(msg) => {
                  if(msg=='1'){
                  this.resetAlarm(msg);
                  }else{
                     this.onChageMsgList();
                  }
                  
                  
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
                                 onshow={{
                                    show:this.onImageShow2.bind(this)
                                 }}
                                 
                              />:''
                           ).reverse():
                           this.props.msgList && this.props.msgList
                           .filter((list)=> list.no >=inviteFilter.no)
                           .map((list,index)=>
                              (index<this.props.num)?
                              <ChattingMsgItem
                                 key={list.no}
                                 msg={list}
                                 onshow={{
                                    show:this.onImageShow2.bind(this)
                                 }}
                              />:''
                           ).reverse()
                        
                     }

                     { this.state.imageMsg !=''?
                     <div className="modal" style={{ display:"block",position:"absolute",height:"30%",top:"61%",padding:"10px"}}>
                         <span className="close" style={{ marginTop: "-5px",marginRight:"10px" }} onClick={this.resetImageBtn.bind(this)}>&times;</span>
                        <div style={{width:"200px",margin:"0px auto"}}>
                        <img
                           style={{marginTop:"15px",height:"160px",width:"auto"}}
                           onClick={this.onImageShow.bind(this)}
                           id="fileimage" src={this.state.imageMsg} alt="MaterialImg" />
                        </div>
                     </div>:''
                     }
                     { this.state.emoticonMsg !=''?
                     <div className="modal" style={{ display:"block",position:"absolute",height:"30%",top:"61%",padding:"10px"}}>
                         <span className="close" style={{ marginTop: "-5px",marginRight:"10px" }} onClick={this.resetImageBtn.bind(this)}>&times;</span>
                        <div style={{width:"200px",margin:"0px auto"}}>
                        
                        <img style={{width:"160px",height:"160px",marginTop:"20px"}}
                                   src={this.state.emoticonMsg}
                             />
                        </div>
                     </div>:''
                     }

                  </div>
                  <div className="type_messages">
                     <div className="input-field">
                        <input
                           disabled={ (this.state.imageMsg !== '')|| (this.state.emoticonMsg !=='')? true:false}
                           type="text"
                           className="kkk"
                           wrap="soft"
                           placeholder="채팅을 입력해주세요.."
                           name="sendMsg"
                           value={this.state.sendMsg}
                           onChange={this.handleChange.bind(this)}
                           onKeyPress={this.handleKeyPress.bind(this)}
                           ></input>
                        <ul className="imoji">
                        <li>
                           
                        <li  id="imagebutton" style={{marginRight:"5px",fontSize:"23px"}}><i onClick={this.onClickGitShow.bind(this)} className="fab fa-github fa-2x"></i></li>
                        <li  id="imagebutton" style={{marginRight:"20px"}}><i onClick={this.onClickEmoticonShow.bind(this)} className="fa fa-smile fa-2x"></i></li>      
                        <label className="iconlabel"><input className="imagebutton" type="file" accept="image/gif,image/jpeg,image/png,image/jpg" name={this.state.imageMsg} style={{ display: "none" }}  onChange={this.handleChangeFile}/><i id="imagebutton" className="fa fa-image fa-2x"></i></label>         
                        </li>
                           <li><a > <i
                           id={(this.state.imageMsg !== '')||(this.state.emoticonMsg !== '')? "sendImage":''} 
                           onClick={(this.state.imageMsg !== '')||(this.state.emoticonMsg !== '')? this.handleSendImage.bind(this):''}
                           style={{margin:"6px"}} className="fas fa-location-arrow"></i></a></li>
                        </ul>
                     </div>
                  </div>

               

               </motion.div> 
               
               
               
               
               
               :
               <div className="conversation-box" style={{ height: "100%", width: "100%" }}>
                  <div className="conversation-header" style={{ height: "725px", width: "100%" }}>
                     <h2 style={{ fontFamily: "'Jeju Gothic', sans-serif", marginTop: "200px", marginLeft: "200px" }}><strong>채팅창을 선택해주세요!</strong></h2>
                     <i className="far fa-comment-dots fa-10x" style={{ marginLeft: "270px" }}></i>
                  </div>
               </div>
            }

               {/* 이모티콘 */}
            <div className="emoticonbox" 
               style={{backgroundColor:"#FFF", 
                     height:"500px",
                     width:"300px",
                     marginLeft:"760px",
                     display:this.state.emoticonShow,
                  
                     position:"absolute",
                     zIndex:"1",
                     
                     } }>


            <div style={{width:"100%",height:"30px",backgroundColor:"#0FC19E",margin:"0px",marginTop:"0px",paddingTop:"4px",paddingBottom:"4px"}}>
                           <h4 style={{textAlign:"center",color:"#FFF",marginTop:"2px",fontFamily:"'Jeju Gothic', sans-serif"}}>Emoticon</h4>

                        </div>
                        <div className="emoticonbox2" style={{height :"100%",overflow:"auto"}}>
               { emoticonCount.map((list)=> 
               
               <div style={{display:"flex"}} >
                  <div className="col-lg-4"  
                     
                  style={{backgroundColor:"#FFF",height:"120px",flex:"1",padding:"5px"}}>
                     <img className="emoticonItem" 
                     onClick={this.onClickEmoticon.bind(this)} 
                     src={`/gitbook/assets/img/emoticon/emoticon(${(3*list)-2}).png`} 
                     />
                  </div>
                  <div className="col-lg-4"  
                  
                  style={{backgroundColor:"#FFF",height:"120px",flex:"1",padding:"5px"}}>
                     <img 
                  onClick={this.onClickEmoticon.bind(this)} 
                     className="emoticonItem" 
                     src={`/gitbook/assets/img/emoticon/emoticon(${(3*list)-1}).png`} 
                     />

                  </div>
                  <div className="col-lg-4" 
                  style={{backgroundColor:"#FFF",height:"120px",flex:"1",padding:"5px"}}>
                     <img 
                     onClick={this.onClickEmoticon.bind(this)} 
                     className="emoticonItem"  
                     src={`/gitbook/assets/img/emoticon/emoticon(${(3*list)}).png`} 
                     />
                  </div>
               </div>
               )
         
               }
               </div>
               
            </div>

            {/* git List */}

            <div className="emoticonbox" 
               style={{backgroundColor:"#FFF", 
                     height:"500px",
                     width:"300px",
                     marginLeft:"760px",
                     display:this.state.gitShow,
                     overflow:"auto",
                     position:"absolute",
                     zIndex:"1",
                     
                     } }>   
                        <div style={{width:"100%",height:"40px",backgroundColor:"#0FC19E",margin:"0px",marginTop:"-10px",paddingTop:"5px",paddingBottom:"4px"}}>
                           <h4 style={{textAlign:"center",color:"#FFF",fontFamily:"'Jeju Gothic', sans-serif"}}>My Repository</h4>

                        </div>

                        { this.state.gitList != '' ?<div>
                           <div className="emoticonbox2" style={{height:"370px",backgroundColor:"#fff",marginTop:"20px",overflow:"auto"}}>
                              {/* git List Itme */}

                        {this.state.gitList&& this.state.gitList.filter((list)=>list.visible=="public").map((list)=> 
                        <ChatGitListItem
                           gitItem={list}
                           gitSelect={this.state.gitSelect}
                           gitFuntion={{
                              select:this.onGitSelecthandler.bind(this)
                           }}
                        />
                        )                        
                              
                        }
                           </div>
                           <div style={{width:"100%",paddingBottom:"5px",paddingLeft:"50px",paddingTop:"5px"}}>
                                 <h5 
                                 style={{backgroundColor: (this.state.gitSelect !==''?'':'#B6B6B6'),
                                        cursor:  (this.state.gitSelect !==''? 'pointer':'auto')
                                       
                              }}
                              
                              
                                 onClick={this.state.gitSelect!==''?this.handleSendGit.bind(this):''}
                                 className="kafe-btn kafe-btn-mint">공유</h5>
                                 <h5 
                                 onClick={this.onClickGitShow.bind(this)}
                                 className="kafe-btn kafe-btn-mint btn-danger">취소</h5>
                                      </div>

                        </div>
                        :
                        
                        <div  className="emoticonbox2" style={{overflow:"auto",height:"80%",width:"100%"}}>
                           
                        <div  style={{ width:"100px",height:"200px",margin:"100px auto"}}>
                           <Link to={`/gitbook/my/${sessionStorage.getItem("authUserId")}/repository/write`}>
                                       <p className="timeline-file-icon"
                                  
                                   ><i className="fas fa-database fa-6x"></i><i className="fas fa-plus fa-2x"></i></p>
                                  </Link>
                              </div>
                              <p><h5 className="group-req-title" style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"1.5em", color:"#606665",marginTop:"-170px",marginLeft:"7px"}}><b>생성한 레포지토리가 없습니다</b></h5></p>
                        </div>
                        }



            </div>


            { this.state.imageShow?
        <div className="modal" style={{display:"block"}}>
          <div>
            <div className="col-lg-8 col-lg-offset-2" style={{ background: " rgba( 255, 255, 255, 0 )", marginTop: "1px" }}>  {/** 두번째 섹션 */}
              <motion.div
                initial={{ y: "50%", opacity: 0, transition }} 
                animate={ {
                  y: "0%",
                  opacity: 1,
                  transition
                }} exit={{ y: "50%", opacity: 0, transition }}
                className="UploadPage" style={{ height: "100%", width: "100%" }} >
                {/* <div className="box" style={{ boxShadow: "1px 1px 4px 2px #FFFFFF", padding: "10px", minWidth: "250px",Height:"600px",overflow:"auto" }}> */}

                <motion.img
                  initial={{ y: "50%", opacity: 0, transition }} 
                  animate={ {
                    y: "0%",
                    opacity: 1,
                    transition
                  }} 
                  exit={{ y: "50%", opacity: 0, transition }}
                  
              className="img-responsive" 
              style={{ maxHeight: "900px", maxWidth: "900px", marginTop: "100px" }} 
              onClick={this.onImageShow.bind(this)} 
              id="fileimage" src={this.state.imageMsg} alt="MaterialImg" />
                 
                {/* </div> */}
              </motion.div>
            </div>
          </div>{/** 두번째 섹션 */}


        </div>:''
      }


{ this.state.imageShow2?
        <div className="modal" style={{display:"block"}}>
          <div>
            <div className="col-lg-8 col-lg-offset-2" style={{ background: " rgba( 255, 255, 255, 0 )", marginTop: "1px" }}>  {/** 두번째 섹션 */}
              <motion.div
                initial={{ y: "50%", opacity: 0, transition }} 
                animate={ {
                  y: "0%",
                  opacity: 1,
                  transition
                }} exit={{ y: "50%", opacity: 0, transition }}
                className="UploadPage" style={{ height: "100%", width: "100%" }} >
                {/* <div className="box" style={{ boxShadow: "1px 1px 4px 2px #FFFFFF", padding: "10px", minWidth: "250px",Height:"600px",overflow:"auto" }}> */}

                <motion.img
                  initial={{ y: "50%", opacity: 0, transition }} 
                  animate={ {
                    y: "0%",
                    opacity: 1,
                    transition
                  }} 
                  exit={{ y: "50%", opacity: 0, transition }}
                  
              className="img-responsive" 
              style={{ maxHeight: "900px", maxWidth: "900px", marginTop: "100px" }} 
              onClick={this.onImageShow2.bind(this)} 
              id="fileimage" src={this.state.imageShow2View} alt="MaterialImg" />
                 
                {/* </div> */}
              </motion.div>
            </div>
          </div>{/** 두번째 섹션 */}


        </div>:''
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
                  <br></br>
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
         
         
         fetch(`${global.API_URL}/gitbook/Repository/${sessionStorage.getItem("authUserId")}/list`, {
            method: 'get',
            headers: global.API_HEADERS
           })
            .then(response => response.json())
            .then(json => {
              this.setState({
               gitList:json.data
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