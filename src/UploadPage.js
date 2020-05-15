import React, { Component } from 'react';
import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation';
import Navigation2 from './Navigation2';
import update from 'react-addons-update';
import './UploadPage.css'


class UploadPage extends Component {
  constructor(){
    super(...arguments);
    this.state={
    Files: [],
    previewURL: []
    }
  }
  
  handleFileUploadChange(e){
      

    let fileslist =update(this.state.Files,{
          $push:[e.target.files[0]]
         
    })
    this.setState({
      Files :fileslist
    
    })
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Header2 name="Upload"></Header2>
        <section className="profile-two">
          <div className="container-fluid">
            <div className="row">
              <Navigation></Navigation>  {/** 네비게이션 */}
             
             
              <div className="col-lg-6" style={{ background: "#F4F4F4", marginTop: "1px" }}>  {/** 두번째 섹션 */}
              <div className="UploadPage">
              <div className="box">
		  <form className="form1">
		   <textarea className="form-control no-border" rows="3" placeholder="내용을 입력해주세요..." style={{minHeight:"300px",minWidth:"100%"}}/>
       <input className="input1" placeholder="태그를 입력해주세요..." style={{width:"100%",border:"0px"}}></input>
		   
		   <submit className="kafe-btn kafe-btn-mint-small pull-right btn-sm">Upload</submit>
		   </form>
       <div className="box-footer clearfix">
       <ul className="nav nav-pills nav-sm">
		 <li className="nav-item"><i className="fa fa-camera text-muted"></i></li>
			
		   </ul>
		  </div>
      {
          this.state.Files.map(file=>
            <p>
             
            </p>
          )
      }
      <input type="file" name="file"  onChange={this.handleFileUploadClick.bind(this)}/>
      <button  > 123</button>
		 </div>	
     
    

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
export default UploadPage;
