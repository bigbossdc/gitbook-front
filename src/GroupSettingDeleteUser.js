import React, {Component} from 'react';
import GroupSettingDeleteUserItem from './GroupSettingDeleteUserItem';



class GroupSettingDeleteUser extends Component {
  constructor() {
    super(...arguments);
    this.state = {
            joinList:'',
            keyword: ''
        };
  }

  onNotifyKeywordChange(keyword) {
    this.setState({
          keyword: keyword
      })
  }

  onInputChange(event) {
      this['onNotifyKeywordChange'](event.target.value);
      console.log(event.target.value);
  }


  // 그룹 멤버 탈퇴
  callbackDeleteMember(userno, groupno) {
    console.log("group delte 확인" + groupno + ":" + userno);
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
      <div className="group-req-setting">
        <div className="group-search-area">   
            <p><h4 className="group-req-title"><b>그룹 탈퇴</b></h4></p>
            <div className="group-input-field">
                <input placeholder="Search" type="text" value={this.state.keyword} onChange={this.onInputChange.bind(this)}/>
                <i className="fa fa-search"></i>  
            </div>
        </div>
        <div className="group-box">
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
        this.setState({
        joinList: json.data    
        });
    })
    .catch( err => console.error( err ));   
  }
}

export default GroupSettingDeleteUser;
