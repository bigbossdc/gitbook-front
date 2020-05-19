import React, {Component} from 'react';

import TimelineItem from './TimelineItem';


class MyTimelinePage extends Component {
  render() {
    
    return (
      <div> 
        <TimelineItem></TimelineItem>
        <TimelineItem></TimelineItem>
        <TimelineItem></TimelineItem>
        <TimelineItem></TimelineItem>
      </div>
    );
  }

}

export default MyTimelinePage;
