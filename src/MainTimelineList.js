import React, { Component } from 'react';
import "./TimelineItem.css"

import TimelineItem from './TimelineItem';
import TimelineNoItem from './TimelineNoItem';


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
 
    return (
      <div >
        { (this.state.timelineItemList&&this.state.timelineItemList =='show')?
          <TimelineNoItem/>
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
  componentWillUnmount(){
    window.removeEventListener('scroll',this._infiniteScroll,true);
  }

}

export default MainTimelineList;