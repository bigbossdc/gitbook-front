import React, {Component} from 'react';
import './ErrorPage.css'

class ErrorPage extends Component {
    render(){
        return(
            <div className = 'errorPage'>
                <img className="errorPage-img" src="assets/img/error/error.png"/>
                <button className = 'errorPage-img-button'>go back</button>
            </div>
        );
    }
}

export default ErrorPage;