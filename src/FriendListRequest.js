import React, { Component } from "react";
import {Link} from "react-router-dom";

import './Fluffs/assets/css/demos/group.css';
import FriendListRequestItem from "./FriendListRequestItem";


class FriendListRequest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: '',
            modalKeyword: '',
            show: "none",
            item:'',
            sendList: ''
        }
    }

    onNotifyKeywordChange(keyword) {
        this.setState({
            keyword: keyword
        })
    }
 
    onInputChange(event) {
        this['onNotifyKeywordChange'](event.target.value);
       
    }

    onNotifyKeywordChangeModal(keyword) {
        this.setState({
            modalKeyword: keyword
        })
    }
 
    onInputChangeModal(event) {
        this['onNotifyKeywordChangeModal'](event.target.value);
       
    }

    

    onShow() {
        this.setState({
            show: "block",
        });
    }

    onClose() {
        this.setState({
            show: "none"
        });
    }

    onOkhandler() {
        this.setState({
            show: "none"
        })
    }

    render() {
        return(   
         <div>
            <div className="group-req" style={{marginTop:"0px"}}>
            <div style={{float:"left", width:"50%"}}>
                <h4 className="group-req-title"><b>친구 요청</b></h4>
            </div>
            <div style={{float:"right", width:"50%"}}>
                <h4 style={{textAlign:"right", fontFamily:"'Nanum Gothic', sans-serif", fontSize:"15px"}}>
                    <b className="friend-send-list" style={{marginRight:"10px"}} onClick={this.onShow.bind(this)}>보낸 요청 <i class="fas fa-paper-plane"></i></b>
                </h4>
            </div>
            <br/>
            {this.props.userinfo == "" ?
            ""
            :
            <div className="group-search-area">   
                <div className="group-input-field">
                    <input placeholder="Search" type="text" value={this.props.keyword} onChange={this.onInputChange.bind(this)}/>
                    <i className="fa fa-search"></i>  
                </div> 
            </div>
            }

            <section className="notifications">
                    <ul className="group-list">
                        {this.props.userinfo == "" ?
                            <div>
                                <p className="nocontents" style={{paddingTop:"30px"}}>새로운 요청이 없습니다. 친구를 추가해보세요 :)</p>
                            </div>
                        :this.props.userinfo && this.props.userinfo
                            .filter((element) => element.nickname.indexOf(this.state.keyword) != -1 || element.name.indexOf(this.state.keyword) != -1 || element.id.indexOf(this.state.keyword) != -1)
                            .map( list => <FriendListRequestItem 
                                key={ list.id }
                                nickname={list.nickname}
                                name={list.name}
                                id={list.id}
                                img={list.image}
                                no={list.no}
                                callback={this.props.callback}
                            />) 
                        }
                    </ul>
           </section>
        </div>
            <div className="modal" style={{ display: this.state.show }}>
                <div className="modal-content" style={{ margin: "5% auto", height: "450px", width: "400px" }}>
                    <div className="modal-header" style={{
                        backgroundColor: "#0FC19E"
                    }}>
                        <span className="close" onClick={this.onClose.bind(this)}>&times;</span>
                        <h6 style={{ wordBreak: "break-all",color:"#fff",fontFamily:"'Jeju Gothic', sans-serif",fontSize:"13px" }}>{sessionStorage.getItem("authUserNickName")}님이 전송한 요청 목록</h6>
                    </div>
                    <div className="modal-footer" style={{paddingRight:"25px"}}>
                        {this.state.item && this.state.item == '' ? '' : this.state.item == 'noshow'?
                        <p className="navi-text" style={{fontSize:"1em", fontFamily:"'Nanum Gothic', sans-serif", color:"#5b6160", margin:"30% auto"}}><b>전송한 요청이 없습니다. <br/> 친구 요청을 보내면 여기에 표시됩니다.</b></p>
                         : <div className="group-search-area" style={{float:"right", marginTop:"20px", marginRight:"70px"}}>   
                                <div className="group-input-field">
                                    <input placeholder="Search" type="text" value={this.state.modalKeyword} onChange={this.onInputChangeModal.bind(this)}/>
                                    <i className="fa fa-search"></i>  
                                </div> 
                            
                                <ul className="group-list" style={{marginLeft: "60px", marginTop:"15px", width:"380px"}}>
                                    {this.state.sendList && this.state.sendList
                                        .filter((element) => element.nickname.indexOf(this.state.modalKeyword) != -1 || element.name.indexOf(this.state.modalKeyword) != -1 || element.id.indexOf(this.state.modalKeyword) != -1)
                                        .map(list => 
                                        <div className="media"> 
                                            <img src={list.image} alt="" className="img-responsive img-circle"/>  
                                            <div className="media_body" style={{marginLeft:"10px"}}>
                                            <h5 style={{fontFamily:"'Nanum Gothic', sans-serif", color:"black", textAlign:"left"}}>
                                                <Link to={`/gitbook/my/${list.id}`} style={{color:"black", fontSize:"1.1em"}}>{list.nickname}</Link> 
                                                &nbsp;({list.name})</h5>
                                            </div> 
                                        </div>
                                    
                                    )}

                                </ul>
                            </div>
                        }


                    </div>
                </div>
            </div>
        </div>
        );
    }

    componentDidMount() {
        fetch(`${global.API_URL}/gitbook/friend/send/follow`, {
          method: 'post',
          headers: global.API_HEADERS,
          body: JSON.stringify({
              userno: sessionStorage.getItem("authUserNo")
            })
        })
        .then( response => response.json())
        .then( json => {
          if(json.data.length > 0) {
            this.setState({
              sendList: json.data,
              item: "show"
              });
          } else {
            this.setState({
              item: "noshow"     
              });
          }
    
        })
        .catch( err => console.error( err ));   
      }
}


export default FriendListRequest;