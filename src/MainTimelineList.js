import React, { Component } from 'react';
import "./TimelineItem.css"

import TimelineItem from './TimelineItem';


class MainTimelineList extends Component {
  constructor(){
    super(...arguments);
    this.state={
      timelineItemList:'',
      num:5    }
  }

 _infiniteScroll=()=>{
  let scrollHeight =Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
  let scrollTop= Math.max(document.documentElement.scrollTop,document.body.scrollTop);
  let clientHeight = document.documentElement.clientHeight;

  if(scrollTop + clientHeight === scrollHeight){
      this.setState({
        num: this.state.num+5
      })

  }
 }
  render() {
    console.log("길이"+this.state.timelineItemList)
    return (
      <div >
        { (this.state.timelineItemList&&this.state.timelineItemList =='show')?
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
                    <a href="" class="kafe-btn kafe-btn-mint full-width"> Profile</a>		  
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
                    <a href="" class="kafe-btn kafe-btn-mint full-width"> Timeline</a>		  
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
                    <a href="" class="kafe-btn kafe-btn-mint full-width"> Repository</a>		  
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
                    <a href="" class="kafe-btn kafe-btn-mint full-width"> Group</a>		  
                  </div>							
                </div>
              </div>
		        </div>
            </div>
          </div>
         :
          (this.state.timelineItemList&&this.state.timelineItemList !=='')?
          <div className="followers-list">
            {this.state.timelineItemList && 
            this.state.timelineItemList
            .map((list,index)=>
           (index<this.state.num)?
            <TimelineItem 
            key={list.no}
            list={list}
            mathcid={sessionStorage.getItem("authUserId")}
            />:''
            )
            }
            </div>:''
        }

      </div>
    );
  }

  componentDidMount() {
   
  fetch(`${global.API_URL}/gitbook/timeline/${this.props.userid}/mainlist`, {
      method: 'get',
      headers:global.API_HEADERS
  })
  .then( response => response.json())
  .then( json => {
    console.log(json.data)
    if(json.data.length > 0){
      this.setState({
        timelineItemList: json.data
      });
    }else{
      this.setState({
        timelineItemList: 'show'
      });
    }


  })
  .catch( err => console.error( err )); 
 
  window.addEventListener('scroll',this._infiniteScroll,true);
  
  }

}

export default MainTimelineList;