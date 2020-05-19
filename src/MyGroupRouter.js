import React, {Component} from 'react';
import { BrowserRouter, Route, Router } from "react-router-dom";
import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import MyTimelinePage from './MyTimelinePage';
import GroupInfo from './GroupInfo';
import GroupSetting from './GroupSetting';
import GroupTimeLinePage from './GroupTimeLinePage';
import {render} from 'react-dom';
import GroupRegist from './GroupRegist';
import MainCalendar from './MainCalendar';
import GroupHeaderImg from './GroupHeaderImg';
import MyRepositoryListPage from './MyRepositoryListPage';
import GroupRepositoryWritePage from './GroupRepositoryWritePage';
import GroupRepositoryPage from './GroupRepositoryPage';
import MyRepositoryPage from './MyRepositoryPage';
import MyRepositoryWritePage from './MyRepositoryWritePage';
import GroupList from './GroupList';

{/*Group Navigation 사용하는 그룹 관련 페이지 - 그룹 타임라인, 그룹 관리*/}
class MyRouter extends Component {
  render() {

    return (
      <div className="App" >
       <Header></Header>
       <Header2 name="Group"></Header2>
        <section className="profile-two" style={{paddingTop:"225px"}}>
          <div className="container-fluid">
            <div className="row">
              
                  <Navigation></Navigation>  {/** 네비게이션 */}
                
                  {/** 두번째 섹션 */}
                  <div className="col-lg-6" style={{background: "#f4f4f4",marginTop:"1px"}}>             
                  <Route exact path="/mygroup" component={GroupList}/>
                  <Route exact path="/mygroup/info" component={GroupInfo}/>
                 
                  
                  </div>
              
                  {/** 세번째 섹션 */}
                  <Navigation2></Navigation2>

            </div>{/** row 종료 */}
          </div>{/** container-fluid 종료 */}
        </section>{/** profile-twd 종료 */}
      </div>
    );
  }

}

export default MyRouter;
