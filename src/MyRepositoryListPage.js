import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MyRepositoryListItem from './MyRepositoryListItem';

class MyRepositoryListPage extends Component {
  constructor(props){
    super(props);
    this.state={

      keyword: ''
    }
  }
  onInputChange(e){
    this.setState({
        keyword: e.target.value
    })
   
  }
  render() {
    const authUserNo=sessionStorage.getItem("authUserNo");

    return (
            <div>
                <div className = "row">
                  <div className="search-area" style={{width:"50%", display:"inline-block"}}>  
                    <div className="input-field" >
                     
                     
                      <input placeholder="Search" type="text" value={ this.state.keyword } onChange={ this.onInputChange.bind(this) 
                       
 
                      }></input>
                        <i className="fa fa-search"></i>
                      </div>
                  </div>

                  <Link to={`/gitbook/my/${this.props.match.params.userid}/repository/write`} className="kafe-btn kafe-btn-mint-small" style={{ float:"right", margin:"2%",}}>New!</Link>               

                </div>
                <hr></hr>
                {this.props.repositorylist && this.props.repositorylist
                .filter((list) => list.gitName.indexOf(this.state.keyword ) != -1 && ((list.userNo == authUserNo ) ? 1 : list.visible == "public") ) 
                .map((list) => <MyRepositoryListItem
                  key={list.no}
                  id={list.no}
                  userNo={list.userNo}
                  GroupNo={list.GroupNo}
                  description={list.description}
                  gitName={list.gitName}
                  visible={list.visible}
                  regDate ={list.regDate}
                  list={list}
                  userinfo={this.props.match.params.userid}              

                />)}

            </div>      
    );
  }
  }
export default MyRepositoryListPage;
