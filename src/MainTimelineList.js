import React, { Component } from 'react';
import TimelineItem from './TimelineItem';


class MainTimelineList extends Component {
  // constructor(){
  //   super(...arguments);
  //   this.state={
  //     timelineItemList:''       
  //   }
  // }

  render() {
   
    return (
      <div className="followers-list">
         

        {this.props.timelineItemList && 
        this.props.timelineItemList
        .map((list)=> <TimelineItem 
        key={list.no}
        list={list}
        mathcid={sessionStorage.getItem("authUserId")}
        />)
        }
      </div>
    );
  }

  // componentDidMount() {
  //   fetch(`${global.API_URL}/gitbook/timeline/${sessionStorage.getItem("authUserId")}/mainlist`, {
  //     method: 'get',
  //     headers:global.API_HEADERS
  // })
  // .then( response => response.json())
  // .then( json => {
   
  //     this.setState({
  //       timelineItemList: json.data
  //     });
  // })
  // .catch( err => console.error( err )); 


  // }



}

export default MainTimelineList;
