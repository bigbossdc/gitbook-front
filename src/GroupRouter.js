import React, {Component} from 'react';
import { Route } from "react-router-dom";
import Header from './Header';
import Header2 from './Header2';
import NavigationGroup from './NavigationGroup';
import NavigationGroup2 from './NavigationGroup2';
import GroupSetting from './GroupSetting';
import GroupTimeLinePage from './GroupTimeLinePage';
import MainCalendar from './MainCalendar';
import GroupHeaderImg from './GroupHeaderImg';
import GroupRepositoryListPage from './GroupRepositoryListPage';
import GroupRepositoryWritePage from './GroupRepositoryWritePage';
import GroupRepositoryPage from './GroupRepositoryPage';

{/*Group Navigation 사용하는 그룹 관련 페이지 - 그룹 타임라인, 그룹 관리*/}
class GroupRouter extends Component {
  render() {

    return (
      <div className="App" >
       <Header></Header>
       <Header2 name="Group"></Header2>
        <section className="profile-two" style={{paddingTop:"225px"}}>
          <div className="container-fluid">
            <div className="row">
              
                  <NavigationGroup></NavigationGroup>  {/** 네비게이션 */}
                
                  {/** 두번째 섹션 */}
                  <div className="col-lg-6" style={{background: "#fff",marginTop:"1px"}}>             
                  <GroupHeaderImg></GroupHeaderImg>

                  <Route  path="/gitbook/group" exact component={GroupTimeLinePage}/>
                  <Route  path="/gitbook/group/setting" exact component={GroupSetting}/>
                  <Route  path="/gitbook/group/repository" exact component={GroupRepositoryListPage}/>
                  <Route  path="/gitbook/group/repository/detail" exact component={GroupRepositoryPage}/>
                  <Route  path="/gitbook/group/repository/write" exact component={GroupRepositoryWritePage}/>
                  <Route  path="/gitbook/group/schedule"  exact component={MainCalendar} onModal={(open)=> this.setState(open)} onDayClick={(day) => this.setState({ day })}/>

                  </div>
              
                  {/** 세번째 섹션 */}
                  <NavigationGroup2></NavigationGroup2>

            </div>{/** row 종료 */}
          </div>{/** container-fluid 종료 */}
        </section>{/** profile-twd 종료 */}
      </div>
    );
  }

}

export default GroupRouter;
