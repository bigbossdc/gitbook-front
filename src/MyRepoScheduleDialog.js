import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import './MainCalendar.scss';

export default class MyToRepoScheduleDialog extends Component {

  constructor() {
    super(...arguments);
    this.state = {
      image:''
    };

     
  }

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
                    <span className="closeButton" aria-hidden="true">(닫기)</span>
                  </button>

                  <div className="img-poster clearfix">
                    <a><img className="img-responsive img-circle" src={this.state.image} alt="Image"></img></a>
                    <strong><a style={{ fontSize: 25 }}>{this.props.year}-{this.props.month}-{this.props.day}</a></strong>
                    <br></br>
                    <br />
                  </div>

                  <ul  className="img-comment-list">
                    {
                      this.props.getRepoList && this.props.getRepoList.map((list) =>
                        <li style={{marginTop:"10px"}}>
                          <div className="comment-text">
                            <p>{list.scheduleContents.split(">>>>>")[0]}.git</p>
                            <span className="date sub-text" style={{fontSize:"1.1em"}}>"{list.scheduleContents.split(">>>>>")[1]}"</span>
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

  componentDidMount() {
    fetch(`${global.API_URL}/gitbook/user/profile/info/${sessionStorage.getItem("authUserId")}`, {
        method: 'post',
        headers: global.API_HEADERS,
     })
    .then( response => response.json())
    .then( json => {
    
        this.setState({
            image: json.data.image
        });
    })
    .catch( err => console.error( err ));
}
}