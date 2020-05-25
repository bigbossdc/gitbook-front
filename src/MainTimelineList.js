import React, { Component } from 'react';
import TimeLineItem from './TimelineItem';


class MainTimelineList extends Component {
  render() {
   
    return (
      <div className="followers-list">
          <TimeLineItem/>
          <TimeLineItem/>
          <TimeLineItem/>
          <TimeLineItem/>
          <TimeLineItem/>
          <TimeLineItem/>
          <TimeLineItem/>
      </div>
    );
  }
}

export default MainTimelineList;
