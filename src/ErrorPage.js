import React, {Component} from 'react';
import './ErrorPage.css'

class ErrorPage extends Component {
    render(){
        return(
            <div className = 'errorPage'>
                <img className="errorPage-img" src={global.API_URL + "/gitbook/assets/img/error/error.png"}/>
            </div>
        );
    }
}

export default ErrorPage;