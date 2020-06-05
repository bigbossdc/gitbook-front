import React, {Component} from 'react';
import './Fluffs/assets/css/demos/group.css';
import {Link} from "react-router-dom";

const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}
const API_HEADERS2 = {
    'Content-Type': 'multipart/form-data; charset=UTF-8'
}
class GroupRegist extends Component {
    constructor(){
        super(...arguments);
        this.state={
            groupTitle: '',
            description:'',
            file: null,
            previewURL:'',
            visible:{
                basic : true,
                nobasic : false 
            },
            chk: true,
            imgurl:'/gitbook/assets/image/basic.jpg'
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
            chk: !this.state.chk
        });
    }

    imageChange(event) {
        console.log("imagechange");
        let reader = new FileReader();
        let file = event.target.files[0];
        console.log("image click : " + file);

        let formData = new FormData();
        formData.append('file', file);
        fetch(`${API_URL}/gitbook/group/imgupload`, {
            method: 'post',
            headers: {
                API_HEADERS2
            },
            body: formData
        })
        .then(response => response.json())
        .then( json => {
            this.setState({
                imgurl: json.data
            })
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

    onResult() {
        this.props.handleSubmit(this.state.groupTitle, this.state.description, this.state.imgurl)
    }

    render() {

    let profile_preview = null;
    if(this.state.file !== ''){
        profile_preview = <img className='profile_preview' src={this.state.previewURL}></img>
    }
    
    return (
        <div className="group-req-setting">    
            <h2 style={{ fontFamily: " 'Abhaya Libre' serif" }}>그룹 등록</h2>
            <hr></hr>
            <div className="group-box">
                <div className="suggestions-list">
                    <form method="POST">
                        <h4 style={{ fontFamily: " 'Abhaya Libre' serif" }}>그룹 이름</h4>
                        <input type="text" 
                               className="form-control" 
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
                        <h4 style={{ fontFamily: " 'Abhaya Libre' serif" }}>그룹 인사말 (100자 이내)</h4>
                        <textarea className="form-control no-border" 
                                  value={this.state.description} 
                                  name="description"
                                  onChange={this.handleChange.bind(this)}
                                  rows="3"></textarea>
                        <br/>
                        <br/>                 
                        <h4 style={{ fontFamily: " 'Abhaya Libre' serif" }}>그룹 이미지</h4>
                        <input 
                            type="radio" 
                            name="visible" 
                            value="basic" 
                            checked={this.state.visible['basic']} 
                            onChange={this.handleRadio.bind(this)} />
                        <label>기본 타이틀 이미지 (default)</label>
                        <br></br>
                        <input 
                            type="radio" 
                            name="visible" 
                            value="nobasic"
                            checked={this.state.visible['nobasic']} 
                            onChange={this.handleRadio.bind(this)} />
                        <label>이미지 첨부 (jpg, jpeg, png, bmp)</label>
                        <div className="group-search-area">   
                            <div className="group-input-field">
                                <input type="file" onChange={this.imageChange.bind(this)} disabled={this.state.chk}/> 
                                {/* <i className="fas fa-upload"></i> */}
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            {profile_preview}
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
                        <Link to="/gitbook/mygroup">
                        <button 
                                    type="submit" 
                                    className="kafe-btn kafe-btn-mint-small"                                
                                    style={{ float: "right ", margin: "10px", width: "60px" }}
                                    onClick={this.onResult.bind(this)}
                                    >등록</button></Link>
                            ):  <button 
                            type="submit" 
                            className="kafe-btn kafe-btn-mint-small" 
                            disabled="true"
                            style={{ float: "right ", margin: "10px", width: "70px" ,backgroundColor:"red" }}
                            >등록 불가</button>
                        }
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default GroupRegist;
