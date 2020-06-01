import React, { Component } from "react";
import './Fluffs/assets/css/demos/group.css';
import FriendListRequestItem from "./FriendListRequestItem";


class FriendListRequest extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         ...this.state,
    //         userinfo: this.props.userinfo
    //     }
    //   }
    
    //   static getDerivedStateFromProps(nextProps, prevState) {
    //       if(nextProps.userinfo !== prevState.userinfo) {
    //           return {userinfo: nextProps.userinfo}
    //       }
    //       return null;
    //   }
 
    render() {
        console.log("fdfd" + this.props.userinfo)
        return(   
         <div>
            <div className="group-req">
                <div className="group-search-area">   
                    <p><h4 className="group-req-title"><b>친구 요청</b></h4></p>
                    <div className="group-input-field">
                        <input placeholder="Search" type="text"/>
                        <i className="fa fa-search"></i>  
                    </div>
                    
                </div>
            <section className="notifications">
                    <ul className="group-list">
                        { this.props.userinfo && this.props.userinfo.map( list => <FriendListRequestItem 
                            key={ list.id }
                            nickname={list.nickname}
                            name={list.name}
                            id={list.id}
                            img={list.image}
                            no={list.no}
                            callback={this.props.callback}
                        />) }
                    </ul>
           </section>
        </div>
        </div>
        );
    }
}


export default FriendListRequest;