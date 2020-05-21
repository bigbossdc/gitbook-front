import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MyRepositoryListItem from './MyRepositoryListItem';
import data from './datajson/data.json';
import { relativeTimeThreshold } from 'moment';
class MyRepositoryListPage extends Component {
  constructor(){
    super(...arguments);
    this.state={
      repositorylist: data
    }
  }
  
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
                {this.state.repositorylist && this.state.repositorylist.map(list => <MyRepositoryListItem
                  key={list.id}
                  id={list.id}
                  userNo={list.userNo}
                  GroupNo={list.GroupNo}
                  discription={list.discription}
                  gitName={list.gitName}
                  visible={list.visible}
                
                />)}


                {/* <MyRepositoryListItem key="public" repositorylist={this.state.repositorylist && this.state.repositorylist.filter(list => list.visible == "private")} />
                <MyRepositoryListItem key="private" repositorylist={this.state.repositorylist && this.state.repositorylist.filter(list => list.visible == "private")} /> */}
               

            </div>      
    );
  }
}

export default MyRepositoryListPage;
