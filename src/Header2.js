import React, { Component } from "react";
import {Link} from "react-router-dom";

const API_URL = 'http://localhost:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}

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
                           
                <div className={(this.props.name === "MyTimeline" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <Link to="/gitbook/my" className="nav-icon"><em className="fa fa-home"></em>
                <span>MyTimline</span>
                </Link>
                </div>
	  
                <div className={(this.props.name === "Group" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <Link to="/gitbook/mygroup" className="nav-icon"><em className="fa fa-crosshairs"></em>
                    <span>Group</span>
                </Link>
                </div>
	  
                <div className={(this.props.name === "Upload" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <a className="nav-icon"><em className="fa fa-instagram"></em>
                    <span>Upload</span>
                </a>
                </div>
	   
                <div className={(this.props.name === "Chatting" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <a className="nav-icon" href="photo_stories.html"><em className="fa fa-align-left"></em>
                    <span>Chatting</span>
                </a>
                </div>
	   
                <div className={(this.props.name === "Friend" ) ? "p-2 nav-icon-lg mint-green" : "p-2 nav-icon-lg clean-black"}>
                <Link to="/gitbook/myfriend" className="nav-icon"><em className="fa fa-user"></em>
                    <span>Friend</span>
                </Link>
                </div>

	  </div>
	</section>	
    </div>
        );
    }



    componentDidMount() {
        fetch(`${API_URL}/user/auth`, {
            method: 'get',
            headers: API_HEADERS
        })
        .then( response => response.json())
        .then( json => this.setState({
            authUser: json.data
        }))
        .catch( err => console.error( err ));        
    }

}

export default Header2;