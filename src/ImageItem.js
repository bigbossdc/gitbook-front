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
   
    render() {
        return(
            <div>
	        	 <div className="col-lg-3" style={{height:"160px"}}>
                <img className="img-responsive" id="fileimage" src={this.props.url} alt="MaterialImg"/>
              </div>
           </div>
        );
    }
}

export default ImageItem;