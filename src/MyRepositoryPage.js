import React, { Component } from "react";
import "./RepositoryPage.css";
import {Link} from "react-router-dom";
import RepositoryTable from "./RepositoryTable";
import RepositoryFileviewTable from "./RepositoryFileViewTable"



class MyRepositoryPage extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      callPath: '',
      gitlist: '',
      gitInfo: '',
      loding: false
    }
  }

  copyToClipboard(e) {
    this.textArea.select();
    document.execCommand("copy");
    e.target.focus();
  };
  copyfuntion(textarea) {
    this.textArea = textarea
  }

  onClickHandler(path) {
    if(this.state.gitlist!==''){
    this.setState({
      loding:false
    })
    fetch(`${global.API_URL}/gitbook/Repository/${this.props.match.params.userid}/repolist/${this.props.match.params.repoName}/${path}`, {
      method: 'get',
      headers: global.API_HEADERS
    })
      .then(response => response.json())
      .then(json => {
        this.setState({
          callPath: path,
          gitlist: json.data,
          loding: true
        });


      })
      .catch(err => console.error(err))
    }
  }
  
  render() {
    console.log(this.state.gitInfo)
    const k={
      position: "relative",
      top: "1px",
      display: "inline-block",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      backgroundColor: (this.state.gitInfo && this.state.gitInfo.visible === "public" ) ? "#0FC19E" :  (this.state.gitInfo && this.state.gitInfo.visible === "private" )?"red":'' ,
      marginRight:"6px",
      marginBottom: "3px"
    }

    return (
     
     <div className="RepositoryPage">
        { this.state.gitInfo && ((this.state.gitInfo.visible === "private")&& (sessionStorage.getItem("authUserId")===this.props.match.params.userid)) || this.state.gitInfo.visible==='public' ? 
        <div
          className="cardbox"
          style={{ background: "#F4F4F4", marginTop: "1px", boxShadow: "none" }}
        >
          <div className="cardbox-heading">
            
          </div>

          <div className="container" style={{ width: "100%" }}>
          <span style={k}></span>
            <h2>
            <Link to={`/gitbook/my/${this.props.match.params.userid}/repository`}>{this.props.match.params.userid}</Link>
            </h2>
            <h2>/</h2>{" "}
            <h2 onClick={this.onClickHandler.bind(this,'')}>

            <Link >{this.state.gitInfo && this.state.gitInfo.gitName}</Link>

            </h2>
            <br></br>
            <div style={{marginTop:"20px"}}>
              <p className="repo-description" 
                  style={{borderLeft:"10px solid #0FC19E",
                          borderRight:"1px solid #717171",
                          borderTop:"1px solid #717171",
                          borderBottom:"1px solid #717171",
                          marginLeft:"0px",

                          padding:"10px"
                          }}>
                <text style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"1.2em", color:"#414141"}}>
                 <strong> Description</strong><hr style={{marginTop:"2px", marginBottom:"10px", borderColor:"#C3C3C3"}}/>
                </text>
                <text style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"1.1em"}}>
                  {this.state.gitInfo && this.state.gitInfo.description.split(/\n/g).map((word)=>
              <div>
              {word.split(" ").map(nbsp=><div style={{display:"inline"}}>{nbsp }&nbsp;</div>)
              }<br/>
              </div>
              )  }
                </text>
              </p>
            </div>
            <div style={{marginTop:"10px"}} >
              {document.queryCommandSupported("copy") && (
                <div style={{ display: "inline" }}>
                  <button className="button1" onClick={this.copyToClipboard.bind(this)} style={{border:"0px", height:"26px", borderColor:"#0FC19E"}}>
                    Copy
                  </button>
                </div>
              )}
              <form style={{ display: "inline" }}>
                <textarea
                  className="textarea1"
                  style={{height:"26px", fontFamily:"'Nanum Gothic', sans-serif", borderColor:"#A2A2A2", width:"80%"}}
                  ref={(textarea) => (this.textArea = textarea)
                  
                  }
                  value={"http://192.168.1.15:7005/gitbook/" + this.props.match.params.userid + "/" + this.props.match.params.repoName + ".git"}
                />
              </form>
            </div>
            <p style={{ fontSize: "1em", fontFamily:"'Nanum Gothic', sans-serif" }}>경로: {this.props.match.params.repoName}/{this.state.callPath}</p>
                  <div style={{width:"100%",height:"100%"}}>
            { 
              (this.state.loding == true)?

                 (this.state.gitlist && this.state.gitlist.type === 'folder') ?
                   <RepositoryTable
                      key="repotable"
                      gitlist={this.state.gitlist && this.state.gitlist}
                callPath={this.state.callPath &&this.state.callPath}
                clicklist={{
                  newList: this.onClickHandler.bind(this)}}
              />
              :
              (this.state.gitlist && this.state.gitlist.type === 'file') ?
                <RepositoryFileviewTable
                  contents={this.state.gitlist && this.state.gitlist['contents']}
                  srcName={this.state.callPath && this.state.callPath.split('/').pop()}
                  callPath={this.state.callPath &&this.state.callPath}
                  clicklist={{
                    newList: this.onClickHandler.bind(this)}}
                
                />
                :
                  (this.state.callPath && this.state.callPath.length > 0) ?
                  <RepositoryTable
                        key="repotable"
                        gitlist=""
                  callPath={this.state.callPath &&this.state.callPath}
                  clicklist={{
                    newList: this.onClickHandler.bind(this)}}
                />
                :<div>
                  <a href=""><i class="fas fa-folder-plus fa-10x" style={{ margin: "3% 40%", display: "inline" }}></i></a>
                  <p style={{ margin: "3% 39%" }}><strong>파일을 추가해 주세요!</strong></p>
                </div>

               : 
               <div style={{width:"30px",margin:" 50px auto "}}>
               <i class="fas fa-spinner fa-2x" style={{color:"#0FC19E" ,animation: "fa-spin 2s linear infinite",fontSize:"4em",marginLeft:"-25px"}}></i>
               </div>
              }
            </div>


          </div>
          <br></br>
        </div>: ((this.state.gitInfo.visible === "private")&& (sessionStorage.getItem("authUserId")!==this.props.match.params.userid))? 
       
       
       <div style={{width:"600px",height:"300px",margin:"100px auto"}}>
      
        <i className="fas fa-user-shield fa-10x" style={{width:"auto",height:"auto", margin:"0px 200px"}} ></i>
        <br/><br/><br/>
        <h1  style={{width:"auto",height:"auto", margin:"0px 40px"}}>사용자가 비공개한 파일입니다</h1>
        </div>:
        
        ''
      }
      </div>
    );
  }

  componentDidMount() {

    fetch(`${global.API_URL}/gitbook/Repository/${this.props.match.params.userid}/item/${this.props.match.params.repoName}`, {
      method: 'get',
      headers: global.API_HEADERS
    })
      .then(response => response.json())
      .then(json => {

        this.setState({
          gitInfo: json.data
        });
      })
      .catch(err => console.error(err));



      fetch(`${global.API_URL}/gitbook/Repository/${this.props.match.params.userid}/repolist/${this.props.match.params.repoName}`, {
          method: 'get',
          headers: global.API_HEADERS
        })
          .then(response => response.json())
          .then(json => {
           
            
              if(json.message === 'newRepo'){
                this.setState({
                  gitlist:''
                })
              }
              else{
                this.setState({
                  gitlist: json.data,
                 
                });
              }
              
              this.setState({
                loding: true
              })
          })
          .catch(err => console.error(err));
  
  }

 
  
}

export default MyRepositoryPage;