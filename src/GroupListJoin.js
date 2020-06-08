import React, { Component } from "react";
//import './Fluffs/assets/css/demos/photo.css';
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
                <div className="group-search-area">   
                    <p><h4 className="group-req-title"><b>참여중인 그룹</b></h4></p>
                    <div className="group-input-field">
                        <input placeholder="Search" type="text" value={this.state.keyword} onChange={this.onInputChange.bind(this)}/>
                        <i className="fa fa-search"></i>  
                    </div>
                </div>
                <section class="notifications">
                    <ul className="group-list">
                        { this.props.grouplist && this.props.grouplist
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