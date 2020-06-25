import React, {Component} from 'react';
import GroupSettingDeleteUserItem from './GroupSettingDeleteUserItem';



class GroupSettingDeleteUser extends Component {
  constructor() {
    super(...arguments);
    this.state = {
            joinList:'',
            keyword: '',
            item:''
        };
  }

  onNotifyKeywordChange(keyword) {
    this.setState({
          keyword: keyword
      })
  }

  onInputChange(event) {
      this['onNotifyKeywordChange'](event.target.value);
   
  }


  // 그룹 멤버 탈퇴
  callbackDeleteMember(userno, groupno) {
  
    fetch(`${global.API_URL}/gitbook/group/deleteMember`, {
            method: 'post',
            headers: global.API_HEADERS,
            body:JSON.stringify({
            userno: userno,
            groupno: groupno
        })
    })
    .then(response => response.json())
    .then( json => {
            this.setState({
            joinList : json.data
        });
        // navigation2 멤버목록 동기화를 위한 기능
        this.props.changeList(this.state.joinList);
    })
    .catch(err => console.error(err))
  }

  
  render() {

    return (
      <div className="group-req-setting" style={{borderRadius:"0px 0px 20px 20px"}}>
          <p><h4 className="group-req-title"><b>그룹 탈퇴</b></h4></p>
          <div className="group-search-area">   
              <div className="group-input-field">
                  <input placeholder="Search" type="text" value={this.state.keyword} onChange={this.onInputChange.bind(this)}/>
                  <i className="fa fa-search"></i>  
              </div>
          </div>
        {this.state.item && this.state.item=='' ? '' : this.state.item=='noshow'?
          <div className="col-lg-12">
            <div className="navi-nocontents" style={{margin:"150px auto"}}>
              <p style={{textAlign:"center", marginBottom:"30px", color:"#5b6160"}}><i class="fas fa-meh fa-4x fa-4x" style={{margin:"0 auto"}}></i></p>
              <p className="navi-text" style={{fontSize:"1.5em"}}><b>참여중인 멤버가 없습니다.</b></p>
            </div>
          </div>
        :<div className="group-box">
            <div className="suggestions-list">
              {this.state.joinList && this.state.joinList
                .filter((element) => element.nickname.indexOf(this.state.keyword) != -1 || element.name.indexOf(this.state.keyword) != -1 || element.id.indexOf(this.state.keyword) != -1)
                .map(list =>  <GroupSettingDeleteUserItem
                  key={ list.id }
                  nickname={list.nickname}
                  name={list.name}
                  id={list.id}
                  image={list.image}
                  status={list.status}
                  no={list.no}
                  groupno={list.groupNo}
                  delete={this.callbackDeleteMember.bind(this)}
                />)
              }   
            </div>
          </div>
        }
      </div>
    );
  }

  componentDidMount() {
    fetch(`${global.API_URL}/gitbook/group/joinlist`, {
      method: 'post',
      headers: global.API_HEADERS,
      body: JSON.stringify({
          groupno: this.props.groupno
        })
    })
    .then( response => response.json())
    .then( json => {
      if(json.data.length > 0) {
        this.setState({
          joinList: json.data,
          item: "show"
          });
      } else {
        this.setState({
          item: "noshow"     
          });
      }

    })
    .catch( err => console.error( err ));   
  }
}

export default GroupSettingDeleteUser;
