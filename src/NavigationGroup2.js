import React, { Component } from "react";
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
                  
                   <div className="col-lg-4">
                   <a href="/"><img src="assets/img/users/7.jpg" className="img-responsive" alt="Image"/></a>
                   </div>
                   <div className="col-lg-4">
                   <a href="/"><img src="assets/img/users/8.jpg" className="img-responsive" alt="Image"/></a>
                   </div>
                   <div className="col-lg-4">
                   <a href="/"><img src="assets/img/users/9.jpg" className="img-responsive" alt="Image"/></a>
                   </div>
                   
                </div>
       
                <div className="row">
                   <div className="col-lg-4">
                   <a href="/"><img src="assets/img/users/7.jpg" className="img-responsive" alt="Image"/></a>
                   </div>
                   <div className="col-lg-4">
                   <a href="/"><img src="assets/img/users/2.jpg" className="img-responsive" alt="Image"/></a>
                   </div>
                   <div className="col-lg-4">
                   <a href="/"><img src="assets/img/users/3.jpg" className="img-responsive" alt="Image"/></a>
                   </div>
                </div>
       
                <div className="row">
                 <div className="col-lg-4">
                 <a href="/"><img src="assets/img/users/4.jpg" className="img-responsive" alt="Image"/></a>
                 </div>
                 <div className="col-lg-4">
                 <a href="/"><img src="assets/img/users/5.jpg" className="img-responsive" alt="Image"/></a>
                 </div>
                 <div className="col-lg-4">
                 <a href="/"><img src="assets/img/users/6.jpg" className="img-responsive" alt="Image"/></a>
                 </div>
                </div>
            
               </div>		
               </div>
       
        );
    }
}

export default Navigation2;