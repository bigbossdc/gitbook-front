import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import './MainCalendar.scss'


const blank_pattern = /^\s+|\s+$/g;


export default class MyToDoGroupScheduleDialog extends Component {



  constructor() {
    super(...arguments);

    this.state = {
      content: '',
      image: ''
    };


  }

  onClickHandler() {
    this.props.onClosehandler();
    this.setState({
      content: ''
    })
  }

  keyChange(e) {

    if (e.key === 'Enter') {
      const authUserNo = sessionStorage.getItem("authUserNo");

      const newToDo = {
        no: null,
        checkDate: this.props.year + "-" + this.props.month + "-" + this.props.day, //ex) 2020-05-30
        type: 'todo', //default 할 일
        userNo: authUserNo,
        scheduleContents: this.state.content,
        gourpNo: null,
      }

      ///////// 텍스트 오류 처리
      if (this.state.content.length == 0) {
        alert('텍스트를 입력하세요')
        return;
      }
      if (this.state.content.length > 50) {
        alert('100자 이하로 입력하세요.');
        this.setState({
          content: ''
        })
        return;
      }
      if (this.state.content.replace(blank_pattern, '') == "") {
        alert('공백만 입력되었습니다');
        this.setState({
          content: ''
        })
        return;
      }

      this.props.addlist(newToDo.checkDate, newToDo);

      this.setState({
        content: ''
      });
    }
  }

  handleChange(e) {
    this.setState({
      content: e.target.value
    })
  }

  deleteClickHandler(e) {
    const deleteTarget = {
      no: e.target.id,
      checkDate: this.props.year + "-" + this.props.month + "-" + this.props.day //ex) 2020-05-30
    }

    this.props.deletelist(deleteTarget.checkDate, deleteTarget);
  }

  render() {
    return (

      <Dialog open={this.props.openModal}>

        <DialogContent>
          <div className="modal-body">
            <div className="row">

              <div className="col-md-4-modal-meta">
                <div className="modal-meta-top">
                  <button onClick={this.onClickHandler.bind(this)} type="button" className="close" >
                    <span className="closeButton" aria-hidden="true">ToDo(닫기)</span>
                  </button>

                  <div className="img-poster clearfix">
                    <a><img className="img-responsive img-circle" src={this.state.image} alt="Image"></img></a>
                    <strong><a style={{ fontSize: 25 }}>{this.props.year}-{this.props.month}-{this.props.day}</a></strong>

                    <br></br>
                    <br />

                    {this.props.masterno === sessionStorage.getItem("authUserNo") ?

                      <input
                        onChange={this.handleChange.bind(this)}
                        onKeyPress={this.keyChange.bind(this)}
                        value={this.state.content}
                        className="form-control input-sm"
                        type="text"
                        placeholder="Enter..." ></input>
                      :

                      <a style={{ fontFamily: " 'Varela Round', sans-serif", fontWeight: "bold" }}>추가/삭제의 권한이 없습니다.</a>

                    }
                  </div>

                  <ul className="img-comment-list">
                    {
                      this.props.getToDoList && this.props.getToDoList.map((list) =>

                        <li style={{ width: "300px"}}>
                          {this.props.masterno === sessionStorage.getItem("authUserNo") ?
                            <a style={{ float: "right", marginLeft: "10px" }} className='deleteButton'>
                              <i id={list.no} className="fas fa-backspace" style={{ color: "red" }} onClick={this.deleteClickHandler.bind(this)}></i></a>
                            :
                            ''
                          }
                          <p style={{marginLeft:"5px", fontSize:"1.1em",fontWeight:"bold",whiteSpace: "pre-wrap", width: "280px", wordBreak: "break-word", marginTop:"20px" }}>
                          <i style={{paddingRight:"5px"}} className="fas fa-edit"></i>
                            {list.scheduleContents.split("/[\r\n]/").map(nbsp => <p>
                              {nbsp}
                              </p>)}
                          </p>
                        </li>
                      )
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  componentDidMount() {
    fetch(`${global.API_URL}/gitbook/user/profile/info/${sessionStorage.getItem("authUserId")}`, {
      method: 'post',
      headers: global.API_HEADERS,
    })
      .then(response => response.json())
      .then(json => {

        this.setState({
          image: json.data.image
        });
      })
      .catch(err => console.error(err));


  }

}

