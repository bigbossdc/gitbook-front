import React, { Component } from "react";
import './Fluffs/assets/css/demos/group.css';
import './Fluffs/assets/css/demos/groupTab.css';
import GroupSettingInfo from './GroupSettingInfo';
import GroupSettingAddUser from './GroupSettingAddUser';
import GroupSettingDeleteUser from './GroupSettingDeleteUser';

{/*그룹 설정 페이지 - 그룹장만 접근 가능*/}
class GroupSetting extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            currentTabObj : <GroupSettingInfo 
                                userno={this.props.userno}
                                groupno={this.props.groupno}
                                changeInfo={this.props.changeInfo}/>,
            tabKind : "info"
        }
    }

    render() {
        console.log("tab chk " + this.state.tabKind)
        return(  
            <div>
                <div className="gtab">
                    <button className={this.state.tabKind === "info" ? "tabclick" : "tablinks"} 
                            onClick={() => this.setState({currentTabObj : <GroupSettingInfo    
                                                                            userno={this.props.userno}
                                                                            groupno={this.props.groupno}
                                                                            changeInfo={this.props.changeInfo}
                                                                            />,
                                                            tabKind:"info"})}>기본정보관리</button>

                    <button className={this.state.tabKind === "add" ? "tabclick" : "tablinks"} 
                            onClick={() => this.setState({currentTabObj : <GroupSettingAddUser 
                                                                            userno={this.props.userno}
                                                                            groupno={this.props.groupno}
                                                                            />,
                                                            tabKind:"add"})}>맴버추가관리</button>

                    <button className={this.state.tabKind === "delete" ? "tabclick" : "tablinks"}
                            onClick={() => this.setState({currentTabObj : <GroupSettingDeleteUser 
                                                                            userno={this.props.userno}
                                                                            groupno={this.props.groupno}
                                                                            changeList={this.props.changeList}
                                                                           />,
                                                            tabKind:"delete"})}>맴버탈퇴관리</button>
                </div>
                <div>
                    {this.state.currentTabObj}
                </div>
            </div>
        );
    }
}
export default GroupSetting;