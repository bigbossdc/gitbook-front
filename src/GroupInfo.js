import React, { Component } from "react";
//import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/group.css';
import GroupHeaderImg from "./GroupHeaderImg";


class GroupInfo extends Component {
    render() {
        return(  
        <div> 
            <GroupHeaderImg></GroupHeaderImg>
            <div className="group-req">
                <div className="group-master-area">                
                    <img className="img-fluid img-circle abc" src="/assets/img/users/13.jpeg" alt="Image"></img>            
                    <span>
                        <h4>안녕하세요! GibBook그룹에 오신것을 환영합니다!!<br/>
                            여기는 개발자들을 위한 공간입니다.<br/>
                            만나서 반갑습니다!! 지금 바로 가입하세요!!!!!!!!!!!!!!!!!!!!!!!!!!!
                        </h4>
                    </span>            
                </div>
                <section className="notifications group-noti">
                    <hr/>
                    <div className="repo">
                            <i className="fas fa-folder-open fa-3x"></i>
                            <h5>Repositories</h5>
                            <h5>77개</h5>
                    </div>
                    <div className="num">
                            <i className="fas fa-users fa-3x"></i>
                            <h5>그룹 인원수</h5>
                            <h5>35명</h5>
                    </div>
                    <div className="date">
                            <i className="fas fa-flag fa-3x"></i>
                            <h5>그룹 생성일</h5>
                            <h5>2018.04.28</h5>
                    </div>
                    <button className="kafe-btn kafe-btn-mint btn-block group-btn" type="submit" name="subm">수락</button>
                </section>
            </div>
        </div>
        );
    }
}


export default GroupInfo;