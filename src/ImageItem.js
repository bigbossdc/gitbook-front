import React, { Component } from "react";
import './TimelineItem.css'
import './dialogBox.css';


class ImageItem extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            show:"none"
        }
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
        return(
            <div>
	        	 <div className="col-lg-3" style={{height:"160px",margin:"5px"}}>
                <img className="img-responsive"  onClick={this.onShow.bind(this)}id="fileimage" src={this.props.url} alt="MaterialImg"/>
              </div>
             
             
              <div className="modal" style={{ display: this.state.show }}>
              <div>
                <div className="col-lg-8 col-lg-offset-2" style={{ background: " rgba( 255, 255, 255, 0 )", marginTop: "1px"}}>  {/** 두번째 섹션 */}
                  <div className="UploadPage" style={{height:"100%",width:"100%"}} >
                    {/* <div className="box" style={{ boxShadow: "1px 1px 4px 2px #FFFFFF", padding: "10px", minWidth: "250px",Height:"600px",overflow:"auto" }}> */}
                  
                    <img className="img-responsive" style={{maxHeight:"900px",maxWidth:"900px",marginTop:"100px"}} onClick={this.onClose.bind(this)} id="fileimage"  src={this.props.url} alt="MaterialImg"/>

                    {/* </div> */}
                  </div>
                  </div>
                </div>{/** 두번째 섹션 */} 
        </div>
           
           
           
           
           
           
           
           
           
           </div>
        );
    }
}

export default ImageItem;