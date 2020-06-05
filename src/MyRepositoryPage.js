import React, { Component } from "react";
import "./RepositoryPage.css";
import {Link} from "react-router-dom";
import RepositoryTable from "./RepositoryTable";
import RepositoryFileviewTable from "./RepositoryFileViewTable"

const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
  'Content-Type': 'application/json'
}


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
    this.setState({
      loding:false
    })
    fetch(`${API_URL}/gitbook/Repository/${this.props.match.params.userid}/repolist/${this.props.match.params.repoName}/${path}`, {
      method: 'get',
      headers: API_HEADERS
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

  render() {
    return (
      <div className="RepositoryPage">
        <div
          className="cardbox"
          style={{ background: "#fff", marginTop: "1px", boxShadow: "none" }}
        >
          <div className="cardbox-heading">
            <div className="dropdown pull-right">
              <button
                className="btn btn-secondary btn-flat btn-flat-icon"
                type="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <em className="fa fa-ellipsis-h"></em>
              </button>
              <div
                className="dropdown-menu dropdown-scale dropdown-menu-right"
                role="menu"
                style={{
                  position: "absolute",
                  transform: "translate3d(-136px, 28px, 0px)",
                  top: "0px",
                  left: "0px",
                  willChange: "transform",
                }}
              >
                <a
                  className="dropdown-item"
                  href="/"
                  style={{ fontFamily: " 'Varela Round', sans-serif" }}
                >
                  <strong>수정 하기</strong>
                </a>
                <a
                  className="dropdown-item"
                  href="/"
                  style={{ fontFamily: " 'Varela Round', sans-serif" }}
                >
                  <strong>삭제 하기</strong>
                </a>
              </div>
            </div>
          </div>

          <div className="container" style={{ width: "100%" }}>
            <h2>
            <Link to={`/gitbook/my/${this.props.match.params.userid}/repository`}>{this.props.match.params.userid}</Link>
            </h2>
            <h2>/</h2>{" "}
            <h2 onClick={this.onClickHandler.bind(this,'')}>
            <Link >{this.state.gitInfo.gitName}</Link>
            </h2>
            <br></br>
            <p>{this.state.gitInfo.description}</p>
            <div>
              {document.queryCommandSupported("copy") && (
                <div style={{ display: "inline" }}>
                  <button className="button1" onClick={this.copyToClipboard.bind(this)}>
                    Copy
                  </button>
                </div>
              )}
              <form style={{ display: "inline" }}>
                <textarea
                  className="textarea1"
                  ref={(textarea) => (this.textArea = textarea)

                  }
                  value={"http://192.168.1.15:7005/gitbook/" + this.props.match.params.userid + "/" + this.props.match.params.repoName + ".git"}
                />
              </form>
            </div>
            <p style={{ fontSize: "0.8em" }}>경로: {this.props.match.params.repoName}/{this.state.callPath}</p>
        
            { 
              (this.state.loding == true)?

            (this.state.gitlist.type === 'folder') ?
              <RepositoryTable
                key="repotable"
                gitlist={this.state.gitlist && this.state.gitlist}
                callPath={this.state.callPath &&this.state.callPath}
                clicklist={{
                  newList: this.onClickHandler.bind(this)}}
              />
              :
              (this.state.gitlist.type === 'file') ?
                <RepositoryFileviewTable
                  contents={this.state.gitlist && this.state.gitlist['contents']}
                  srcName={this.state.callPath.split('/').pop()}
                  callPath={this.state.callPath &&this.state.callPath}
                  clicklist={{
                    newList: this.onClickHandler.bind(this)}}
                
                />
                :
                <div>
                  <a href=""><i class="fas fa-folder-plus fa-10x" style={{ margin: "3% 40%", display: "inline" }}></i></a>
                  <p style={{ margin: "3% 39%" }}><strong>파일을 추가해 주세요!</strong></p>
                </div>

               : 
               <i class="fas fa-spinner fa-2x" style={{color:"#0FC19E" ,animation: "fa-spin 2s linear infinite",marginLeft:"350px"}}></i>
             

              }
            


          </div>
          <br></br>
        </div>

        <hr></hr>
      </div>
    );
  }

  componentDidMount() {

    fetch(`${API_URL}/gitbook/Repository/${this.props.match.params.userid}/item/${this.props.match.params.repoName}`, {
      method: 'get',
      headers: API_HEADERS
    })
      .then(response => response.json())
      .then(json => {

        this.setState({
          gitInfo: json.data
        });
      })
      .catch(err => console.error(err));

    fetch(`${API_URL}/gitbook/Repository/${this.props.match.params.userid}/repolist/${this.props.match.params.repoName}`, {
      method: 'get',
      headers: API_HEADERS
    })
      .then(response => response.json())
      .then(json => {
        if (JSON.stringify(json.data) !== 'null')
          this.setState({
            gitlist: json.data,
          });
          this.setState({
            loding: true
          })
      })

      .catch(err => console.error(err));

  }


}

export default MyRepositoryPage;
