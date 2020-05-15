import React, {Component} from 'react';
import GroupSettingDeleteUserItem from './GroupSettingDeleteUserItem';




class GroupSettingDeleteUser extends Component {
  render() {
    
    return (
      <div className="group-req-setting">
        <div className="group-search-area">   
            <p><h4 className="group-req-title"><b>그룹 탈퇴</b></h4></p>
            <div className="group-input-field">
                <input placeholder="Search" type="text"/>
                <i className="fa fa-search"></i>  
            </div>
        </div>
        <GroupSettingDeleteUserItem></GroupSettingDeleteUserItem>
      </div>
    );
  }

}

export default GroupSettingDeleteUser;
