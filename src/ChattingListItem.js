import React, { Component, Fragment } from 'react';
import "./ChattingPage.css";
import SockJsClient from "react-stomp";


class ChattingListItem extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			chatRoomImage: '',
			chatRoomLastMsg: '',
			alarmCount:''
		}
	}
	oncheckItem() {

		this.props.onCheckItm.check(this.props.list.chatRoomListItem);

	}
	

	render() {
	
		return (
			<Fragment>


				<div>

					<li
						className={(this.props.check.no === this.props.list.chatRoomListItem.no) ? "active" : ""}
						onClick={this.oncheckItem.bind(this)}>
						<div className="user-message-details">
							<div className="user-message-img">
								<img style={{ width: "40px", height: "40px" }} src={this.props.list.image} className="img-responsive img-circle" alt="" />

							</div>
							<div class="user-message-info" style={{ width: "250px" }}>
								<h4 style={{ textOverflow: "ellipsis", fontFamily: "'Jeju Gothic', sans-serif", marginBottom: "15px" }} className="txt_post2">{this.props.list.chatRoomListItem.title}</h4>
								<p className="txt_post" style={{ fontFamily: "'Jeju Gothic', sans-serif" }}>{this.props.list.lastMsg && this.props.list.lastMsg.contents}</p>
								<span className="time-posted">{this.props.list && this.props.list.lastMsg.sendDate}</span>
							</div>
							{/* <i class="fas fa-comment-alt fa-2x" style={{color:"#0FC19E",margin:"4px"}}/> */}
							
							{
							(this.props.check.no !== this.props.list.chatRoomListItem.no) ?
							(this.props.list.alarmCount && this.props.list.alarmCount !== 0 ?
								<span className="message-notification">{this.props.list.alarmCount && this.props.list.alarmCount}</span>:''):''}
								
								</div>
					</li>

				</div>

			</Fragment>
		);
	}
	componentDidMount() {
		// fetch(`${global.API_URL}/gitbook/chatting/api/chatRoomListItmeInfo/${this.props.list.no}`, {
		// 	method: 'get',
		// 	headers: global.API_HEADERS,
		// })
		// 	.then(response => response.json())
		// 	.then(json => {
		// 		this.setState({
		// 			chatRoomImage: json.data.image,
		// 			chatRoomLastMsg: json.data.lastMsg,
		// 			alarmCount:json.data.alarmCount
		// 		});
		// 	})
		// 	.catch(err => console.error(err));
	}

	componentWillUnmount(){
		
	}
}
export default ChattingListItem;