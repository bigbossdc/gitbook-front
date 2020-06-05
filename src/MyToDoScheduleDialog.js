import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import './MainCalendar.scss'

export default class MyToDoScheduleDialog extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      content: ''

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

      this.props.addlist(newToDo.checkDate, newToDo);

      /////////////////////
      this.setState({
        content: ''
      });
      /////////////////////
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
                    <a><img className="img-responsive img-circle" src="/gitbook/assets/img/users/1.jpg" alt="Image"></img></a>
                    <strong><a style={{ fontSize: 25 }}>{this.props.year}-{this.props.month}-{this.props.day}</a></strong>

                    <br></br>
                    <br />
                    <input
                      onChange={this.handleChange.bind(this)}
                      onKeyPress={this.keyChange.bind(this)}
                      value={this.state.content}
                      className="form-control input-sm"
                      type="text"
                      placeholder="Enter..." ></input>
                  </div>

                  <ul className="img-comment-list">
                    {
                      this.props.getToDoList && this.props.getToDoList.map((list) =>
                        <li>
                          <div className="comment-text">
                            <a className='deleteForm' onClick={this.deleteClickHandler.bind(this)}><span id={list.no} style={{ fontWeight: "bold", color: 'red', fontFamily: " 'Varela Round', sans-serif" }}>삭제</span></a>
                            <p>{list.scheduleContents}</p>
                            <span className="date sub-text">on {this.props.monthName} {this.props.originDay}th, {this.props.year}</span>
                          </div>
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
}

