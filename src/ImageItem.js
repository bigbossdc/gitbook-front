import React, { Component } from "react";
import './TimelineItem.css'
import './dialogBox.css';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

class ImageItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      image:false,
      show: "none"
    }
  }
  onShow() {
    this.setState({
      show: "block",
      image: true
    });
  }

  onClose() {
    this.setState({
      // show: "none",
      image: false
    });
  }


  render() {


    const thumbnailVariants = {
      initial: { scale: 0.9, opacity: 0 },
      enter: { scale: 1, opacity: 1, transition },
      exit: {
        scale: 0.5,
        opacity: 0,
        transition: { duration: 1.5, ...transition }
      }
    };
    const transition = {
      duration: 1,
      ease: [0.43, 0.13, 0.23, 0.96]
    };

    const imageVariants = {
      exit: { y: "50%", opacity: 0, transition },
      enter: {
        y: "0%",
        opacity: 1,
        transition
      }
    };

    

    return (
      <div >
        <div 
          className="col-lg-3" style={{ height: "160px", margin: "5px" }}>

          <img
           
            onClick={this.onShow.bind(this)}
            id="fileimage" src={this.props.url} alt="MaterialImg" />

        </div>

      { this.state.image?
        <div className="modal" style={{ display: this.state.show }}>
          <div>
            <div className="col-lg-8 col-lg-offset-2" style={{ background: " rgba( 255, 255, 255, 0 )", marginTop: "1px" }}>  {/** 두번째 섹션 */}
              <motion.div
                initial={{ y: "50%", opacity: 0, transition }} 
                animate={ {
                  y: "0%",
                  opacity: 1,
                  transition
                }} exit={{ y: "50%", opacity: 0, transition }}
                className="UploadPage" style={{ height: "100%", width: "100%" }} >
                {/* <div className="box" style={{ boxShadow: "1px 1px 4px 2px #FFFFFF", padding: "10px", minWidth: "250px",Height:"600px",overflow:"auto" }}> */}

                <motion.img
                  initial={{ y: "50%", opacity: 0, transition }} 
                  animate={ {
                    y: "0%",
                    opacity: 1,
                    transition
                  }} 
                  exit={{ y: "50%", opacity: 0, transition }}
                  
                  className="img-responsive" style={{ maxHeight: "900px", maxWidth: "900px", marginTop: "100px" }} onClick={this.onClose.bind(this)} id="fileimage" src={this.props.url} alt="MaterialImg" />
                 
                {/* </div> */}
              </motion.div>
            </div>
          </div>{/** 두번째 섹션 */}


        </div>:''
      }








      </div>
    );
  }
}

export default ImageItem;