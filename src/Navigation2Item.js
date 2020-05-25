import React, { Component } from "react";
import {Link} from "react-router-dom";

class Navigation2Item extends Component {

    render() {
        return(
            <div className="col-lg-4">
            <Link to={`/gitbook/my/${this.props.id}`}><img src={this.props.img} className="img-responsive" alt=""/></Link>
            </div>
        );
    }
}

export default Navigation2Item;