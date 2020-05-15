import React, {Component} from 'react';

import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import RepositoryListItem from './RepositoryListItem';



class RepositoryListPage extends Component {
  render() {
    const k={
      position: "relative",
      top: "1px",
      display: "inline-block",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: "#0FC19E",
      marginTop:"2.5%",
      marginRight:"2%"
    
    }
   
    return (
      <div className="App" >
       <Header></Header>
       <Header2 name="Group"></Header2>
       <section className="profile-two">
       <div className="container-fluid">
        <div className="row">
              <Navigation></Navigation>  {/** 네비게이션 */}

              {/** 두번째 섹션 */}
              <div className="col-lg-6" style={{background: "#fff",marginTop:"1px"}}>

                <div>
                    <div className = "row">

                   
                    <div className="search-area" style={{width:"50%", display:"inline-block"}}>  
                      <div className="input-field" >
                        <input placeholder="Search" type="text"></input>
                          <i className="fa fa-search"></i>
                       </div>
                    </div>
                    <a href="/" className="kafe-btn kafe-btn-mint-small" style={{ float:"right", margin:"2%",}}>New!</a>
                  
                    </div>
                    <hr></hr>
                   
                   <RepositoryListItem color="red"></RepositoryListItem>
                   <RepositoryListItem color="#0FC19E"></RepositoryListItem>
                   <RepositoryListItem color="red"></RepositoryListItem>
                   <RepositoryListItem color="#0FC19E"></RepositoryListItem>
                   <RepositoryListItem color="red"></RepositoryListItem>
                   <RepositoryListItem color="#0FC19E"></RepositoryListItem>

                </div>
              
             
              </div>{/** 두번째 섹션 */}
              {/** 세번째 섹션 */}
              <Navigation2></Navigation2>
              {/** 세번째 섹션 */}

        </div>{/** row 종료 */}
       </div>{/** container-fluid 종료 */}
       </section>{/** profile-twd 종료 */}
      </div>
    );
  }

}

export default RepositoryListPage;
