import React, { Component } from "react";
import {Link} from "react-router-dom";

const API_URL = 'http://127.0.0.1:8080';
const API_HEADERS = {
    'Content-Type': 'application/json'
}


class Navigation2 extends Component {
   
    constructor() {
        super(...arguments);
        this.state = {
            friendlist:''
        }
    }

    render() {
        //console.log(this.state.userData)
        return(
            <div className="col-lg-3">
                <div className="trending-box">
                    <div className="row">
                        <div className="col-lg-4">
                        <Link to="/gitbook/myfriend"> <h4 style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>친구 목록</strong></h4></Link>
                        </div>
                    </div>
                </div>

                {/* 친구 리스트 */}
                <div className="trending-box">                           
                {this.state.friendlist && this.state.friendlist
                    .map(list => <div className="col-lg-4">
                                <Link to={`/gitbook/my/${list.id}`} ><img 
                                src={list.image} className="img-reponsive" alt="" width="70.1" height="70.1" style={{marginBottom:"5px", marginTop:"5px" , display:"block", maxWidth:"100%", maxheight:"70.1px"}}/></Link>
                                </div>)} 
                </div>

            </div>
       
        );
    }

    componentDidMount() {
      fetch(`${API_URL}/gitbook/user/friend/navilist`, {
        method: 'post',
        headers: API_HEADERS,
        body: JSON.stringify({
          id : this.props.id,
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