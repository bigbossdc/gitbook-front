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
       console.log(this.props.groupinfo.masterNo)
        return(
            
            <div className="react-transition fade-in" style={{animationDuration:'0.3s'}}>
                {(sessionStorage.getItem("authUserNo") !== this.props.groupinfo.masterNo) ? 
                <div className="friend-wrapper">
                    <div className="friend-box">
                    <i className="fas fa-cloud-showers-heavy fa-3x"></i>
                    <h4 className="friend-contents" style={{fontFamily: "'Nanum Gothic', sans-serif"}}>권한 없음!! <br/><br/>그룹장만 접근할 수 있는 페이지입니다.</h4>
                    </div>               
                </div>
                :
                <>
                <div className="gtab" style={{ boxShadow:"5px 5px 5px rgb(231, 230, 230)", borderRadius:"20px 20px 0px 0px"}}>
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
                <div style={{boxShadow:"5px 5px 5px rgb(231, 230, 230)", borderRadius:"0px 0px 20px 20px"}}>
                    {this.state.currentTabObj}
                </div>
                </>
                }

            </div>
        );
    }
}
export default GroupSetting;