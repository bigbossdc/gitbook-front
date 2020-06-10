import React, { Component } from 'react';
import "./ChattingPage.css";


class ChattingListItem extends Component {
    constructor() {
      super(...arguments);
      this.state = {
        
      }
    }
   
    render() {
      return (
        <div>
       
       <li className="active">
				<div className="user-message-details">
				 <div className="user-message-img">
				  <img src="assets/img/users/6.jpg" className="img-responsive img-circle" alt=""/>
				 
				 </div>
				 <div class="user-message-info">
				  <h4>Anthony McCartney</h4>
				  <p>Lorem ipsum dolor ...</p>
				  <span className="time-posted">1:55 PM</span>
			     </div>
				 <span className="message-notification">1</span>
			    </div>
			   </li>



			   <li>
				<div className="user-message-details">
				 <div className="user-message-img">
				  <img src="assets/img/users/10.jpg" className="img-responsive img-circle" alt=""/>
				 </div>
				 <div className="user-message-info">
				  <h4>Sean Coleman</h4>
				  <p>Lorem ipsum dolor ...</p>
				  <span className="time-posted">1:55 PM</span>
			     </div>
			    </div>
			   </li>
        </div>
      );
    }
    
  }
  export default ChattingListItem;