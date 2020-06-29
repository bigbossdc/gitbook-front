import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/photo.css';
import "./Fluffs/assets/css/demos/navi.css"


class Navigation2 extends Component {

    render() {
        return(
            <div className="react-transition fade-in" style={{animationDuration:'0.3s'}}>
            <div className="col-lg-3">
                 <div className="trending-box">
                    <div className="row">
                        <div className="col-lg-4">
                            <Link to={`/gitbook/group/${this.props.groupinfo.no}/${sessionStorage.getItem("authUserNo")}/member`}>
                                <h4 id="navi-friendlist-title">
                                    <strong>멤버 목록  <em className="fa fa-angle-right pull-right"></em></strong>
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* 멤버 리스트 */}
                {this.props.joinlist && this.props.joinlist.length === 0 ?
                <div className="trending-box">
                    <div className="col-lg-12">
                        <div className="navi-nocontents" style={{margin:"50px auto"}}>
                            <Link to={`/gitbook/group/${this.props.groupinfo.no}/${this.props.groupinfo.masterNo}/setting`}>
                                <p className="navi-icon"><i class="fas fa-user-plus fa-4x" style={{margin:"0 auto"}}></i></p>
                            </Link>
                            <p className="navi-text" style={{fontSize:"1.5em"}}><b>멤버가 없습니다.</b></p>
                            <p className="navi-text" style={{fontSize:"1.2em"}}>프로젝트를 함께할 맴버를 초대해보세요.</p>
                        </div>
                    </div>
                </div>               
                : <div className="trending-box">       
                    {this.props.joinlist && this.props.joinlist
                        .map((list, index) => 
                                    (index < 9 ?  <div className="col-lg-4" style={{paddingLeft:"5px", paddingRight:"5px"}}>
                                                    <Link to={`/gitbook/my/${list.id}`} ><img 
                                                    src={list.image} className="img-reponsive" alt="" width="130" height="130" style={{marginBottom:"5px", marginTop:"5px" , display:"block", maxWidth:"100%", maxheight:"70.1px"}}/></Link>
                                                    <span className="tooltip-custom">{list.nickname}</span>
                                                    </div> : '')
                            )
                    }
                </div>	
                
                }
            </div>
            </div>
       
        );
    }
}

export default Navigation2;