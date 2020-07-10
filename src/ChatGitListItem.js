import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ChattingPage.css";

class ChatGitListItem extends Component {
    constructor() {
		super(...arguments);
		this.state = {
			
		}
	}

    ongitSlect(){
        this.props.gitFuntion.select(this.props.gitItem.gitName)
    }


    render() {
    
        return (
            <div>
                   <div className="gitItem" 
                   onClick={this.ongitSlect.bind(this)}
                   style={{paddingLeft:"8px", float: "left",display:"inline",width:"100%"}}>
								<i className="fab fa-git-alt fa-2x" style={{display:"inline",float:"left",marginTop:"7px"}}/>
                                 <p style={{ marginTop: "1px",display:"inline",float:"left",marginLeft:"10px",width:"70%",wordBreak:"break-all" }}><h4 id="chatNickName" ><b>{this.props.gitItem.gitName}</b></h4></p>
									{   this.props.gitSelect===this.props.gitItem.gitName?
                                        <span id="friendCheckon">
                                        
                                        <i style={{ fontSize: "5px", float: "right", margin: "3px",color:"#fff" }} 
                                        className="fas fa-check">

                                        </i>
                                        
                                        </span>:
                                         <span id="friendCheckon" style={{backgroundColor:"#fff"}}>
                                        
                                       
                                         
                                         </span>

                                        }
									<div className="btn_group">

									</div>
									<div>
									</div>

                            </div>

            </div>
        );
    }
   
   
}

export default ChatGitListItem;