import React, { Component } from "react";
import './Fluffs/assets/css/demos/photo.css';


class join extends Component {
    render() {
        return(
            <section className="login">
            <div className="container">
              <div className="banner-content">
                <h1><i className="fa fa-smile"></i> GitBook </h1>
                <form method="post" className="form-signin">
                  <h3 className="form-signin-heading">Please register</h3>
                  <div className="form-group">
                    <input name="email" type="text" className="form-control" placeholder="Email"/>
                  </div>
                  <div className="form-group">
                    <input name="username" type="text" className="form-control" placeholder="Username"/>
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password"/>
                  </div>
                  <button className="kafe-btn kafe-btn-mint btn-block" type="submit" name="subm">Sign Up</button>
                  <br/>
                  <a className="btn btn-dark " href="photo_login.html" role="button">Already have an account? Click Here.</a>
                  <a className="btn btn-dark " href="photo_register.html" role="button">Forgot your password?</a>
                </form>
              </div>
            </div>
            </section>
        );
    }
}

export default join;