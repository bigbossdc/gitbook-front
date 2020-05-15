import React, { Component } from "react";

import Calendar from './Calendar'

class Navigation extends Component {
    render() {
        return(
            <div className="col-lg-3">
            <aside id="leftsidebar" className="sidebar">		  
             <ul className="list">
              <li>
                       <div className="user-info">
                         <div className="image">
                        <a href="photo_profile_two.html">
                          <img src="assets/img/users/1.jpg" className="img-responsive img-circle" alt="User"></img>
                           <span className="online-status online"></span>
                           </a>
                         </div>
                <div className="detail">
                 <h4 style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>SZl존혜딘공듀S2</strong></h4>
                 <small  style={{fontFamily: " 'Varela Round', sans-serif"}}>정혜진</small>  
           <small>(skaska5@naver.com)</small> 
           <hr></hr>
           <p style={{fontFamily: " 'Varela Round', sans-serif",margin:"10px"}}>흘린 눈물 만큼 강해지는거야 </p>                       
                </div>
                <div className="row">
                 <div className="col-12">
                 
                 </div>                                
                </div>
               </div>
              </li>
             
              <li>
               <small className="text-muted"><a href="photo_profile_two.html">My Repository <em className="fa fa-angle-right pull-right"></em></a> </small><br/>
              
               <small className="text-muted"><a href="photo_followers.html">My Schedule <em className="fa fa-angle-right pull-right"></em></a> </small><br/>
               <small className="text-muted"><a href="photo_followers.html">My Commit <em className="fa fa-angle-right pull-right"></em></a> </small><br/>
                <br></br>
             
              </li> 
              
  





             </ul>
            </aside>

            <div className="col-lg-12"> 
              <Calendar></Calendar>
              </div>				
           </div>
              
         

             
         

           
        );
    }
}

export default Navigation;