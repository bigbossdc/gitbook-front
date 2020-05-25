import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MyRepositoryListItem from './MyRepositoryListItem';
import data from './datajson/data.json';






class MyRepositoryListPage extends Component {
  constructor(props){
    super(props);
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
                  <Link to={`/gitbook/my/${this.props.match.params.userid}/repository/write`} className="kafe-btn kafe-btn-mint-small" style={{ float:"right", margin:"2%",}}>New!</Link>               
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
                  userinfo={this.props.match.params.userid}              
                />)}


                {/* <MyRepositoryListItem key="public" repositorylist={this.state.repositorylist && this.state.repositorylist.filter(list => list.visible == "private")} />
                <MyRepositoryListItem key="private" repositorylist={this.state.repositorylist && this.state.repositorylist.filter(list => list.visible == "private")} /> */}
               

            </div>      
    );
  }
}

export default MyRepositoryListPage;
