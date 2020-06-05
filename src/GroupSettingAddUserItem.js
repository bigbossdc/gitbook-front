import React, {Component} from 'react';


class GroupSettingAddUserItem extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      status: this.props.status
    }
  }

  // 요청 함수 호출
  reqFollow() {
    this.props.follow(this.props.no, this.props.groupno);
    this.setState({
      status: "요청"
    })
  }

  render() {
    return (
          <div className="suggestion-body">
            <img className="img-responsive img-circle" src={this.props.image} alt=""/>
            <div className="name-box">
              <h4>{this.props.nickname}</h4>
              <span>{this.props.id}</span>
            </div>
            {this.state.status === '요청' ? 
              <span><i className="fa fa-check group-invite"></i></span> :   
              <span className="invite"><i className="fa fa-plus group-invite" onClick={this.reqFollow.bind(this)}></i></span>
            }
          </div>
    );
  }
}
export default GroupSettingAddUserItem;
