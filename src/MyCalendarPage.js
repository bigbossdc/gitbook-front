import React, {Component} from 'react';

import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';

import MainCalendar from './MainCalendar'; 

class MyCalendarPage extends Component {


  render() {
  
    return (
      <div className="App">
       <Header></Header>
       <Header2 name="MyTimeline"></Header2>
       <section className="profile-two">
       <div className="container-fluid">
        <div className="row">
              <Navigation></Navigation>  {/** 네비게이션 */}

              {/** 두번째 섹션 */}
              <div className="col-lg-6">
              <MainCalendar/>
              </div>

              {/** 두번째 섹션 */}
              {/** 세번째 섹션 */}
              <Navigation2></Navigation2>
              {/** 세번째 섹션 */}

        </div>{/** row 종료 */}
       </div>{/** container-fluid 종료 */}
       </section>{/** profile-twd 종료 */}
      </div>
    );
  }

}

export default MyCalendarPage;
