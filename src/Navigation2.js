import React, { Component } from "react";
import Navigation2Item from "./Navigation2Item"

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
                        <a href="/"> <h4 style={{fontFamily: " 'Varela Round', sans-serif"}}><strong>친구 목록</strong></h4></a>
                        </div>
                    </div>
                </div>

                {/* 친구 리스트 */}
                <div className="trending-box">
                     <div className="row">
                        {this.state.friendlist && this.state.friendlist.map(list => <Navigation2Item
                        key={list.id}
                           id={list.id}
                            img={list.image}
                            path={this.props.id}
                            callChange={this.props.callChange}
                        />)}
                    </div>
                </div>      
            </div>
       
        );
    }
    componentDidMount() {
        fetch(`${API_URL}/gitbook/user/friend/list`, {
          method: 'post',
          headers: API_HEADERS,
          body: this.props.id
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