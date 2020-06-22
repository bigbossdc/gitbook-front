import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import GroupRepositoryListItem from './GroupRepositoryListItem';
import './MyRepositoryListPage.css';
import MyRepositoryListPageGuide from './MyRepositoryListPageGuide';
class MyRepositoryListPage extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: '',
      repositorylist: '',
      item:''
    }
  }
  onInputChange(e){
    this.setState({
        keyword: e.target.value
    })
  }
  callDeleteRepoList(gitItem){
    fetch(`${global.API_URL}/gitbook/Repository/${this.props.id}/group/delete`, {
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
  fetch(`${global.API_URL}/gitbook/Repository/${this.props.id}/group/update`, {
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
    console.log("chkkkkk :" + this.props.id + ":" + this.props.groupno)
    const authUserNo=sessionStorage.getItem("authUserNo");
    return (
            <div>
              { this.state.item && this.state.item == '' ? '' : this.state.item=='noshow' ?   
                <MyRepositoryListPageGuide groupno={this.props.groupno}/>
                :
                <div>
                <div className = "row">
                  <div className="search-area" style={{width:"50%", display:"inline-block"}}>  
                    <div className="input-field" style={{border:"1px solid #DBDBDB ",height:"50px",borderRadius:"5px"}} >
                  
                      <input style={{fontSize:"1.4em"}}
                             id="searchInput" placeholder="Search" 
                             type="text" value={ this.state.keyword } 
                             onChange={ this.onInputChange.bind(this) }/>
                        <i style={{marginTop:"5px"}} className="fa fa-search"></i>
                      </div>
                  </div> 
                  { 
                  (this.props.id == sessionStorage.getItem("authUserNo") ) ?
                    <Link 
                      to={`/gitbook/group/${this.props.groupno}/${sessionStorage.getItem("authUserNo")}/repository/write`} 
                      className="kafe-btn kafe-btn-mint-small" 
                      style={{ float:"right", marginTop:"25px",width:"50px",height:"34px"}}><strong style={{color:"#FFFFFF",fontSize:"1.4em",margin:"auto"}}>New!</strong></Link> : '' 
 
                  }             

                </div>
                <hr style={{backgroundColor:"#DBDBDB",height:"1px",margin:"0px"}}></hr>
                {this.state.repositorylist && this.state.repositorylist
                .filter((list) => list.gitName.indexOf(this.state.keyword ) != -1 && ((list.userNo == authUserNo ) ? 1 : list.visible == "public") ) 
                .map((list) => <GroupRepositoryListItem
                  key={list.no}
                  id={list.no}
                  userNo={list.userNo}
                  groupNo={list.groupNo}
                  description={list.description}
                  gitName={list.gitName}
                  visible={list.visible}
                  regDate ={list.regDate}
                  userId={list.userId}
                  list={list}
                  path={this.props.id}
                  callDelete={{
                    delete: this.callDeleteRepoList.bind(this),
                    update: this.callVisibleHandler.bind(this)
                 }}
                
                />)}
                </div>
              }

            </div>      
    );
  }

  componentDidMount() {
    fetch(`${global.API_URL}/gitbook/Repository/${this.props.id}/grouplist/${this.props.groupno}/${sessionStorage.getItem("authUserNo")}`, {
        method: 'get',
        headers:global.API_HEADERS
    })
    .then( response => response.json())
    .then( json => {
      if(json.data.length > 0) {
        this.setState({
          repositorylist: json.data,
          item: "show"
        });

      } else {
        this.setState({
          item: "noshow"
        })
      }
  })
    .catch( err => console.error( err ));      
}
  }
export default MyRepositoryListPage;