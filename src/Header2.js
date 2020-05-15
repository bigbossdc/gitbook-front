import React, { Component } from "react";



class Header2 extends Component {
    render() {
       
        return(
            <section className="nav-sec">
	            <div className="d-flex justify-content-between">
                
                
                <div className={(this.props.name === "MyTimeline" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <a className="nav-icon" href="photo_home.html"><em className="fa fa-home"></em>
                <span>MyTimline</span>
                </a>
                </div>
	  
                <div className={(this.props.name === "Group" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <a className="nav-icon" href="photo_explore.html"><em className="fa fa-crosshairs"></em>
                    <span>Group</span>
                </a>
                </div>
	  
                <div className={(this.props.name === "Upload" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <a className="nav-icon" href="photo_upload.html"><em className="fa fa-instagram"></em>
                    <span>Upload</span>
                </a>
                </div>
	   
                <div className={(this.props.name === "Chatting" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <a className="nav-icon" href="photo_stories.html"><em className="fa fa-align-left"></em>
                    <span>Chatting</span>
                </a>
                </div>
	   
                <div className={(this.props.name === "Friend" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <a className="nav-icon" href="photo_profile.html"><em className="fa fa-user"></em>
                    <span>Friend</span>
                </a>
                </div>

	  </div>
	</section>	
        );
    }
}

export default Header2;