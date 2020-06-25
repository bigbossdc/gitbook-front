import React, {Component} from 'react';
import GroupSettingAddUserItem from './GroupSettingAddUserItem';


class GroupSettingAddUser extends Component {

  constructor(props) {
    super(props);
    this.state = {
          reqList: '',
          keyword: '',
          item: ''
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
  
      <div className="group-req-setting" style={{borderRadius:"0px 0px 20px 20px"}}>
          <p><h4 className="group-req-title"><b>그룹 초대</b></h4></p>
          <div className="group-search-area">   
              <div className="group-input-field">
                  <input placeholder="Search" type="text" value={this.state.keyword} onChange={this.onInputChange.bind(this)}/>
                  <i className="fa fa-search"></i>  
              </div>
          </div>
        {this.state.item && this.state.item == '' ? '' : this.state.item=='noshow'?                      
          <div className="col-lg-12">
              <div className="navi-nocontents" style={{margin:"150px auto"}}>
              <p style={{textAlign:"center", marginBottom:"30px", color:"#5b6160"}}><i class="fas fa-meh fa-4x" style={{margin:"0 auto"}}></i></p>
              <p className="navi-text" style={{fontSize:"1.5em"}}><b>초대 가능한 멤버가 없습니다.</b></p>
              <p className="navi-text" style={{fontSize:"1.2em"}}>검색 기능을 통해 친구 추가 후 그룹에 초대해보세요.</p>
              </div>
          </div>           
        :<div className="group-box">
            <div className="suggestions-list" style={{overflowY:"auto", height:"500px"}}>
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
        }

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
          if(json.data.length > 0) {
            this.setState({
              reqList: json.data,
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

export default GroupSettingAddUser;
