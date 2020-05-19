import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GroupRepositoryListItem from './GroupRepositoryListItem';



class GroupRepositoryListPage extends Component {
  render() {
   
    return (
            <div>
                <div className = "row">
                  <div className="search-area" style={{width:"50%", display:"inline-block"}}>  
                    <div className="input-field" >
                      <input placeholder="Search" type="text"></input>
                        <i className="fa fa-search"></i>
                      </div>
                  </div>
                  <Link to="/group/repository/write" className="kafe-btn kafe-btn-mint-small" style={{ float:"right", margin:"2%",}}>New!</Link>               
                </div>
                <hr></hr>
                
                <GroupRepositoryListItem color="red"></GroupRepositoryListItem>
                <GroupRepositoryListItem color="#0FC19E"></GroupRepositoryListItem>
                <GroupRepositoryListItem color="red"></GroupRepositoryListItem>
                <GroupRepositoryListItem color="#0FC19E"></GroupRepositoryListItem>
                <GroupRepositoryListItem color="red"></GroupRepositoryListItem>
                <GroupRepositoryListItem color="#0FC19E"></GroupRepositoryListItem>

            </div>      
    );
  }
}

export default GroupRepositoryListPage;
