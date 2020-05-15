import React, { Component } from 'react';
import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import './RepositoryPage.css';
import RepositoryTable from './RepositoryTable'







class RepositoryPage extends Component {
  
  
  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    
    e.target.focus();
    
}
  
  render() {


   
  



    return (
      <div>
        <Header></Header>
        <Header2 name="Group"></Header2>
        <section className="profile-two">
          <div className="container-fluid">
            <div className="row">
              <Navigation></Navigation>  {/** 네비게이션 */}

              <div className="RepositoryPage" >
                <div className="col-lg-6" style={{ background: "#F4F4F4", marginTop: "1px" }}>  {/** 두번째 섹션 */}
                  <div className="cardbox" style={{ background: "#F4F4F4", marginTop: "1px" ,boxShadow:"none" }} >
                    <div className="cardbox-heading">


                      <div className="dropdown pull-right">
                        <button className="btn btn-secondary btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
                          <em className="fa fa-ellipsis-h"></em>
                        </button>
                        <div className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style={{ position: "absolute", transform: "translate3d(-136px, 28px, 0px)", top: "0px", left: "0px", willChange: "transform" }}>
                          <a className="dropdown-item" href="#" style={{ fontFamily: " 'Varela Round', sans-serif" }}><strong>수정 하기</strong></a>
                          <a className="dropdown-item" href="#" style={{ fontFamily: " 'Varela Round', sans-serif" }}><strong>삭제 하기</strong></a>
                     
                        </div>
                      </div>
                    </div>




                    <div className="container" style={{width:"100%"}}>
                      <h2><a>yoonamgil </a></h2><h2>/</h2> <h2><a>mysite06</a></h2>
                      <br></br>
                      <p>이것은 스프링 부트입니다 데이버베이스 입니다 내용입니다</p>
                     
                      
                       
                      <div>
        {
         
         document.queryCommandSupported('copy') &&
          <div style={{display:"inline"}}>
            <button className="button1" onClick={this.copyToClipboard} >Copy</button> 
          </div>
        }
        <form style={{display:"inline"}}>
          <textarea 
            className="textarea1"
            ref={(textarea) => this.textArea = textarea}
            value='http://www.naver.com1231231/' 
          />
        </form>
      </div>
                      <p style={{fontSize:"0.8em"}}>경로: mysite06/public/src/initd</p>
                    
                     {/**
                      <i class="fas fa-folder-plus fa-10x" style={{margin:"3% 40%",display:"inline"}}></i>
                      <p style={{margin:"3% 39%"}}><strong>파일을 추가해 주세요!</strong></p>
                    */}
                     <RepositoryTable></RepositoryTable>
                    
                    
                    </div>
                    <br></br>
                  </div>


                  <hr></hr>
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

export default RepositoryPage;
