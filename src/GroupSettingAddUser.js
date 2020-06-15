import React, {Component} from 'react';
import GroupSettingAddUserItem from './GroupSettingAddUserItem';


class GroupSettingAddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
          reqList: '',
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

  // 그룹 멤버 추가 요청
  callbackReqFollow(userno, groupno) {
      fetch(`${global.API_URL}/gitbook/group/request`, {
      method: 'post',
      headers: global.API_HEADERS,
      body:JSON.stringify({
              userno: userno,
              groupno: groupno,
          })
      })
      .then(response => response.json())
      .then(json => {
      this.setState({
              reqList: json.data
          });
      })
      .catch(err => console.error(err))
  }

  render() {
    
    return (
      <div className="group-req-setting">
        <div className="group-search-area">   
            <p><h4 className="group-req-title"><b>그룹 초대</b></h4></p>
            <div className="group-input-field">
                <input placeholder="Search" type="text" value={this.state.keyword} onChange={this.onInputChange.bind(this)}/>
                <i className="fa fa-search"></i>  
            </div>
        </div>
        <div className="group-box">
          <div className="suggestions-list">
            {this.state.reqList && this.state.reqList
              .filter((element) => element.nickname.indexOf(this.state.keyword) != -1 || element.name.indexOf(this.state.keyword) != -1 || element.id.indexOf(this.state.keyword) != -1)
              .map(list =>  <GroupSettingAddUserItem
                key={ list.id }
                nickname={list.nickname}
                name={list.name}
                id={list.id}
                image={list.image}
                status={list.status}
                no={list.no}
                groupno={list.groupNo}
                follow={this.callbackReqFollow.bind(this)}
              />)
            }   
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
        fetch(`${global.API_URL}/gitbook/group/reqlist`, {
          method: 'post',
          headers: global.API_HEADERS,
          body: JSON.stringify({
              userno : this.props.userno,
              groupno: this.props.groupno
            })
        })
        .then( response => response.json())
        .then( json => {
            this.setState({
            reqList: json.data    
            });
        })
        .catch( err => console.error( err ));    
  }
}

export default GroupSettingAddUser;
