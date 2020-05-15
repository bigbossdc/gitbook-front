import React, {Component} from 'react';
import './Fluffs/assets/css/demos/group.css';

class GroupRegist extends Component {
  render() {
    
    return (
        <div className="group-req-setting">    
            <h2 style={{ fontFamily: " 'Abhaya Libre' serif" }}>그룹 등록</h2>
            <hr></hr>
            <div className="group-box">
                <div className="suggestions-list">
                    <form>
                        <h4 style={{ fontFamily: " 'Abhaya Libre' serif" }}>그룹 이름</h4>
                        <input type="text" className="form-control" style={{width:"40%",display:"inline",paddingRight:"40px"}}/>
                        <i class="fas fa-check" style={{ marginLeft: "-25px", color: "green" ,display:"inline-block"}} />
                        <i class="fas fa-exclamation-triangle" style={{ marginLeft: "-25px", color: "red" }} />
                        <br/>
                        <br/>
                        <h4 style={{ fontFamily: " 'Abhaya Libre' serif" }}>그룹 인사말 (100자 이내)</h4>
                        <textarea class="form-control no-border" rows="3"></textarea>
                        <br/>
                        <br/>                 
                        <h4 style={{ fontFamily: " 'Abhaya Libre' serif" }}>그룹 이미지</h4>
                        <input type="radio" name="public" value="basic" checked="checked" />
                        <label >기본 타이틀 이미지 (default)</label>
                        <br></br>
                        <input type="radio" name="public" value="nobasic" />
                        <label >이미지 첨부 (jpg, jpeg, png, bmp)</label>
                        <div className="group-search-area">   
                            <div className="group-input-field">
                                <input value="now.jpg" type="text"/> 
                                <i class="fas fa-upload"></i>
                            </div>
                        </div>
                        <button type="submit" className="kafe-btn kafe-btn-danger-small" style={{ float: "right ", margin: "10px", width: "60px", padding:"4px"}}>취소</button>
                        <button type="submit" className="kafe-btn kafe-btn-mint-small" style={{ float: "right ", margin: "10px", width: "60px" }}>등록</button>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default GroupRegist;
