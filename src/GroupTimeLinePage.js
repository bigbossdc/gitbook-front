import React, {Component} from 'react';

import Header from './Header';
import Header2 from './Header2';
import NavigationGroup from './NavigationGroup';
import NavigationGroup2 from './NavigationGroup2';
import TimelineItem from './TimelineItem';
import MyTimeLinePageGuide from './MyTimeLinePageGuide';



class GroupTimeLinePage extends Component {
  constructor(){
    super(...arguments);
    this.state={
      timelineItemList:'',
      num: 5,
      item: ''
    }
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
    console.log("!@#!#@!#!" + this.state.item)
    return (
      <div>
          { this.state.item && this.state.item == '' ? '' : this.state.item=='noshow'? <MyTimeLinePageGuide groupno={this.props.groupno}/>


          
          
          : ((sessionStorage.getItem("authUserId")===this.props.userid)?
        
            this.state.timelineItemList && 
            this.state.timelineItemList
            .map((list,index)=> 
            (index<this.state.num)?
            <TimelineItem 
            key={list.no}
            list={list}
            matchid={list.userNo}
            />:''
            ):
            
            this.state.timelineItemList && 
            this.state.timelineItemList
            .filter((list)=>
                  list.visible != 'private'
            )
            .map((list,index)=> 
            (index<this.state.num)?
            <TimelineItem 
            key={list.no}
            list={list}
            matchid={list.userNo}/>
            :''
            )

          )
        }

      </div>
    );
  }

  componentDidMount() {
    fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserNo")}/list/${this.props.groupno}`, {
      method: 'get',
      headers:global.API_HEADERS
  })
  .then( response => response.json())
  .then( json => {
      if(json.data.length > 0) {
        this.setState({
          timelineItemList: json.data,
          item: "show"
        });

      } else {
        this.setState({
          item: "noshow"
        })
      }
  })
  .catch( err => console.error( err )); 

  window.addEventListener('scroll',this._infiniteScroll,true);
  }

  componentWillUnmount(){
    window.removeEventListener('scroll',this._infiniteScroll,true);
  }

}

export default GroupTimeLinePage;
