import React, { Component } from "react";
import {Link} from "react-router-dom";


class Header2 extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            authUser: null
        }
    }


      
    render() {

        return(
            <div style={{position:"fixed",paddingTop:"62.97px",zIndex:"99",width:"100%"}}>
            <section className="nav-sec" >
	            <div className="d-flex justify-content-between">       
                <div className={(this.props.name === "MyTimeline" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}
                // onClick={this.onClickHandler.bind(this)}
                
                >
                <Link to={`/gitbook/my/${sessionStorage.getItem("authUserId")}`} className="nav-icon"><em className="fa fa-home"></em>
                <span >MyTimline</span>

                </Link>
                </div>
	  
                <div className={(this.props.name === "Group" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <Link to="/gitbook/mygroup" className="nav-icon"><em className="fa fa-crosshairs"></em>
                    <span>Group</span>
                </Link>
                </div>
                <div className={(this.props.name === "Upload" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <Link to="/gitbook/upload" className="nav-icon"><em className="fa fa-instagram"></em>
                    <span>Upload</span>
                </Link>
                </div>
	   
                <div className={(this.props.name === "Chatting" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <Link className="nav-icon" to="/gitbook/chatting"><em className="fa fa-align-left"></em>
                    <span>Chatting</span>
                </Link>
                </div>
	   
                <div className={(this.props.name === "Friend" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}
               
                 >
                <Link to="/gitbook/myfriend" className="nav-icon"><em className="fa fa-user"></em>
                    <span>Friend</span>
                </Link>
                </div>

	  </div>
	</section>	
    </div>
        );
    }

}

export default Header2;