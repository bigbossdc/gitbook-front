import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MyRepositoryListItem from './MyRepositoryListItem';

class MyRepositoryListPage extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: '',
      repositorylist: ''
    }
  }
  onInputChange(e){
    this.setState({
        keyword: e.target.value
    })
  }
  callDeleteRepoList(gitItem){
    fetch(`${global.API_URL}/gitbook/Repository/${this.props.id}/delete`, {
      method: 'post',
      headers: global.API_HEADERS,
      body: JSON.stringify(gitItem)
  })
  .then( response => response.json())
  .then( json => {
      this.setState({
        repositorylist: json.data
      });
  })
  .catch( err => console.error( err ));  
  
}
callVisibleHandler(list){
  fetch(`${global.API_URL}/gitbook/Repository/${this.props.id}/update`, {
    method: 'post',
    headers: global.API_HEADERS,
    body: JSON.stringify(list)
})
.then( response => response.json())
.then( json => {
    console.log("update:"+json.data)
    this.setState({
      repositorylist: json.data
    });
})
.catch( err => console.error( err ));  

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

                  { (this.props.id == sessionStorage.getItem("authUserId") ) ?
                  <Link to={`/gitbook/my/${sessionStorage.getItem("authUserId")}/repository/write`} className="kafe-btn kafe-btn-mint-small" style={{ float:"right", margin:"2%",}}>New!</Link> : '' 
                  
                  }             

                </div>
                <hr></hr>
                {this.state.repositorylist && this.state.repositorylist
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
                  path={this.props.id}
                  callDelete={{
                    delete: this.callDeleteRepoList.bind(this),
                    update: this.callVisibleHandler.bind(this)
                 }}
                
                />)}


            </div>      
    );
  }

  componentDidMount() {
    fetch(`${global.API_URL}/gitbook/Repository/${this.props.id}/list`, {
        method: 'get',
        headers:global.API_HEADERS
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
          repositorylist: json.data
        });
    })
    .catch( err => console.error( err ));      
}
  }
export default MyRepositoryListPage;
