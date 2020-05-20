import React, { Component, Fragment } from "react";


export default class DialogBox extends Component {
	constructor() {
		super(...arguments);
		this.state = {
			show: 'none',   // block <---> none
			title: "",
			contents: "",
			button_left: "",
			button_right: "",
		};
	}

	onShow() {
		this.setState({
			show: "block",
		});
	}

	onClose() {
		this.setState({
			show: "none",
		});
	}

	render() {
		return (
			<Fragment>
				<div className="modal" style={{display : this.state.show}}>
					<div className="modal-content">
						<div className="modal-header">
							<span className="close">&times;</span>
							<h2>title</h2>
						</div>

						<div className="modal-body">
							<p>Some text in the Modal Body</p>
							<p>Some other text...</p>
							<p>Some text in the Modal Body</p>
							<p>Some other text...</p>
							<p>Some text in the Modal Body</p>
							<p>Some other text...</p>
						</div>

						<div className="modal-footer">
							<button className="dialogbutton dialogbutton-green" name="button-ok">
								ok
							</button>
							<button className="dialogbutton dialogbutton-red" id="button-cancel">
								cancel
							</button>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
