import React, { Component } from "react";
import './Fluffs/assets/css/demos/photo.css';
import './dialogBox.css';


class DialogDelete extends Component {
  constructor() {
	super(...arguments);
		this.state = {
        check:false,
        show: this.props.showDialog
    };
   
  }
  
	onClose() {
		this.setState({
          show: "none"
	    });
    }

  onOkhandler(){
    this.props.callback.delete(this.props.no);
    this.setState({
      show: "none"
    })
  }

    render() {
     
        return(
          <div className="modal" style={{display: this.state.show}}>
           <div className="modal-content" style={{margin:"15% auto",height:"130px" ,width:"300px"}}>
						<div className="modal-header" style={{backgroundColor:"#0FC19E"}}>
							<span className="close" onClick={this.onClose.bind(this)}>&times;</span>
              <h6 style={{color:"#ffff"}}>친구 삭제</h6>
						</div>
            
						<div className="modal-footer">
                <h6 style={{color:"gray",position:"absolute",marginLeft:"10px"}}>"{this.props.nickname}"님을 삭제 하시겠습니까?</h6>            
                <button 
                    style={{width:"70px",marginTop:"30px"}}
                    type="submit"
                    className="kafe-btn kafe-btn-mint-small" name="button-ok"
                    onClick={this.onOkhandler.bind(this)}>
                    ok
                </button>
						</div>
          </div>
           </div>        
        );
    }
}

export default DialogDelete;