import React, {Component} from 'react';


class GroupSettingDeleteUserItem extends Component {
  
  render() {   
    return (
      <div>
        <div className="suggestion-body">
          <img className="img-responsive img-circle" src={this.props.image} alt=""/>
          <div className="name-box">
            <h4>{this.props.nickname}</h4>
            <span>{this.props.id}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default GroupSettingDeleteUserItem;
