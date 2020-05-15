import React, {Component} from 'react';
import { BrowserRouter, Route, Router } from "react-router-dom";
import Header from './Header';
import Header2 from './Header2';
import NavigationGroup from './NavigationGroup';
import NavigationGroup2 from './NavigationGroup2';
import GroupInfo from './GroupInfo';
import GroupSetting from './GroupSetting';
import GroupTimeLinePage from './GroupTimeLinePage';
import {render} from 'react-dom';
import GroupRegist from './GroupRegist';

{/*Group Navigation 사용하는 그룹 관련 페이지 - 그룹 타임라인, 그룹 관리*/}
class Group2 extends Component {
  render() {

    return (
      <div className="App" >
       <Header></Header>
       <Header2 name="Group"></Header2>
       <section className="profile-two">
       <div className="container-fluid">
        <div className="row">
          
              <NavigationGroup/>  {/** 네비게이션 */}
             
              {/** 두번째 섹션 */}
              <div className="col-lg-6" style={{background: "#f4f4f4",marginTop:"1px"}}>             
              <Route exact path="/" component={GroupTimeLinePage}/>
              <Route path="/setting" component={GroupSetting}/>
            
              </div>
              
              {/** 두번째 섹션 */}
              {/** 세번째 섹션 */}
              <NavigationGroup2></NavigationGroup2>
              {/** 세번째 섹션 */}

        </div>{/** row 종료 */}
       </div>{/** container-fluid 종료 */}
       </section>{/** profile-twd 종료 */}
      </div>
    );
  }

}

export default Group2;
