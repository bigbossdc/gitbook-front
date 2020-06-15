import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/group.css';
import GroupListRequestItem from "./GroupListRequestItem";


class GroupListRequest extends Component {
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
        console.log("group no chk ")
        console.log(this.props.myreqlist)
        return(    
            <div className="group-req" style={{marginTop:"0px"}}>
                <p><h4 className="group-req-title"><b>그룹 요청</b></h4></p>
                {this.props.myreqlist == "" ?
                ""
                :<div>
                    <div className="group-add-btn">     
                    <Link to="/gitbook/mygroup/regist"><span><strong style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"15px"}}>그룹 생성&nbsp;&nbsp;<i className="fa fa-plus a"></i></strong></span></Link>
                    </div> 
                    <div className="group-search-area">   
                        <div className="group-input-field">
                            <input placeholder="Search" type="text" value={this.state.keyword} onChange={this.onInputChange.bind(this)}/>
                            <i className="fa fa-search"></i>  
                        </div>
                    </div>
                </div>
                }

                <section class="notifications">
                        <ul className="group-list">
                            {this.props.myreqlist == "" ?
                                <div>
                                    <p className="nocontents">새로운 요청이 없습니다. 그룹을 생성해보세요&nbsp;&nbsp;
                                        <Link to="/gitbook/mygroup/regist"><i className="fa fa-plus a"></i></Link>
                                    </p>
                                </div>
                                :this.props.myreqlist && this.props.myreqlist
                                .filter((element) => element.groupTitle.indexOf(this.state.keyword) != -1 || element.groupIntro.indexOf(this.state.keyword) != -1)
                                .map(list =>  <GroupListRequestItem
                                    groupno={list.no}
                                    groupTitle={list.groupTitle}
                                    groupIntro={list.groupIntro}
                                    regDate={list.regDate}
                                    grant={list.grant}
                                    image={list.image}
                                    masterimage={list.masterImage}
                                    callback={this.props.callback}
                                />)
                            }
                        </ul>
                </section>
            </div>
        );
    }
}
export default GroupListRequest;