import React, { Component } from "react";
import SockJsClient from "react-stomp";

export default class SocketClient extends Component {
   constructor() {
      super(...arguments);
      this.state = {};
   }

   onSendChatting = (json) => {
      this.clientRef.sendMessage("/app/chatting/send", JSON.stringify(json));
   };

   onReceiveChatting = (str) => {
      this.props["receiveChattingHandler"](JSON.parse(str));
   };

   onSendAlarm = (json) => {
      this.clientRef.sendMessage("/app/alarm/send", JSON.stringify(json));
   };

   onReceiveAlarm = (str) => {
      this.props["receiveAlarmHandler"](JSON.parse(str));
   };

   render() {
      return (
         <SockJsClient
            url="http://127.0.0.1:8080/gitbook/socket"
            topics={[`/topics/alarm/${sessionStorage.getItem("authUserId")}`, `/topics/chatting/${sessionStorage.getItem("authUserId")}`]}
            onMessage={(msg) => {
               let type = msg.split(">>")[0];
               if (type === "alarm") {
                  this.onReceiveAlarm(msg.split(">>")[1]);
               } else if (type === "chatting") {
                  this.onReceiveChatting(msg.split(">>")[1]);
               }
            }}
            ref={(client) => {
               this.clientRef = client;
            }}
         ></SockJsClient>
      );
   }
}