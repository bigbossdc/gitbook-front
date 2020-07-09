import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import './MainCalendar.scss';
import { Link } from "react-router-dom";

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
                  <span className="closeButton" aria-hidden="true" style={{fontSize:"1.2em"}}>닫기</span>
                  </button>

                  <div className="img-poster clearfix">
                    <a><img className="img-responsive img-circle" src={this.state.image} alt="Image"></img></a>
                    <strong><a style={{ fontSize: 25 }}>{this.props.year}-{this.props.month}-{this.props.day}</a></strong>
                    <br></br>
                    <br />
                  </div>

                  <ul  className="img-comment-list">
                  <p style={{ fontFamily: " 'Varela Round', sans-serif", fontWeight: "bold",color:"red"}}><i class="fas fa-exclamation-triangle"></i>COMMIT 기록은 삭제가 불가능합니다.</p> 
                    {
                      this.props.getRepoList && this.props.getRepoList.map((list) =>
                        <li style={{marginTop:"20px"}}>
                          <div className="comment-text">
                          
                          <Link style={{color:"black"}}
                               to={ 
                                  list.groupNo === null ?
                                 `/gitbook/my/${sessionStorage.getItem("authUserId")}/repository/view/${list.scheduleContents.split(">>>>>")[0].replace(".git", '').replace("[",'').replace("]",'')}`
                                 :
                                 `/gitbook/group/${list.groupNo}/${list.userNo}/${list.id}/repository/view/${list.scheduleContents.split(">>>>>")[0].replace(".git", '').replace("[",'').replace("]",'')}`
                                }>
                         <p className = 'linkToRepoContents' style={{fontWeight:"bold", fontSize:"1.1em", width:"350px"}}><i style={{paddingRight:"5px"}} className="fab fa-github"></i>

                         {list.scheduleContents.split(">>>>>")[0].length < 30 ? 
                          list.scheduleContents.split(">>>>>")[0]+'.git'
                         :
                         `${list.scheduleContents.split(">>>>>")[1].slice(0,30)}...`
                         }
                         </p>
                        </Link>

                            <p className="date sub-text" style={{fontWeight:"bold",wordBreak: "break-word",display:"inline",marginLeft:"3px"}}>
                              <i style={{paddingRight:"5px"}} className="fas fa-edit"></i>
                              
                            
                              {list.scheduleContents.split(">>>>>")[1].length < 30 ? 
                               list.scheduleContents.split(">>>>>")[1]
                                : 
                               `${list.scheduleContents.split(">>>>>")[1].slice(0,30)}...`
                            }
                          
                            </p>
                           
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