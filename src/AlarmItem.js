import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

const iconList = {
   commit: "fa fa-comment",
   friend: "fa fa-user-plus",
   group: "fa fa-user-plus",
   heart: "fa fa-heart",
};

const linkList = {
   commit: `/gitbook/my/${sessionStorage.getItem("authUserId")}/repository`,
   friend: "/gitbook/myfriend",
   group: "/gitbook/mygroup",
   chatting: "/gitbook/chatting",
};

export default class AlarmItem extends Component {
   constructor() {
      super(...arguments);
      this.state = {
         gitAddr: "",
      };
   }

   onClickRead = (event) => {
      this.props.onAlarmRead(this.props.itemData.no);
   };

   componentWillMount() {
      this.setTimeDifference(this.props.itemData.alarmDate);
      if (this.props.itemData.alarmType === "commit") {
         let msg = this.props.itemData.alarmContents;
         this.setState({
            gitAddr: msg.slice(msg.indexOf("[") + 1, msg.indexOf(".git")),
         });
      }
   }

   setTimeDifference = (originalTime) => {
      let timeMills = new Date(originalTime.split(".")[0]);
      let diffMills = Date.now() - timeMills;

      let hour = Math.floor((diffMills % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // hour
      let minute = Math.floor((diffMills % (1000 * 60 * 60)) / (1000 * 60)); // minute
      let second = Math.floor((diffMills % (1000 * 60)) / 1000); // second

      let day = Math.floor(diffMills / (1000 * 60 * 60 * 24)); // day
      let month = Math.floor(day / 30); // month
      let year = Math.floor(day / 365); // year

      let arrNum = [year, month, day, hour, minute, second];
      let arrMsg = ["년 전", "개월 전", "일 전", "시간 전", "분 전", "초 전"];
      let message = null;
      for (let i = 0; i < arrNum.length; i++) {
         if (arrNum[i] !== 0) {
            message = arrNum[i] + arrMsg[i];
            break;
         }
         message = "방금 전";
      }

      this.setState({
         message: message,
      });
   };

   render() {
      return (
         <Fragment>
            <Link to={linkList[this.props.itemData.alarmType] + (this.props.itemData.alarmType === "commit" ? `/view/${this.state.gitAddr}` : "")} className="dropdown-item notify-item">
               <input type="button" className="markAsRead" value="확인" onClick={this.onClickRead.bind(this)} />
               <div className="notify-icon bg-success">
                  <i className={iconList[this.props.itemData.alarmType]}></i>
               </div>
               <p className="notify-details" style={{ whiteSpace: "normal", fontSize: "13px" }}>
                  {this.props.itemData.alarmContents.length < 90 ? this.props.itemData.alarmContents : `${this.props.itemData.alarmContents.slice(0, 90)}...`}
                  <small className="text-muted">{this.state.message}</small>
               </p>
            </Link>
            <hr style={{ margin: "0px" }} />
         </Fragment>
      );
   }
}