import React, { Component, Fragment } from "react";

const iconList = {
   commit: "fa fa-comment",
   friend: "fa fa-user-plus",
   group: "fa fa-user-plus",
   heart: "fa fa-heart",
};

// props: [iconType, contents, time( -> timeDifference), link]
export default class AlarmItem extends Component {
   constructor() {
      super(...arguments);
      this.state = {};
   }

   onClickRead = (event) => {
      this.props.onAlarmRead(this.props.itemData.no);
   };

   render() {
      return (
         <Fragment>
            <a href="#" className="dropdown-item notify-item">
               <input type="button" className="markAsRead" value="확인" onClick={this.onClickRead.bind(this)} />
               <div className="notify-icon bg-success">
                  <i className={iconList[this.props.itemData.alarmType]}></i>
               </div>
               <p className="notify-details">
                  {this.props.itemData.alarmContents}
                  <small className="text-muted">{this.props.itemData.alarmDate}</small>
               </p>
            </a>

            <hr style={{ margin: "0px" }} />
         </Fragment>
      );
   }
}