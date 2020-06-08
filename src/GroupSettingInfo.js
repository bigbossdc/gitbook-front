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
class GroupSettingInfo extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      groupinfo:'',
      groupTitle: '',
      groupIntro:'',
      image:'',
      file: null,
      previewURL: '',
      visible:{
          basic : '',
          nobasic : '' 
      },
      chk: '',
      imgurl:'',
      title:''
    }
  }

  handleChange=(e)=>{
    this.setState({
        [e.target.name]: e.target.value
    });
  }

  handleLengthChk=(e)=>{
    if(e.target.value.length > 100) {
        alert("100자를 초과했습니다 (글자수: " + e.target.value.length + ")" )
        this.setState({
          groupIntro: e.target.value.substring(0, 100)
        });
    }
}

  handleRadio=(event)=>{
    let obj = {}
    obj[event.target.value] = event.target.checked 
    this.setState({
        visible: obj,
        chk: !this.state.chk,
        imgurl: this.state.visible['basic'] == false ? '/gitbook/assets/image/basic.jpg' : this.state.imgurl
    });
  } 

  onResult() {
    this.props.changeInfo(this.state.groupTitle, this.state.groupIntro, this.state.imgurl, this.state.groupinfo.no)
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

  render() {
    console.log("please : " + this.state.title)
    return (
      <div className="group-req-setting">
        
      <p><h4 className="group-req-title"><b>정보 수정</b></h4></p>
      <hr></hr>
      <div className="group-box">
      
      <div className="suggestions-list">
      <form>
        <h4 style={{ fontFamily: " 'Abhaya Libre' serif" }}>그룹 이름</h4>

        <input type="text" 
               className="form-control" 
               maxLength="30"
               name="groupTitle"
               value={this.state.groupTitle} 
               onChange={this.handleChange.bind(this)}
               style={{width:"40%",display:"inline",paddingRight:"40px"}}/>
              {
                (this.state.groupTitle.trim() != '') ? 
                  ((this.state.groupTitle.trim() != this.state.groupinfo.groupTitle.trim()) ? 
                    (this.state.grouplist && this.state.grouplist.some((list)=> list.groupTitle.trim() == this.state.groupTitle.trim() ) ?
                    <i className="fas fa-exclamation-triangle" style={{ marginLeft: "-25px", color: "red" }} />
                    : <i className="fas fa-check" style={{ marginLeft: "-25px", color: "green" ,display:"inline-block"}} />)
                  : <i className="fas fa-check" style={{ marginLeft: "-25px", color: "green" ,display:"inline-block"}} />) 
                : <i className="fas fa-exclamation-triangle" style={{ marginLeft: "-25px", color: "red" }} />
              }
  
        <br/>
        <br/>

        <h4 style={{ fontFamily: " 'Abhaya Libre' serif" }}>그룹 인사말 (100자 이내)</h4>
        <textarea className="form-control no-border" 
                  rows="3" 
                  name="groupIntro"
                  value={this.state.groupIntro}
                  onChange={this.handleChange.bind(this)}
                  onKeyUp={this.handleLengthChk.bind(this)}/>
        <br/>
        <br/>
      
        <h4 style={{ fontFamily: " 'Abhaya Libre' serif" }}>그룹 이미지</h4>
        <input 
            type="radio" 
            name="visible" 
            value="basic" 
            checked={this.state.visible['basic']} 
            onChange={this.handleRadio.bind(this)} />
        <label >기본 타이틀 이미지 (default)</label>
        <br></br>
        <input 
            type="radio" 
            name="visible" 
            value="nobasic"
            checked={this.state.visible['nobasic']} 
            onChange={this.handleRadio.bind(this)} />
        <label >이미지 첨부 (jpg, jpeg, png, bmp)</label>

        <div className="group-search-area">   
            <div className="group-input-field">
              <input type="file" onChange={this.imageChange.bind(this)} disabled={this.state.chk}/> 
                {/* <i class="fas fa-upload"></i> */}
            </div>
        </div>
        <hr></hr>
        <div>
          <img src={this.state.previewURL} style={{height: "150px", width: "50%"}}/>
        </div>
        {
          (this.state.groupTitle.trim() !== '') ? 
            ((this.state.groupTitle.trim() !== this.state.groupinfo.groupTitle.trim()) ? 
              (this.state.grouplist && this.state.grouplist.some((list)=> list.groupTitle.trim() === this.state.groupTitle.trim() ) ?
              <button 
                type="submit" 
                className="kafe-btn kafe-btn-mint-small" 
                disabled="true"
                style={{ float: "right ", margin: "10px", width: "70px" ,backgroundColor:"red" }}
                >등록 불가</button>
              : <Link to={`/gitbook/group/${this.state.groupinfo.no}/${sessionStorage.getItem("authUserNo")}`}>
              <button 
                  type="submit" 
                  className="kafe-btn kafe-btn-mint-small"                                
                  style={{ float: "right ", margin: "10px", width: "60px" }}
                  onClick={this.onResult.bind(this)}
                  >업데이트</button></Link>)
            : <Link to={`/gitbook/group/${this.state.groupinfo.no}/${sessionStorage.getItem("authUserNo")}`}>
              <button 
                type="submit" 
                className="kafe-btn kafe-btn-mint-small"                                
                style={{ float: "right ", margin: "10px", width: "60px" }}
                onClick={this.onResult.bind(this)}
                >업데이트</button></Link>) 
          : <button 
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

  componentDidMount() {
    fetch(`${API_URL}/gitbook/group/info`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify({
          userno : this.props.userno,
          groupno: this.props.groupno
      })
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
          groupinfo: json.data,
          groupTitle: json.data.groupTitle,
          groupIntro: json.data.groupIntro,
          previewURL: json.data.image,
          visible:{
            basic : json.data.image == '/gitbook/assets/image/basic.jpg' ? true : false,
            nobasic : json.data.image != '/gitbook/assets/image/basic.jpg' ? true : false 
          },
          chk: json.data.image == '/gitbook/assets/image/basic.jpg' ? true : false,
          imgurl: json.data.image == '/gitbook/assets/image/basic.jpg' ? '/gitbook/assets/image/basic.jpg' : json.data.image
        });
    })
    .catch( err => console.error( err ));  

    fetch(`${API_URL}/gitbook/group/list`, {
      method: 'get',
      headers: API_HEADERS
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          grouplist: json.data
        });
      })
      .catch(err => console.error(err));

  }

}

export default GroupSettingInfo;
