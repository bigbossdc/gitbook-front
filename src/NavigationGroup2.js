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
                        <a href="/"> <h4 style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>맴버 목록</strong></h4></a>
                        </div>
                    </div>
                </div>

                {/* 친구 리스트 */}
                <div className="trending-box">
                    <div className="row">
                        {this.props.joinlist && this.props.joinlist
                            .map((list, index) => 
                                        (index < 9 ?  <div className="col-lg-4">
                                                      <Link to={`/gitbook/my/${list.id}`} ><img src={list.image} className="img-responsive" alt="" width="70.1" height="70.1" style={{marginBottom:"5px", marginTop:"5px" , display:"block", maxWidth:"100%", maxheight:"70.1px"}}/></Link>
                                                      </div> : '')
                                       
                                        
                                )
                        }

                    </div>
                </div>		
            </div>
       
        );
    }
}

export default Navigation2;