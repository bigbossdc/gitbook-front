import React, {Component} from 'react';
import { Route } from "react-router-dom";
import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import GroupInfo from './GroupInfo';
import GroupList from './GroupList';
import GroupRegist from './GroupRegist';

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
                  <Route path="/gitbook/mygroup" exact component={GroupList}/>
                  <Route path="/gitbook/mygroup/info" component={GroupInfo}/>
                  <Route path="/gitbook/mygroup/regist" component={GroupRegist}/>
                 
                  
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
