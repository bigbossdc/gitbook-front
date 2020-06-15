import React, { Component } from "react";
import {Link} from "react-router-dom";

import './Fluffs/assets/css/demos/group.css';
import GroupListJoinItem from "./GroupListJoinItem";


class GroupListJoin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: ''
        }
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

    render() {
        return(   
         <div>
            <div className="group-req">
            <p><h4 className="group-req-title"><b>참여중인 그룹</b></h4></p>
            {this.props.grouplist == "" ?
                ""
                :<div className="group-search-area">   
                    <div className="group-input-field">
                        <input placeholder="Search" type="text" value={this.state.keyword} onChange={this.onInputChange.bind(this)}/>
                        <i className="fa fa-search"></i>  
                    </div>
                </div>
            }
                <section class="notifications">
                    <ul className="group-list">
                    { this.props.grouplist == "" ?
                        <div>
                            <p className="nocontents">참여중인 그룹이 없습니다. 그룹을 생성해보세요&nbsp;&nbsp;
                                <Link to="/gitbook/mygroup/regist"><i className="fa fa-plus a"></i></Link>
                            </p>
                        </div>
                        : this.props.grouplist && this.props.grouplist
                            .filter((element) => element.groupTitle.indexOf(this.state.keyword) != -1 || element.groupIntro.indexOf(this.state.keyword) != -1)
                            .map(list =>  <GroupListJoinItem
                                groupno={list.no}
                                groupTitle={list.groupTitle}
                                groupIntro={list.groupIntro}
                                regDate={list.regDate}
                                grant={list.grant}
                                image={list.image}
                                masterimage={list.masterImage}
                            />)
                    }
                    </ul>
                </section>
            </div>
        </div>
        );
    }
}


export default GroupListJoin;