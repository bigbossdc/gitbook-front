import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import './MainCalendar.scss';

export default class MyToRepoScheduleDialog extends Component {

  onClickHandler() {
    this.props.onClosehandler();
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
                    <span className="closeButton" aria-hidden="true">COMMIT(닫기)</span>
                  </button>

                  <div className="img-poster clearfix">
                    <a href=""><img className="img-responsive img-circle" src="/gitbook/assets/img/users/1.jpg" alt="Image"></img></a>
                    <strong><a style={{ fontSize: 25 }}>{this.props.year}-{this.props.month}-{this.props.day}</a></strong>
                    <br></br>
                    <br />
                  </div>


                  <ul className="img-comment-list">
                    {
                      this.props.getRepoList && this.props.getRepoList.map((list) =>
                        <li>
                          <div className="comment-text">
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