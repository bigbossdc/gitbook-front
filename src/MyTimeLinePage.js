import React, {Component} from 'react';
import TimelineItem from './TimelineItem';
import MyTimeLinePageGuide from './MyTimeLinePageGuide';


class MyTimelinePage extends Component {
  constructor(){
    super(...arguments);
    this.state={
      timelineItemList:'', 
      num:5,
      item:''        
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

    return (
      <div> 
         { this.state.item && this.state.item == '' ? '' : this.state.item=='noshow'? <MyTimeLinePageGuide groupno={this.props.groupno} userid={this.props.userid}/>
  
          : ((sessionStorage.getItem("authUserId")===this.props.userid)?
        
            this.state.timelineItemList && 
            this.state.timelineItemList
            .map((list,index)=> 
            (index<this.state.num)?
            <TimelineItem 
            key={list.no}
            list={list}
            mathcid={this.props.userid}
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
            mathcid={this.props.userid}/>
            :''
            )

          )
        }

      </div>
    );
  }
  componentDidMount() {
    fetch(`${global.API_URL}/gitbook/timeline/${this.props.userid}/list`, {
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
export default MyTimelinePage;
