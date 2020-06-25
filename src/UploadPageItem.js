import React, { Component } from 'react';
import './UploadPage.css'
import DragAndDrop from './DragAndDrop';
import { motion } from "framer-motion";



class UploadPageItem extends Component {
    constructor() {
      super(...arguments);
      this.state = {
        contents: this.props.timelineInfo.contents,
        tag: '',
        tagList: [],
        tagid: 0,
        visible: this.props.timelineInfo.visible,
        imgList: [],
        sendtagList: [],
        filelist:this.props.filelist
    }
  
    }
    handleChangeFile = (e) => {
      const formData = new FormData();
      formData.append("file", e.target.files[0])
      fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserId")}/fileupload`, {
        method: 'post',
        headers: {
        },
        body: formData
      })
        .then(response => response.json())
        .then(json => {
          const check=json.data.split('.').pop()
          if(check==='png'|| check==="jpg"|| check==="gif"||check==="jpeg"||check==="PNG"){
          this.setState({
            imgList: this.state.imgList.concat(json.data)
          });
        }
        })
        .catch(err => console.error(err));
      e.target.value = ''
  
  
    }

    handleDrop = (files) => {
      if(this.state.imgList.length<10){
      const formData = new FormData();
      formData.append("file", files[0])
      fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserId")}/fileupload`, {
        method: 'post',
        headers: {
  
        },
        body: formData
      })
        .then(response => response.json())
        .then(json => {
          const check = json.data.split('.').pop()
          if (check === 'png' || check === "jpg" || check === "gif" || check === "jpeg" || check === "PNG") {
            this.setState({
              imgList: this.state.imgList.concat(json.data)
            });
          }
        })
        .catch(err => console.error(err));
      }
    }
  
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    handleKeyPress(e) {

      if(/^([0-9a-zA-Zㄱ-ㅎ가-힣ㅏ-ㅣ]){0,}$/.test(e.target.value) === false){
        alert("태그에 특수문자를 작성하지 못합니다");
      }else{
        if (e.key === 'Enter') {
          if (this.state.tag != '')
            this.setState({
              tagList: this.state.tagList.concat({ tag: this.state.tag, tagid: this.state.tagid + 1 }),
              tagid: this.state.tagid + 1,
              tag: ''
            })
  
  
      }
    }
    }
    clickHandlerDelete(e) {
      this.setState({
        imgList: this.state.imgList.filter((list) => list != e.target.id),
  
      })
  
    }
    clickTagDelete(e) {
      this.setState({
        tagList: this.state.tagList.filter((list) => list.tagid != e.target.id)
  
      })
    }
    clickVisible() {
      this.setState({
        visible: (this.state.visible === "public") ? "private" : "public"
      })
    }
    handleSubmit() {
      const authUserNo = sessionStorage.getItem("authUserNo");
      const formData = new FormData();
      let sendtagList = [];
      this.state.tagList.map((list) => { sendtagList = sendtagList.concat(list.tag) })
      formData.append("userNo", authUserNo);
      formData.append("contents", this.state.contents);
      formData.append("visible", this.state.visible);
      formData.append("tagList", sendtagList)
      formData.append("imgList", this.state.imgList)
  
      fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserId")}/update/${this.props.timelineInfo.no}`, {
        method: 'post',
        headers: {
  
        },
        body: formData
      })
        .catch(err => console.error(err));
    }

    onClose(){
        this.props.close.close();
    }

    render() {
      return (
        <div className="react-transition fade-in" style={{animationDuration:'0.3s'}} > 
                <div className="col-lg-8 col-lg-offset-2" style={{ background: "#929292", marginTop: "1px"}}>  {/** 두번째 섹션 */}
                  <div className="UploadPage" >
                  <DragAndDrop handleDrop={this.handleDrop} > 
                    <div className="box" style={{ boxShadow: "1px 1px 4px 2px #FFFFFF", padding: "10px", minWidth: "250px",maxHeight:"600px",overflow:"auto" }}>
                    <strong> <span onClick={this.onClose.bind(this)} id="x">×</span></strong>
                      <div className="form1" action="/"  >
                        <div >
                          {this.state.imgList && this.state.imgList.map((list) =>
                           <div className="div2" animate={{scale:1.1}} transition={{duration:0.2}} style={{ float: "left", widthMin: "20%", widthMax: "160px", margin: "0px 1.6%", display: "inline-block" }}>
                           <i className="fas fa-backspace fa-2x" id={list} onClick={this.clickHandlerDelete.bind(this)}  />
                           <div className="imageFileDiv" >
                                {<motion.img 
                                  animate={{scale:3}} transition={{duration:0.2}}
                                style={{ width: "33.33%", height: "33.33%", borderRadius: '5px', display: "block",margin:"auto",marginTop:"45px"}} key={list} src={list}/>}
                              </div>
                            </div>)}
                          {
                            (this.state.imgList.length < 10) ?
                              <div style={{ float: "left", widthMin: "20%", widthMax: "160px", margin: "0px 1.6%", display: "inline-block" }}>
                                <div className="imageFileDiv" >
                                  <label className="iconlabel"><input type="file" accept="image/gif,image/jpeg,image/png,image/jpg" name={this.state.imgFile} style={{ display: "none" }} onChange={this.handleChangeFile} /> <i className="fa fa-camera text-muted fa-4x" id="custom" /></label>
                                </div>
                              </div> : ''}
                        </div>
                        <textarea className="form-control no-border"
                          id="uploadDescription"
                          rows="3"
                          placeholder="내용을 입력해주세요..."
                          name="contents"
                          value={this.state.contents}
                          onChange={this.handleChange.bind(this)}
                          style={{ minHeight: "300px", minWidth: "100%", resize: "none", fontFamily: ' "Lucida Grande","Lucida Sans Unicode",Verdana,sans-serif', fontSize: "1.3em" }} />
                        {(this.state.tagList && this.state.tagList.length < 5) ?
                          <input className="input1"
                            placeholder="태그를 입력해주세요..."
                            name="tag"
                            maxLength="20"
                            value={this.state.tag}
                            onChange={this.handleChange.bind(this)}
                            onKeyPress={this.handleKeyPress.bind(this)}
                            style={{ width: "100%", border: "0px" }} /> : ''
                        }
                        {this.state.tagList && this.state.tagList.map((list) =>
                          <motion.p key={list.tagid}
                          positionTransition
                          initial={{ opacity: 0, y: 50, scale: 0.3 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                            id={list.tagid}
                            onClick={this.clickTagDelete.bind(this)}
                            className="tagword" >{list.tag}</motion.p>
                        )}
                        <div>
                          {
                            (this.state.contents !== '') ?
                               <a href="">
                                <motion.button 
                                      animate={{ scale: 1 }}
                                      transition={{ duration: 0.05 }}
                                onClick={this.handleSubmit.bind(this)}  style={{ color: "#0FC19E", float: "right", margin: "5px",transform:"scale(0.3)" }}
                                  className="kafe-btn kafe-btn-mint-small pull-right btn-sm">Update</motion.button></a> :
                              ''}
                          {(this.state.visible === "public") ?
                            <i style={{ color: "#0FC19E" }} onClick={this.clickVisible.bind(this)} id="vislblelock" className="fas fa-lock-open fa-2x" /> :
                            <i style={{ color: "red" }} onClick={this.clickVisible.bind(this)} id="vislblelock" className="fas fa-lock fa-2x" />
                          }
                        </div>
                      </div>
                      <div className="box-footer clearfix">
                      </div>
                    </div>
                    </DragAndDrop>
                  </div>
                 
                </div>{/** 두번째 섹션 */} 
        </div>
      );
    }
    componentDidMount() {
        fetch(`${global.API_URL}/gitbook/timeline/${this.props.matchid}/info/${this.props.timelineInfo.userNo}/${this.props.timelineInfo.no}`, {
            method: 'get',
            headers: global.API_HEADERS
          })
            .then(response => response.json())
            .then(json => {
              this.setState({
               imgList:json.data.url,
              });
              json.data.tag.map((list)=>
                this.setState({

                    tagList: this.state.tagList.concat({ tag: list, tagid: this.state.tagid + 1 }),
                    tagid: this.state.tagid + 1,

                })
              )
              
            })
            .catch(err => console.error(err));



    }
  }
  export default UploadPageItem;