import React, { Component } from 'react';
import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';




class RepositoryWritePage extends Component {
  render() {

    

    return (
      <div className="RepositoryWritePage" >
        <Header></Header>
        <Header2 name="Group"></Header2>
        <section className="profile-two">
          <div className="container-fluid">
            <div className="row">
              <Navigation></Navigation>  {/** 네비게이션 */}

              {/** 두번째 섹션 */}

              <div className="col-lg-6" style={{ background: "#F4F4F4", marginTop: "1px" }}>

                <h2 style={{ fontFamily: " 'Abhaya Libre' serif" }}>New Repository</h2>
                <hr></hr>


                <form>
                  <h4 style={{ fontFamily: " 'Abhaya Libre' serif" }}>Repository name</h4>

     

                  <input placeholder="파일명을 적어주세요.." type="text" className="form-control" style={{width:"40%",display:"inline",paddingRight:"40px"}}/>
                  <i className="fas fa-check" style={{ marginLeft: "-25px", color: "green" ,display:"inline-block"}} />
                  <i className="fas fa-exclamation-triangle" style={{ marginLeft: "-25px", color: "red" }} />
                  <br></br>
                  <br></br>

                  <h4 style={{ fontFamily: " 'Abhaya Libre' serif" }}>Description</h4>
                  <textarea className="form-control no-border" rows="3" placeholder="상세 설명을 적어주세요.."></textarea>

                  <hr></hr>
                  <input type="radio" name="public" value="공개" checked="checked" />
                  <label >공개</label>
                  <br></br>
                  <input type="radio" name="public" value="비공개" />
                  <label >비공개</label>

                  <hr></hr>

                  <button type="submit" className="kafe-btn kafe-btn-mint-small" style={{ float: "right ", margin: "10px", width: "60px" }}>생성</button>
                </form>



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

export default RepositoryWritePage;
