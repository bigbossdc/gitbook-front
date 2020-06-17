import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Fluffs/assets/css/demos/group.css';
import "./DialogDelete.css"


class ChatFriendJoinItem extends Component {
    constructor() {
        super(...arguments);
        this.state = {
          
          
        };
    }

 

    
    addList() {
       
        this.props.friendListfuntion.add(this.props.list)
    }
    deleteList() {
        this.props.friendListfuntion.delete(this.props.list)
    }

    render() {
    
        return (
            <div>
                <li>
                    {this.props.inviteList && this.props.inviteList.some((list) => list.no == this.props.list.no) ?
                        <div className="media" id='media' 
                      
                        >

                            <img src={this.props.img} alt="" className="img-responsive img-circle" />
                            <div className="media_body" style={{ float: "left", marginTop: "-5px" }}>
                                <p style={{ marginTop: "10px" }}><h5 id="chatNickName" ><b>{this.props.nickname}</b></h5></p>
                                <span id="friendCheckon"><i style={{ fontSize: "5px", float: "right", margin: "4px" }} class="fas fa-check"></i></span>
                                <div className="btn_group">

                                </div>
                                <div>
                                </div>

                            </div>

                        </div> : this.props.changeInviteList && this.props.changeInviteList.some((list) => list == this.props.list) ?
                        
                        <div className="media" id='media' 
                        onClick={
                            this.deleteList.bind(this)
                        } 
                        >

                            <img src={this.props.img} alt="" className="img-responsive img-circle" />
                            <div className="media_body" style={{ float: "left", marginTop: "-5px" }}>
                                <p style={{ marginTop: "10px" }}><h5 id="chatNickName" ><b>{this.props.nickname}</b></h5></p>
                                <span id="friendCheckon"><i style={{ fontSize: "5px", float: "right", margin: "4px" }} class="fas fa-check"></i></span>
                                <div className="btn_group">

                                </div>
                                <div>
                                </div>

                            </div>

                        </div>
                        
                        :

                        <div className="media" id='media' 
                        onClick={this.addList.bind(this)} 
                        >

                            <img src={this.props.img} alt="" className="img-responsive img-circle" />
                            <div className="media_body" style={{ float: "left", marginTop: "-5px" }}>

                                <p style={{ marginTop: "10px" }}><h5 id="chatNickName" ><b>{this.props.nickname}</b></h5></p>

                                <span id="friendCheck"></span>

                                <div className="btn_group">

                                </div>
                                <div>
                                </div>

                            </div>

                        </div>
                    }
                </li>

            </div>
        );
    }
   
   
}

export default ChatFriendJoinItem;