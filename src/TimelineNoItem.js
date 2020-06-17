import React, { Component } from 'react';
import {Link} from "react-router-dom";
import "./TimelineItem.css"


class MainTimelineList extends Component {
  constructor(){
    super(...arguments);
    this.state={
    }
  }

  render() {
 
    return (
          <div className="main-nocontents">
            <div className="main-nocontents-area">
              <h1>환영합니다</h1><br/>
              <text>안녕하세요, {sessionStorage.getItem("authUserName")}님. 깃북을 찾아 주셔서 감사합니다.<br/>
              깃북은 개발자들을 위한 SNS로 개인 소스와 그룹 프로젝트를 모두 관리할 수 있는 공간입니다.<br/>
              지금 깃북을 통하여 자신만의 개발공간을 만들어보세요.<br/>
              </text>
            </div>
            <div class="row top-row" style={{marginTop:"80px", marginLeft:"0px"}}>
            <div class="col-lg-3">
              <div class="tr-section">
                <div class="tr-post">
                  <div class="entry-header">
                    <div class="entry-thumbnail">
                    <a href="#"><img class="img-fluid" src="/gitbook/assets/img/main/profile.jpg" alt="Image"/></a>
                    </div>
                  </div>
                  <div class="post-content">
                    <div class="card-content">
                      <h5>닉네임과 사진을 등록해보세요.</h5>
                    </div>
                    <Link to={`/gitbook/my/${sessionStorage.getItem("authUserId")}/profile`} class="kafe-btn kafe-btn-mint full-width"> Profile</Link>		  
                  </div>							
                </div>
              </div>
		        </div>
            <div class="col-lg-3">
              <div class="tr-section">
                <div class="tr-post">
                  <div class="entry-header">
                    <div class="entry-thumbnail">
                    <a href="#"><img class="img-fluid" src="/gitbook/assets/img/main/timeline.jpg" alt="Image"/></a>
                    </div>
                  </div>
                  <div class="post-content">
                    <div class="card-content">
                      <h5>타임라인에 최근 소식을 올려보세요.</h5>
                    </div>
                    <Link to="/gitbook/upload" class="kafe-btn kafe-btn-mint full-width"> Timeline</Link>		  
                  </div>							
                </div>
              </div>
		        </div>
            <div class="col-lg-3">
              <div class="tr-section">
                <div class="tr-post">
                  <div class="entry-header">
                    <div class="entry-thumbnail">
                    <a href="#"><img class="img-fluid" src="/gitbook/assets/img/main/repository.jpg" alt="Image"/></a>
                    </div>
                  </div>
                  <div class="post-content">
                    <div class="card-content">
                      <h5>레파지토리로 소스를 관리해보세요.</h5>
                    </div>
                    <Link to={`/gitbook/my/${sessionStorage.getItem("authUserId")}/repository/write`} class="kafe-btn kafe-btn-mint full-width"> Repository</Link>		  
                  </div>							
                </div>
              </div>
		        </div>
            <div class="col-lg-3">
              <div class="tr-section">
                <div class="tr-post">
                  <div class="entry-header">
                    <div class="entry-thumbnail">
                    <a href="#"><img class="img-fluid" src="/gitbook/assets/img/main/group.jpg" alt="Image"/></a>
                    </div>
                  </div>
                  <div class="post-content">
                    <div class="card-content">
                      <h5>그룹 프로젝트를 시작해보세요.</h5>
                    </div>
                    <Link to="/gitbook/mygroup/regist" class="kafe-btn kafe-btn-mint full-width"> Group</Link>		  
                  </div>							
                </div>
              </div>
		        </div>
            </div>
          </div>

    );
  }

}

export default MainTimelineList;