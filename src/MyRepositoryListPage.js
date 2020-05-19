import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MyRepositoryListItem from './MyRepositoryListItem';

class MyRepositoryListPage extends Component {
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
                  <Link to="/my/repository/write" className="kafe-btn kafe-btn-mint-small" style={{ float:"right", margin:"2%",}}>New!</Link>               
                </div>
                <hr></hr>
                
                <MyRepositoryListItem color="red"></MyRepositoryListItem>
                <MyRepositoryListItem color="#0FC19E"></MyRepositoryListItem>
                <MyRepositoryListItem color="red"></MyRepositoryListItem>
                <MyRepositoryListItem color="#0FC19E"></MyRepositoryListItem>
                <MyRepositoryListItem color="red"></MyRepositoryListItem>
                <MyRepositoryListItem color="#0FC19E"></MyRepositoryListItem>

            </div>      
    );
  }
}

export default MyRepositoryListPage;
