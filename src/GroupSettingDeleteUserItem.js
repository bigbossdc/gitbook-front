import React, {Component} from 'react';


class GroupSettingDeleteUserItem extends Component {
  constructor() {
		super(...arguments);
		this.state = {
            show: "none"
        };
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

  // 그룹 멤버 탈퇴 호출
  onOkhandler(){
    this.props.delete(this.props.no, this.props.groupno);
    this.setState({
        show: "none"
    }) 
  }

  render() {   
    return (
      <div>
        <div className="suggestion-body">
          <img className="img-responsive img-circle" src={this.props.image} alt=""/>
          <div className="name-box">
            <h4>{this.props.nickname}</h4>
            <span>{this.props.id}</span>
          </div>
            <span className="invite"><i className="fa fa-minus group-invite" onClick={this.onShow.bind(this)}></i></span>
        </div>
        <div className="modal" style={{display: this.state.show}}>
          <div className="modal-content" style={{margin:"15% auto",height:"130px" ,width:"300px"}}>
              <div className="modal-header" style={{backgroundColor:"#0FC19E"}}>
                  <span className="close" onClick={this.onClose.bind(this)}>&times;</span>
                  <h6 style={{color:"#ffff"}}>탈퇴 알림</h6>
              </div>      
              <div className="modal-footer">
                  <h6 style={{color:"gray",position:"absolute",marginLeft:"10px"}}>해당 맴버를 정말 탈퇴 시키겠습니까?</h6>            
                  <button 
                      style={{width:"70px",marginTop:"30px"}}
                      type="submit"
                      className="kafe-btn kafe-btn-mint-small" name="button-ok"
                      onClick={this.onOkhandler.bind(this)}>
                      ok
                  </button>
              </div>
          </div>
        </div> 
      </div>
    );
  }
}
export default GroupSettingDeleteUserItem;
