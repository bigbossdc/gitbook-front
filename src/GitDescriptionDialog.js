import React, { Component } from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import "./RepositoryPage.css";


export default class GitDescriptionDialog extends Component {


    onClickHandler(){
        this.props.onClosehandler();
    }


    render() {
        return (
            <Dialog open={this.props.openModal} >
                <DialogContent>
                    <div className="modal-body" style={{width:"260px", height:"330px"}}>
                  
                        <div className="row">
                      
                            <div className="col-md-4-modal-meta">
                            
                                <div className="modal-meta-top" style={{width:"270px"}}>
                                <button onClick={this.onClickHandler.bind(this)} type="button" className="close" style={{marginTop:"-15px"}} >
                    <span className="closeButton" aria-hidden="true">닫기</span>
                  </button>

                                    <div className="img-poster clearfix">
                                        <strong><a style={{ fontSize: 25 }}>파일추가 가이드</a></strong>
                                        <br/>
                                    </div>

                                </div>
                                <br></br>
                                <div style={{fontFamily: " Consolas, sans-serif"}}>
                                <p>1. $ git clone [Copy URL]</p>
                                <p>2. $ git add -A</p>
                                <p>3. $ git commit -m "message"</p>
                                <p>4. $ git push origin master</p>
                                <p>5. 사용자 인증(GitBook 계정)</p>
                                <p>6. 완료</p>
                            </div>
                            </div>
                        </div>
                    </div>

                </DialogContent>
            </Dialog>
        );
    }
}