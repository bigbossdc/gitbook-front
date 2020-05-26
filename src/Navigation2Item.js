import React, { Component } from "react";
import {Link} from "react-router-dom";

class Navigation2Item extends Component {
   constructor() {
       super(...arguments);
       this.state = {
           path : this.props.path
       }
   }
    onClickHandler() {
        this.props.callChange.change(this.props.id)
    }
    render() {
        return(
            <div className="col-lg-4">
            <Link to={`/gitbook/my/${this.props.id}`} ><img onClick={this.onClickHandler.bind(this)} src={this.props.img} className="img-responsive" alt=""/></Link>
            </div>
        );
    }
}

export default Navigation2Item;