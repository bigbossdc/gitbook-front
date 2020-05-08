import React, {Component} from 'react';

import Header from './Header';
import Header2 from './Header2';
import Navigation from './Navigation'
import Navigation2 from './Navigation2'

class App extends Component {
  render() {
    
    return (
      <div className="App">
       <Header></Header>
       <Header2 name="MyTimeline"></Header2>
       <section className="profile-two">
       <div className="container-fluid">
        <div className="row">
              <Navigation></Navigation>  {/** 네비게이션 */}

              {/** 두번째 섹션 */}
              <div className="col-lg-6" style={{background: "#fff",marginTop:"1px"}}>
              
                

              <div class="cardbox">
		 
                <div class="cardbox-heading">

                    {/** 드롭다운 메뉴 */}
                  <div class="dropdown pull-right">
                     <button class="btn btn-secondary btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
                      <em class="fa fa-ellipsis-h"></em>
                     </button>
                     <div class="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style={{position: "absolute", transform: "translate3d(-136px, 28px, 0px)" ,top:"0px", left:"0px", willChange: "transform"}}>
                       <a class="dropdown-item" href="#" style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>비공개 하기</strong></a>
                       <a class="dropdown-item" href="#" style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>삭제 하기</strong></a>
                       <a class="dropdown-item" href="#" style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>수정 하기</strong></a>
                     </div>
                   </div>
     
                 <div class="media m-0">
                   < div class="d-flex mr-3">
                       <a href="#"><img class="img-responsive img-circle" src="assets/img/users/1.jpg" alt="User"></img></a>
                   </div>
                    <div class="media-body">
                        <p class="m-0" style={{fontFamily: " 'Varela Round', sans-serif"}}>지존혜딘공듀</p>
                         <small><span>10 hours ago</span></small>
                     </div>
                    </div>
                   </div>
     
 <div class="cardbox-item">
 
 
  <a href="#myModal" data-toggle="modal">
     <div className="row">
       <div className="col-lg-3">
         <img class="img-responsive" src="assets/img/users/5.jpg" alt="MaterialImg"></img>
         </div> 

         <div className="col-lg-3">
         <img class="img-responsive" src="assets/img/users/5.jpg" alt="MaterialImg"></img>
         </div> 

         <div className="col-lg-3">
         <img class="img-responsive" src="assets/img/users/5.jpg" alt="MaterialImg"></img>
         </div> 
         <div className="col-lg-3">
         <img class="img-responsive" src="assets/img/users/5.jpg" alt="MaterialImg"></img>
         </div> 
         <div className="col-lg-3">
         <img class="img-responsive" src="assets/img/users/5.jpg" alt="MaterialImg"></img>
         </div> 
         <div className="col-lg-3">
         <img class="img-responsive" src="assets/img/users/5.jpg" alt="MaterialImg"></img>
         </div> 
         
    </div>
    <div>
    <p style={{color:"black",fontFamily: " 'Varela Round', sans-serif",wordBreak: "break-all"}}>
        동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라만세 
        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd<br></br>
        무궁화 삼천리 화려강산 대한 사람 대한으로 길이 보전하세 
        남산위에 저 소나무 철갑을 두른듯 
    </p>
    </div>
  </a> 
     </div>
   <div class="cardbox-base">
  <ul>
   <li><a className="dropdown-item" href="/"><h6 style={{fontFamily: " 'Varela Round', sans-serif"}}>#java &nbsp;&nbsp;</h6></a></li>
   <li><a className="dropdown-item" href="/"><h6 style={{fontFamily: " 'Varela Round', sans-serif"}}>#spring &nbsp;&nbsp;&nbsp;</h6></a></li>
   <li><a className="dropdown-item" href="/"><h6 style={{fontFamily: " 'Varela Round', sans-serif"}}>#database &nbsp;&nbsp;&nbsp;</h6></a></li>
   <li><a className="dropdown-item" href="/"><h6 style={{fontFamily: " 'Varela Round', sans-serif"}}>#너무 너무 어려워 &nbsp;&nbsp;&nbsp;</h6></a></li>
   <li><a className="dropdown-item" href="/"><h6 style={{fontFamily: " 'Varela Round', sans-serif"}}>#react &nbsp;&nbsp;&nbsp;</h6></a></li>
  
  </ul>
 </div>
     <div class="cardbox-like">
  <ul>
 <li><a href="#"><i class="fa fa-heart"></i></a><span> 100</span></li>
   <li><a href="#" title="" class="com"><i class="fa fa-comments"></i></a> <span class="span-last">50 </span></li>
  </ul>
     </div>
           
</div>











              </div>
              {/** 두번째 섹션 */}
              {/** 세번째 섹션 */}
              <Navigation2></Navigation2>
              {/** 세번째 섹션 */}


        </div>{/** row 종료 */}
       </div>{/** container-fluid 종료 */}
       </section>{/** profile-twd 종료 */}
      </div>
    );
  }

}

export default App;
