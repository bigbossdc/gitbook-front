import React, { Component } from "react";
//import './Fluffs/assets/css/demos/photo.css';
import './Fluffs/assets/css/demos/group.css';
import './Fluffs/assets/css/demos/groupTab.css';
import GroupSettingInfo from './GroupSettingInfo';
import GroupSettingAddUser from './GroupSettingAddUser';
import GroupSettingDeleteUser from './GroupSettingDeleteUser';
import GroupHeaderImg from "./GroupHeaderImg";

{/*그룹 설정 페이지 - 그룹장만 접근 가능*/}
class GroupSetting extends Component {

    constructor() {
        super(...arguments);
        this.state = {
            currentTabObj : <GroupSettingInfo/>,
        }
    }

    render() {

        return(  
            <div>
                <div className="gtab">
                    <button className="tablinks" onClick={() => this.setState({currentTabObj : <GroupSettingInfo/>})}>기본정보관리</button>
                    <button className="tablinks" onClick={() => this.setState({currentTabObj : <GroupSettingAddUser/>})}>맴버추가관리</button>
                    <button className="tablinks" onClick={() => this.setState({currentTabObj : <GroupSettingDeleteUser/>})}>맴버탈퇴관리</button>
                </div>

                <div>
                    {this.state.currentTabObj}
                </div>

            </div>
        
        );
    }
}


export default GroupSetting;