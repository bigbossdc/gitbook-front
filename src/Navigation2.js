import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./Fluffs/assets/css/demos/navi.css"


class Navigation2 extends Component {
   
    constructor() {
        super(...arguments);
        this.state = {
            friendlist:''
        }
    }

    render() {
        return(
            <div className="col-lg-3">
                <div className="trending-box">
                    <div className="row">
                        <div className="col-lg-4">
                        <Link to="/gitbook/myfriend"> <h4><strong style={{fontFamily:"'Nanum Gothic', sans-serif", fontSize:"17px", color:"#606665"}}>친구 목록</strong></h4></Link>
                        </div>
                    </div>
                </div>

                {/* 친구 리스트 */}
                {this.state.friendlist.length === 0 ?
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
                    {this.state.friendlist && this.state.friendlist
                        .map(list => <div className="col-lg-4" style={{paddingLeft:"5px", paddingRight:"5px"}}>
                                    <Link to={`/gitbook/my/${list.id}`} ><img 
                                    src={list.image} className="img-reponsive" alt="" width="130" height="130" style={{marginBottom:"5px", marginTop:"5px", display:"block", maxWidth:"100%", maxheight:"70.1px"}}/></Link>
                                    </div>)} 
                </div>     
                }


            </div>
       
        );
    }

    componentDidMount() {

      fetch(`${global.API_URL}/gitbook/user/friend/list`, {

        method: 'post',
        headers: global.API_HEADERS,
        body: JSON.stringify({
          id : this.props.userid,
          kind: "친구"
        })
    })
    .then( response => response.json())
    .then( json => {
        this.setState({
          friendlist: json.data    
        });
    })
    .catch( err => console.error( err ));    
  }
}

export default Navigation2;