import React, { Component } from 'react';
import "./ChattingPage.css";
import { motion } from "framer-motion";
import ChatImageItem from "./ChatImageItem"



class ChattingMsgItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        {this.props.msg && this.props.msg.userNo == 1004 ?

          <div className="convo-box" width="100%">
            <p className="announcement">{this.props.msg.contents}</p>
          </div> :
          (this.props.msg.userNo == sessionStorage.getItem("authUserNo")) ?

            <div className="convo-box pull-right" style={{ width:"60%", float: "right" }}>
              <div className="convo-area convo-right" style={{ maxWidth: "832px", float:"right" }}>
                <div className="convo-message"  style={{  maxWidth:"832px"}} >
                  
                  {this.props.msg.type =='text'?
                  <motion.p 
               
                  style={{  padding: "10px 15px ",wordBreak:"break-all",width:"auto"}} 
                  positionTransition
                  initial={{ opacity: 0, y: 50, scale: 0.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                  >
                                      
                    {this.props.msg.contents.split(/\n/g).map((word) =>
                      <div style={{ margin:"0px" }}>
                        {word.split(" ").map(nbsp => <div style={{ display: "inline" }}>{nbsp}&nbsp;</div>)
                        }<br></br>
                      </div>
                    )}
                   
             
            
                    
                    </motion.p>
    
                    : this.props.msg.type=='image'?
                    <motion.p 

                          style={{  padding: "10px 15px ",wordBreak:"break-all",height:"215px",backgroundColor:"#FFFFFF"}} 
                          positionTransition
                          initial={{ opacity: 0, y: 50, scale: 0.3 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                          >
                    <ChatImageItem
                       url={this.props.msg.contents}
                    /></motion.p>
                        :

                        <motion.p 

                        style={{  padding: "10px 15px ",wordBreak:"break-all",height:"215px",backgroundColor:"#FFFFFF"}} 
                        positionTransition
                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                        >
                  <img
                    style={{width:"auto",height:"100%"}}
                     src={this.props.msg.contents}
                  /></motion.p>
                    }
             


                </div>
                  <span><strong style={{color:"#FFC0C0",fontSize:"1.1em"}}>{this.props.msg.count}</strong>&nbsp;&nbsp;&nbsp;{this.props.msg.sendDate}</span>
              </div>
              <div className="convo-img">
                <img style={{ width: "50px", height: "50px" }} src={this.props.msg.image} alt="" className="img-responsive img-circle" />
                <span className="tooltip-custom">{this.props.msg.userNickname}</span>
              </div>
            </div>
            :
            <div className="convo-box convo-left" style={{ width:"60%" }}>
              <div className="convo-area convo-left" style={{ maxWidth: "832px" }}>
                <div className="convo-message">
                 
                {this.props.msg.type =='text'?
                  <motion.p
                  positionTransition
                  initial={{ opacity: 0, y: 50, scale: 0.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                  >  {this.props.msg.contents.split(/\n/g).map((word) =>
                    <div>
                      {word.split(" ").map(nbsp => <div style={{ display: "inline" }}>{nbsp}&nbsp;</div>)
                      }<br></br>
                    </div>
                  )}</motion.p>


              : this.props.msg.type  ==='image'?
                  <motion.p 

                  style={{  padding: "10px 15px ",wordBreak:"break-all",height:"215px",backgroundColor:"#FFFFFF",width:"60%"}} 
                  positionTransition
                  initial={{ opacity: 0, y: 50, scale: 0.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                  >
                  <ChatImageItem
                    url={this.props.msg.contents}
                  /></motion.p>: 
                  <motion.p 


                  style={{  padding: "10px 15px ",wordBreak:"break-all",height:"215px",backgroundColor:"#FFFFFF",width:"60%"}} 
                  positionTransition
                  initial={{ opacity: 0, y: 50, scale: 0.3 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                  >
                       <img
                    style={{width:"auto",height:"100%"}}
                     src={this.props.msg.contents}
                  />
                  </motion.p>

                    }
                </div>
                  <span>{this.props.msg.sendDate}&nbsp;&nbsp;&nbsp;<strong style={{color:"#FFC0C0",fontSize:"1.1em"}}>{this.props.msg.count}</strong></span>
              </div>
              <div className="convo-img">
                <img style={{ width: "50px", height: "50px" }} src={this.props.msg.image} alt="" className="img-responsive img-circle" />
                <span className="tooltip-custom2">{this.props.msg.userNickname}</span>
              </div>
            </div>


        }
      </div>
    );
  }

}
export default ChattingMsgItem;