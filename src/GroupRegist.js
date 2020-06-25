import React, {Component} from 'react';
import './Fluffs/assets/css/demos/group.css';
import {Link} from "react-router-dom";


const API_HEADERS2 = {
    'Content-Type': 'multipart/form-data; charset=UTF-8'
}

class GroupRegist extends Component {
    constructor(){
        super(...arguments);
        this.state={
            groupno:'',
            groupTitle: '',
            groupIntro:'',
            file: null,
            previewURL:'',
            visible:{
                basic : true,
                nobasic : false 
            },
            chk: true,
            imgurl:'/gitbook/assets/img/bg/basic.jpg'
        }
    }
        
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleRadio=(event)=>{
        let obj = {}
        obj[event.target.value] = event.target.checked 
        this.setState({
            visible: obj,
            chk: !this.state.chk,
            imgurl: '/gitbook/assets/img/bg/basic.jpg'
        });
        this.clickHandlerDelete();
    }

    clickHandlerDelete(e) {
        this.setState({
            previewURL: ''
    
        })
    }

    imageChange(event) {
        console.log("imagechange");
        let reader = new FileReader();
        let file = event.target.files[0];
        console.log("image click : " + this.state.previewURL);

        let formData = new FormData();
        formData.append('file', file);
        fetch(`${global.API_URL}/gitbook/group/imgupload`, {
            method: 'post',
            headers: {
                API_HEADERS2
            },
            body: formData
        })
        .then(response => response.json())
        .then( json => {
            const check=json.data.split('.').pop()
            if(check=="png"|| check=="jpg"|| check=="gif"||check=="jpeg" ||check=="PNG"){
                this.setState({
                    imgurl: json.data
                })
            } else {
                this.setState({
                    previewURL:""
                })
            }
        })
        .catch(err => console.log(err));

        reader.onloadend = () => {
            this.setState({
                file: file,
                previewURL: reader.result
            })
        }
        reader.readAsDataURL(file);

        console.log("imagechange : " + this.state.imgurl);

    } 

    // 그룹 생성하기
    handleSubmit(groupTitle, description, imgurl){
        let formData = new FormData();
        formData.append('imgurl', imgurl);
        formData.append('groupTitle', groupTitle);
        formData.append('description', description);

        let path='';
        fetch(`${global.API_URL}/gitbook/group/regist`, {
            method: 'post',
            headers: {
                API_HEADERS2
            },
            body: formData
        })
        .then(response => response.json())
        .then( json => {
            path=JSON.stringify(json.data);
            window.location="/gitbook/group/"+path+"/"+sessionStorage.getItem("authUserNo")
        })
        .catch(err => console.log(err));
    }

    onResult() {
        this.handleSubmit(this.state.groupTitle, this.state.groupIntro, this.state.imgurl)
    }

    render() {

    let profile_preview = null;
    if(this.state.file !== ''){
        profile_preview = <img src={this.state.previewURL} style={{width: "450px", height: "150px", borderRadius: '10px', display: "block" }}></img>

    }
   
    return (
        <div className="group-req-setting" style={{background:"#f4f4f4"}}>    
            <h2 style={{fontFamily:"'Nanum Gothic', sans-serif"}} style={{marginTop:"0px"}}>그룹 등록</h2>
            <hr></hr>
            <div className="group-box">
                <div className="suggestions-list">
                    <div>
                        <h4 style={{fontFamily:"'Nanum Gothic', sans-serif"}}>그룹 이름</h4>
                        <input type="text" 
                               className="form-control" 
                               maxLength="30"
                               value={this.state.groupTitle} 
                               name="groupTitle"
                               onChange={this.handleChange.bind(this)}
                               style={{width:"40%",display:"inline",paddingRight:"40px"}}/>
                        {  (this.state.groupTitle.trim() != '') ? 
                            (
                            this.props.grouplist&&this.props.grouplist.some((list)=> list.groupTitle.trim() == this.state.groupTitle.trim() )?
                            <i className="fas fa-exclamation-triangle" style={{ marginLeft: "-25px", color: "red" }} />:
                            <i className="fas fa-check" style={{ marginLeft: "-25px", color: "green" ,display:"inline-block"}} />) :  <i className="fas fa-exclamation-triangle" style={{ marginLeft: "-25px", color: "red" }} />
                        }
                      
                        <br/>
                        <br/>
                        <h4 style={{fontFamily:"'Nanum Gothic', sans-serif"}}>그룹 인사말 ({this.state.groupIntro.length}/100)</h4>
                        <textarea className="form-control no-border" 
                                  value={this.state.groupIntro} 
                                  name="groupIntro"
                                  onChange={this.handleChange.bind(this)}
                                  maxLength="99"
                                  rows="3"></textarea>
                        <br/>
                        <br/>
                        <h4 style={{ fontFamily:"'Nanum Gothic', sans-serif" }}>그룹 이미지</h4>  
                        <div className="row" style={{marginLeft:"0px", width: "90%"}}>
                        <div style={{float:"left", width:"40%"}}>          
                        <input 
                            type="radio" 
                            name="visible" 
                            value="basic" 
                            checked={this.state.visible['basic']} 
                            onChange={this.handleRadio.bind(this)} />
                        <label style={{ fontFamily:"'Nanum Gothic', sans-serif" }}>&nbsp;기본 타이틀 이미지 (default)</label>
                        <br></br>
                        <input 
                            type="radio" 
                            name="visible" 
                            value="nobasic"
                            checked={this.state.visible['nobasic']} 
                            onChange={this.handleRadio.bind(this)} />
                        <label style={{ fontFamily:"'Nanum Gothic', sans-serif" }}>&nbsp;이미지 첨부 (jpg, jpeg, png, bmp)</label>
                        </div>
                        <div style={{float:"left", width:"50%"}}>     
                            {this.state.visible['nobasic'] === true ? 
                                this.state.previewURL < 2 ? 
                                <div className="imageFileDiv" style={{ width: "470px", height: "170px", marginTop:"0px"}}>
                                    <label style={{marginLeft:"35%"}}>
                                    <input type="file" accept="image/gif,image/jpeg,image/png,image/jpg" onChange={this.imageChange.bind(this)} disabled={this.state.chk} style={{display: "none"}}/> 
                                    <i className="fa fa-camera text-muted fa-4x" id="custom" />
                                    </label>
                                </div> :  <div className="div2">
                                            <i className="fas fa-backspace fa-2x" onClick={this.clickHandlerDelete.bind(this)} />
                                            <div className="imageFileDiv" style={{ width: "470px", height: "170px", marginTop:"0px"}}>
                                            <label>
                                            {profile_preview}
                                            </label>
                                            </div>
                                          </div>
                            :  <div className="div2">
                                    <div className="imageFileDiv" style={{ width: "470px", height: "170px", marginTop:"0px"}}>
                                    <label>
                                        <img src={this.state.imgurl} style={{ width: "450px", height: "150px", borderRadius: '10px', display: "block" }}></img>
                                    </label>
                                    </div>
                                </div>}
                        </div>
                        </div>                 
      
                        { (this.state.groupTitle.trim() != '') ? 
                        ( 
                        this.props.grouplist && this.props.grouplist.some((list)=> list.groupTitle.trim() == this.state.groupTitle.trim()  )?
                        <button 
                                    type="submit" 
                                    className="kafe-btn kafe-btn-mint-small" 
                                    disabled="true"
                                    style={{ float: "right ", margin: "10px", width: "70px" ,backgroundColor:"red" }}
                                    >등록 불가</button>:
                        <button 
                                    type="submit" 
                                    className="kafe-btn kafe-btn-mint-small"                                
                                    style={{ float: "right ", margin: "10px", width: "60px" }}
                                    onClick={this.onResult.bind(this)}
                                    >등록</button>
                            ):  <button 
                            type="submit" 
                            className="kafe-btn kafe-btn-mint-small" 
                            disabled="true"
                            style={{ float: "right ", margin: "10px", width: "70px" ,backgroundColor:"red" }}
                            >등록 불가</button>
                        }
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default GroupRegist;
