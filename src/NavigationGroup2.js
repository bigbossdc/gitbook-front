import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/photo.css';


class Navigation2 extends Component {

    render() {
        return(
            <div className="col-lg-3">
                 <div className="trending-box">
                    <div className="row">
                        <div className="col-lg-4">
                        <h4><strong style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"17px", color:"#606665"}}>맴버 목록</strong></h4>
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
                            <p className="navi-text" style={{fontSize:"1.5em"}}><b>맴버가 없습니다.</b></p>
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
                                                    </div> : '')
                            )
                    }
                </div>	
                
                }
            </div>
       
        );
    }
}

export default Navigation2;