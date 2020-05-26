import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/photo.css';


const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}


class MyRepositoryListItem extends Component {
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

  repoVisibleHandler(){
    fetch(`${API_URL}/gitbook/Repository/${sessionStorage.getItem("authUserId")}/update`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(this.props.list)
  })
  .catch( err => console.error( err ));  
    this.props.setState({
      visible: (this.props.visible=='public') ? 'private' : 'public'
    })
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
      const k={
        position: "relative",
        top: "1px",
        display: "inline-block",
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: (this.props.visible === "public" ) ? "#0FC19E" : "red" ,
        marginRight:"6px",
        marginBottom: "3px"
      }
        return(
            <div className="cardbox">
		          <div className="cardbox-heading"> 
              { (sessionStorage.getItem("authUserNo") == this.props.userNo) &&(
                <div className="dropdown pull-right">
                 <button className="btn btn-secondary btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
                  <em className="fa fa-ellipsis-h"></em>
                 </button>
                 <div className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style={{position: "absolute", transform: "translate3d(-136px, 28px, 0px)" ,top:"0px", left:"0px", willChange: "transform"}}>
                 {(this.props.visible=="public")?  
                 <a className="dropdown-item" href="" onClick={this.repoVisibleHandler.bind(this)} style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>비공개 하기</strong></a> :
                 <a className="dropdown-item" href="" onClick={this.repoVisibleHandler.bind(this)} style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>공개 하기</strong></a>}
                  
                   <a className="dropdown-item"  href="#" onClick={this.onShow.bind(this)} style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>삭제 하기</strong></a>
                 </div>
               </div>
                )}
               <div className="media m-0">
                <div className="media-body">
                    <span style={k}></span>


                    <Link to={`/gitbook/my/${this.props.path}/repository/detail`} className="text-muted" style={{fontFamily: " 'Varela Round', sans-serif",fontSize:"1.9em",display:"inline-block",marginBottom:"10px"}}>

                    
                      {this.props.gitName}</Link>
                      <p>{this.props.description}
                     </p>


        <small style={{float:"right"}}><span>{this.props.regDate}</span></small>
                </div>
              </div>
                 <hr></hr> 
              </div>
            
              <div>
			
      	<div className="modal" style={{display : this.state.show,width:"20%",minWidth:"250px",margin:"20% auto"}}>
					<div className="modal-content">
						<div className="modal-header">
							<span className="close" onClick={this.onClose.bind(this)}>&times;</span>
							<h6>{this.props.gitName}(를)을 삭제 하시겠습니까?</h6>
						</div>
            
						<div className="modal-footer">
              <form>
                <input ></input>
              <button  type="submit"
                        className="kafe-btn kafe-btn-mint-small" name="button-ok">
								ok
							</button>
              </form>
						</div>
					</div>
				</div>
			</div>
            
            
            
            
            
            
            
            </div>
                   
        );
    }
}

export default MyRepositoryListItem;