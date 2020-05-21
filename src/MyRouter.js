import React, {Component} from 'react';
import { Route } from "react-router-dom";
import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import MyTimelinePage from './MyTimelinePage';
import MainCalendar from './MainCalendar';
import MyRepositoryListPage from './MyRepositoryListPage';
import MyRepositoryPage from './MyRepositoryPage';
import MyRepositoryWritePage from './MyRepositoryWritePage';
import ProfileAndAccount from './ProfileAndAccount';

{/*Group Navigation 사용하는 그룹 관련 페이지 - 그룹 타임라인, 그룹 관리*/}
class MyRouter extends Component {
  render() {

    return (
      <div className="App" >
       <Header></Header>
       <Header2 name="MyTimeline"></Header2>
        <section className="profile-two" style={{paddingTop:"225px"}}>
          <div className="container-fluid">
            <div className="row">
              
                  <Navigation></Navigation>  {/** 네비게이션 */}
                
                  {/** 두번째 섹션 */}
                  <div className="col-lg-6" style={{background: "#fff",marginTop:"1px"}}>             
                  <Route  path="/gitbook/my" exact component={MyTimelinePage}/>
                  <Route  path="/gitbook/my/repository" exact component={MyRepositoryListPage}/>
                  <Route  path="/gitbook/my/repository/detail" component={MyRepositoryPage}/>
                  <Route  path="/gitbook/my/repository/write" component={MyRepositoryWritePage}/>
                  <Route  path="/gitbook/my/schedule" component={MainCalendar} onModal={(open)=> this.setState(open)} onDayClick={(day) => this.setState({ day })}/>
                  <Route  path="/gitbook/my/profile" component={ProfileAndAccount} />
                  <Route  path="/gitbook/my/account" component={ProfileAndAccount} />
                  
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
