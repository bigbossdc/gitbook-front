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


class MyGroupRouter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupList:'',
      groupMaster:'',
      groupNum:''
    };
  }




  // 그룹 요청 수락
  callbackAddGroup(groupno){

  
    fetch(`${global.API_URL}/gitbook/group/addgroup`, {
        method: 'post',
        headers: global.API_HEADERS,
        body: JSON.stringify({
          userno: sessionStorage.getItem("authUserNo"),
          groupno: groupno,
        })
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
          groupList : json.data,
          groupNum: Object(json.data).length
        });
        this.callbackReqGroup();
    })
    .catch( err => console.error( err ));   
  }

    // 그룹 요청 거절
    callbackRejectGroup(groupno){
      
      fetch(`${global.API_URL}/gitbook/group/rejectgroup`, {
          method: 'post',
          headers: global.API_HEADERS,
          body: JSON.stringify({
            userno: sessionStorage.getItem("authUserNo"),
            groupno: groupno,
          })
      })
      .then( response => response.json())
      .then( json => {
          this.setState({
            groupList : json.data
          });
          this.callbackReqGroup();
      })
      .catch( err => console.error( err ));   
    }

    // 수락 및 거절 후 그룹 요청 리스트 다시 가져오기
    callbackReqGroup() {
      fetch(`${global.API_URL}/gitbook/group/myreqlist`, {
        method: 'get',
        headers: global.API_HEADERS
      })
        .then(response => response.json())
        .then(json => {
          this.setState({
            myreqList: json.data
          });
        })
        .catch(err => console.error(err));
    }


  render() {

    return (
      <div className="react-transition fade-in" style={{animationDuration:'0.3s'}}>

       {/* <Header2 name="Group"></Header2> */}
        <section className="profile-two" style={{paddingTop:"100px", minHeight:"100vh"}}>
          <div className="container-fluid">
            <div className="row">
              
                  <Navigation id={ sessionStorage.getItem("authUserId")}></Navigation> 
            
                  {/** 두번째 섹션 */}
                  <div className="col-lg-6" style={{background: "#f4f4f4"}}>             
                  <Route path="/gitbook/mygroup" exact 
                        render={() => <GroupList 
                                       groupno={this.props.match.params.groupno}
                                        grouplist={this.state.groupList} 
                                        myreqlist={this.state.myreqList}
                                        groupNum={this.state.groupNum}
                                        callback={{
                                          add: this.callbackAddGroup.bind(this),
                                          delete: this.callbackRejectGroup.bind(this)}}
                                      />}
                  />
                  <Route path="/gitbook/mygroup/:groupno/info" exact 
                                      render={() => <GroupInfo 
                                                      groupno={this.props.match.params.groupno}
                                                      callback={{
                                                        add: this.callbackAddGroup.bind(this)}}
                                                    />}
                  />
                  <Route path="/gitbook/mygroup/regist" exact 
                         render={() => <GroupRegist 
                                          grouplist={this.state.groupList} 
                                          />}
                  />
                  </div>
              
                  {/** 세번째 섹션 */}
                  <Navigation2 
                  key={sessionStorage.getItem("authUserId")+"1"}
                  userid={sessionStorage.getItem("authUserId")}
                  />

            </div>{/** row 종료 */}
          </div>{/** container-fluid 종료 */}
        </section>{/** profile-twd 종료 */}
      </div>
    );
  }

  componentDidMount() {
    fetch(`${global.API_URL}/gitbook/group/list`, {
      method: 'get',
      headers: global.API_HEADERS
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          groupList: json.data,
          groupNum: Object(json.data).length
        });
      })
      .catch(err => console.error(err));

    fetch(`${global.API_URL}/gitbook/group/myreqlist`, {
      method: 'get',
      headers: global.API_HEADERS
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          myreqList: json.data
        });
      })
      .catch(err => console.error(err));
      
  }
}

export default MyGroupRouter;
