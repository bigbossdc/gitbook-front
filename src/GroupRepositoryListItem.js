import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Fluffs/assets/css/demos/photo.css';


class GroupRepositoryListItem extends Component {
    render() {
      const k={
        position: "relative",
        top: "1px",
        display: "inline-block",
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        backgroundColor: this.props.color,
        marginRight:"6px",
        marginBottom: "3px"
        
      
      }
        return(
         
            <div className="cardbox">
		          <div className="cardbox-heading"> 
                <div className="dropdown pull-right">
                 <button className="btn btn-secondary btn-flat btn-flat-icon" type="button" data-toggle="dropdown" aria-expanded="false">
                  <em className="fa fa-ellipsis-h"></em>
                 </button>
                 <div className="dropdown-menu dropdown-scale dropdown-menu-right" role="menu" style={{position: "absolute", transform: "translate3d(-136px, 28px, 0px)" ,top:"0px", left:"0px", willChange: "transform"}}>
                   <a className="dropdown-item" href="#" style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>비공개 하기</strong></a>
                   <a className="dropdown-item" href="#" style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>삭제 하기</strong></a>
                 </div>
               </div>
               <div className="media m-0">
                <div className="media-body">
                    <span style={k}></span>
                    <Link to="/group/repository/detail" className="text-muted" href = '/' style={{fontFamily: " 'Varela Round', sans-serif",fontSize:"1.9em",display:"inline-block",marginBottom:"10px"}}>
                      Mysite06</Link>
                    <p>이거는 스프링입니다. 데이터베이스입니다. 스프링부트입니다 테스트입니다. 얼마나길지는 모르겠습니다.이게 도대체 얼마나 길까요 저도 몰라요 </p>
                      <small style={{float:"right"}}><span>2020.10.20</span></small>
                </div>
              </div>
                 <hr></hr> 
              </div>
            </div>
                   
        );
    }
}

export default GroupRepositoryListItem;