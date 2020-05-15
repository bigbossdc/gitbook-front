import React, {Component} from 'react';

import Header from './Header';
import Header2 from './Header2';
import NavigationGroup from './NavigationGroup';
import NavigationGroup2 from './NavigationGroup2';
import TimelineItem from './TimelineItem';
import GroupHeaderImg from './GroupHeaderImg';


class GroupTimeLinePage extends Component {
  render() {
    
    return (
      <div>
              <GroupHeaderImg></GroupHeaderImg>
              <TimelineItem></TimelineItem>
              <TimelineItem></TimelineItem>
              <TimelineItem></TimelineItem>
              <TimelineItem></TimelineItem>
              <TimelineItem></TimelineItem>
      </div>
    );
  }
}

export default GroupTimeLinePage;
