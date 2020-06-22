import React, { Component } from 'react';
import './UploadPage.css';
import DragAndDrop from './DragAndDrop';
import { motion } from "framer-motion";



class UploadPage extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      contents: '',
      tag: '',
      tagList: [],
      tagid: 0,
      visible: "public",
      imgList: [],
      sendtagList: []
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
        const check = json.data.split('.').pop()
        if (check === 'png' || check === "jpg" || check === "gif" || check === "jpeg" || check === "PNG") {
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
    if (e.key === 'Enter') {
      if (this.state.tag != '')
        this.setState({
          tagList: this.state.tagList.concat({ tag: this.state.tag, tagid: this.state.tagid + 1 }),
          tagid: this.state.tagid + 1,
          tag: ''
        })
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

    fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserId")}/upload/${this.props.match.params.groupno}`, {
      method: 'post',
      headers: {

      },
      body: formData
    })
      .catch(err => console.error(err));
    (this.props.match.params.groupno === undefined
      ? window.location = global.API_URL + "/gitbook/my/" + sessionStorage.getItem("authUserId")
      : window.location = global.API_URL + "/gitbook/group/" + this.props.match.params.groupno + "/" + sessionStorage.getItem("authUserNo"))

  }
 
//   dragStart(e) { 
//     this.dragged = e.currentTarget; 
//     e.dataTransfer.effectAllowed = 'move'; 
//     e.dataTransfer.setData('text/html', this.dragged); 
//   } 
//   dragEnd(e) { 
//     this.dragged.style.display = 'block'; 
//   this.dragged.parentNode.removeChild(placeholder); // update state 
//   var data = this.state.colors; 
//   var from = Number(this.dragged.dataset.id); 
//   var to = Number(this.over.dataset.id); 
//   if(from < to) to--; data.splice(to, 0, data.splice(from, 1)[0]); 
//   this.setState({colors: data}); 
// } 
//   dragOver(e) { 
//     e.preventDefault(); 
//     this.dragged.style.display = "none"; 
//     if(e.target.className === 'placeholder') 
//     return; 
//     this.over = e.target; 
//     e.target.parentNode.insertBefore(placeholder, e.target); 
//   }

 




  render() {
   
    const button = {
      rest: { scale: 1 },
      hover: { scale: 1.1 },
      pressed: { scale: 0.95 }
    };
    const arrow = {
      rest: { rotate: 0 },
      hover: { rotate: 360, transition: { duration: 0.4 } }
    };
    return (
      <div className="App" style={{ height: "100vh" }}>
        {/* <Header2 name="Upload"></Header2> */}
        <section className="profile-two" style={{ paddingTop: "100px", height: "100%", backgroundColor: "rgba(196, 196, 196, 0.171)" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2" style={{ background: "#F4F4F4", marginTop: "1px" }}>  {/** 두번째 섹션 */}
            
                <div className="UploadPage" >
                <DragAndDrop handleDrop={this.handleDrop} > 
                  <div className="box" style={{ boxShadow: "1px 1px 4px 2px gray", padding: "10px", minWidth: "250px" }}>
                 
                    <div className="form1" action="/"  >
                  
                      <div >
                        {this.state.imgList && this.state.imgList.map((list,indexs) =>
                          <div className="div2" animate={{scale:1.1}} transition={{duration:0.2}} style={{ float: "left", widthMin: "20%", widthMax: "160px", margin: "0px 1.6%", display: "inline-block" }}>
                            <i className="fas fa-backspace fa-2x" id={list} onClick={this.clickHandlerDelete.bind(this)}  />
                            <div className="imageFileDiv" >
                                {<motion.img 
                               animate={{scale:3}} transition={{duration:0.2}}
                               style={{ width: "33.33%", height: "33.33%", borderRadius: '5px', display: "block",margin:"auto",marginTop:"45px"}} 
                                key={list} 
                                src={list}
                                />
                              }
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
                        <motion.p 
                        positionTransition
                        initial={{ opacity: 0, y: 50, scale: 0.3 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
                          key={list.tagid}
                          id={list.tagid}
                          onClick={this.clickTagDelete.bind(this)}
                          className="tagword" >{list.tag}</motion.p>
                      )}
                      <div>
                        {
                          (this.state.contents !== '') ?

                            <motion.button onClick={this.handleSubmit.bind(this)} 
                            animate={{ scale: 1 }}
                          transition={{ duration: 0.05 }}
                        
                            style={{ color: "#0FC19E", float: "right", margin: "5px",transform:"scale(0.3)" }}
                              className="kafe-btn kafe-btn-mint-small pull-right btn-sm">Upload</motion.button> :
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
            </div>{/** row 종료 */}
          </div>{/** container-fluid 종료 */}
        </section>{/** profile-twd 종료 */}
      </div>
    );
  }
  componentWillUnmount() {
    setTimeout({}, 500);
  }

}
export default UploadPage;
