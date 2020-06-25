import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./Fluffs/assets/css/demos/navi.css";


class MyFriendNavigation2 extends Component {

    render() {
        console.log("friend navi " + this.props.randomlist)
        return(
            <div className="col-lg-3">
                <div className="trending-box">
                    <div className="row">
                        <div className="col-lg-4">                   
                            <h4 className="navi-friendlist-title"><strong style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"17px", color:"#606665"}}>친구 목록</strong></h4>
                        </div>
                    </div>
                </div>

                {/* 친구 리스트 */}
                {this.props.friendlist && this.props.friendlist.length === 0 ?
                <div className="trending-box">
                    <div className="col-lg-12">
                        <div className="navi-nocontents" style={{margin:"50px auto"}}>
                        <p className="navi-icon"><i class="fas fa-user-plus fa-4x" style={{margin:"0 auto"}}></i></p>
                        <p className="navi-text" style={{fontSize:"1.5em"}}><b>친구가 없습니다.</b></p>
                        <p className="navi-text" style={{fontSize:"1.2em"}}>검색 기능을 통해 친구를 추가해보세요.</p>
                        </div>
                    </div>
               
                </div>
   
                :<div className="trending-box">                           
                    {this.props.friendlist && this.props.friendlist
                        .map((list, index) => 
                                    this.props.randomlist.indexOf(index+1) > -1 ?
                                    <div className="col-lg-4" style={{paddingLeft:"5px", paddingRight:"5px"}}>
                                        <Link to={`/gitbook/my/${list.id}`} >
                                            <img src={list.image} className="img-reponsive" alt="" width="130" height="130" style={{marginBottom:"5px", marginTop:"5px", display:"block", maxWidth:"100%", maxheight:"70.1px"}}></img>
                                            <span className="tooltip-custom">{list.nickname}</span>
                                        </Link>
                                    </div>:''
                        )
                     }
                </div>     
                }
            </div>
        );
    }
}

export default MyFriendNavigation2;