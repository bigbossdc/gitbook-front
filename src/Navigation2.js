import React, { Component } from "react";
import Navigation2Item from "./Navigation2Item";


class Navigation2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {
      return {
        ...prevState,
        userData: nextProps.friendinfo
      }
    }

    render() {
        console.log(this.state.userData)
        return(
            <div className="col-lg-3">
                <div className="trending-box">
                    <div className="row">
                        <div className="col-lg-4">
                        <a href="/"> <h4 style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>친구 목록</strong></h4></a>
                        </div>
                    </div>
                </div>

                {/* 친구 리스트 */}
                <div className="trending-box">
                     <div className="row">
                        {this.state.userData && this.state.userData.map(list => <Navigation2Item
                            id={list.id}
                            img={list.image}
                        />)}
                    </div>
                </div>		
            </div>
       
        );
    }
}

export default Navigation2;