import React, { Component, Fragment } from 'react';
import "./ChattingPage.css";
import SockJsClient from "react-stomp";


class ChattingListItem extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			chatRoomImage: '',
			chatRoomLastMsg: ''
		}
	}
	oncheckItem() {

		this.props.onCheckItm.check(this.props.list);

	}

	render() {
		return (
			<Fragment>
				<SockJsClient
					url={`${global.API_URL}/gitbook/socket`}
					topics={[`/topics/chatting/lastMsg/${this.props.list.no}`]}
					onMessage={(msg) => {
						
						this.setState({
							chatRoomLastMsg:msg
						})
					}}
					ref={(client) => {
						this.clientRef = client;
					}}
				></SockJsClient>
				<div>

					<li
						className={(this.props.check.no === this.props.list.no) ? "active" : ""}
						onClick={this.oncheckItem.bind(this)}>
						<div className="user-message-details">
							<div className="user-message-img">
								<img style={{ width: "40px", height: "40px" }} src={this.state.chatRoomImage} className="img-responsive img-circle" alt="" />

							</div>
							<div class="user-message-info" style={{ width: "250px" }}>
								<h4 style={{ textOverflow: "ellipsis", fontFamily: "'Jeju Gothic', sans-serif", marginBottom: "15px" }} className="txt_post2">{this.props.list.title}</h4>
								<p className="txt_post" style={{ fontFamily: "'Jeju Gothic', sans-serif" }}>{this.state.chatRoomLastMsg && this.state.chatRoomLastMsg.contents}</p>
								<span className="time-posted">{this.state.chatRoomLastMsg && this.state.chatRoomLastMsg.sendDate}</span>
							</div>
							<span className="message-notification">1</span>
						</div>
					</li>

				</div>

			</Fragment>
		);
	}
	componentDidMount() {
		fetch(`${global.API_URL}/gitbook/chatting/api/chatRoomListItmeInfo/${this.props.list.no}`, {
			method: 'get',
			headers: global.API_HEADERS,
		})
			.then(response => response.json())
			.then(json => {
				this.setState({
					chatRoomImage: json.data.image,
					chatRoomLastMsg: json.data.lastMsg
				});
			})
			.catch(err => console.error(err));
	}
}
export default ChattingListItem;