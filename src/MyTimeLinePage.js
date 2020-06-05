import React, {Component} from 'react';
import TimelineItem from './TimelineItem';


class MyTimelinePage extends Component {
  constructor(){
    super(...arguments);
    this.state={
      timelineItemList:''       
    }
  }
  

  render() {
    return (
      <div> 
        { (sessionStorage.getItem("authUserId")===this.props.userid)?
        
        this.state.timelineItemList && 
        this.state.timelineItemList
        .map((list)=> <TimelineItem 
        key={list.no}
        list={list}
        mathcid={this.props.userid}
        />):
        
        this.state.timelineItemList && 
        this.state.timelineItemList
        .filter((list)=>
              list.visible != 'private'
        )
        .map((list)=> <TimelineItem 
        key={list.no}
        list={list}
        mathcid={this.props.userid}/>)
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
   
      this.setState({
        timelineItemList: json.data
      });
  })
  .catch( err => console.error( err )); 


  }
}
export default MyTimelinePage;
