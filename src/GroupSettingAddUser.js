import React, {Component} from 'react';
import GroupSettingAddUserItem from './GroupSettingAddUserItem';


class GroupSettingAddUser extends Component {
  render() {
    
    return (
      <div className="group-req-setting">
        <div className="group-search-area">   
            <p><h4 className="group-req-title"><b>그룹 초대</b></h4></p>
            <div className="group-input-field">
                <input placeholder="Search" type="text"/>
                <i className="fa fa-search"></i>  
            </div>
        </div>
        <GroupSettingAddUserItem></GroupSettingAddUserItem>
      </div>
    );
  }

}

export default GroupSettingAddUser;
