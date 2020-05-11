import React, { Component } from "react";
import './Fluffs/assets/css/demos/photo.css';


class Slim extends Component {
    render() {
        return(
            <div id="Slim">
			    
            <a href="" className="dropdown-item notify-item">
             <div className="notify-icon bg-success"><i className="fa fa-comment"></i></div>
             <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">1 min ago</small></p>
            </a>

            <a href="" className="dropdown-item notify-item">
             <div className="notify-icon bg-success"><i className="fa fa-user-plus"></i></div>
             <p className="notify-details">Grace Flake followed you.<small className="text-muted">5 hours ago</small></p>
            </a>

            <a href="" className="dropdown-item notify-item">
             <div className="notify-icon bg-success"><i className="fa fa-heart"></i></div>
             <p className="notify-details">Carlos Crouch liked your photo.</p>
            </a>
            <a href="" className="dropdown-item notify-item">
             <div className="notify-icon bg-success"><i className="fa fa-comment"></i></div>
             <p className="notify-details">Caleb Flakelar commented on Admin<small className="text-muted">4 days ago</small></p>
            </a>
            <a href="" className="dropdown-item notify-item">
             <div className="notify-icon bg-success"><i className="fa fa-user-plus"></i></div>
             <p className="notify-details">Maureen Hilda followed you.<small className="text-muted">7 days ago</small></p>
            </a>
            <a href="" className="dropdown-item notify-item">
             <div className="notify-icon bg-success"><i className="fa fa-heart"></i></div>
             <p className="notify-details">Carlos Crouch liked your photo.<small className="text-muted">13 days ago</small></p>
            </a>
           </div>
        );
    }
}

export default Slim;