import React, { Component } from 'react';
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
          <div style={{backgroundColor:"#F4F4F4",width:"100%",height:"100%"}}>
        <div style={{width:"700px",margin:"0px auto",borderRadius:"20px"}}>
          <img 
          src={`${global.API_URL}/gitbook/assets/img/bg/5.jpg`} 
          style={{width:"100%"}}

          
          />
      <i class="far fa-files-medical"></i>
          </div>
        
         </div>:
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
