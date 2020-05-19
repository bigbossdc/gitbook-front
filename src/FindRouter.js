import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import './Fluffs/assets/css/demos/photo.css';
import MainLogin from "./MainLogin";

import FindID from "./FindID";
import FindIDSuccess from "./FindIDSuccess";
import FindPassword from "./FindPassword";
import FindPasswordAuth from "./FindPasswordAuth";
import FindPasswordChange from "./FindPasswordChange";
import Join from "./Join";
import JoinSuccess from "./JoinSuccess";


class FindRouter extends Component {
        
    render() {
        return(
        <section className="login">
            <div className="container" >    
                <div className="banner-content">	   
                    <h1><a href="/">GitBook</a></h1>
                
                    <Route exact path={['/', '/find']} component={MainLogin}></Route>
                    <Route exact path="/find/id" component={FindID}></Route>
                    <Route exact path="/find/id/success" component={FindIDSuccess}></Route>
                    <Route exact path="/find/pw" component={FindPassword}></Route>
                    <Route exact path="/find/pw/auth" component={FindPasswordAuth}></Route>
                    <Route exact path="/find/pw/change" component={FindPasswordChange}></Route>
                    <Route exact path="/find/join" component={Join}></Route>
                    <Route exact path="/find/join/success" component={JoinSuccess}></Route>
                
                </div>
            </div>
        </section> 
        );
    }
}

export default FindRouter;