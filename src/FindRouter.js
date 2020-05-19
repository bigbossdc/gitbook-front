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
                
                    {/* <Route exact path={['/', '/find']} component={MainLogin}></Route>
                    <Route exact path="/find/id" component={FindID}></Route>
                    <Route exact path="/find/id/success" component={FindIDSuccess}></Route>
                    <Route exact path="/find/pw" component={FindPassword}></Route>
                    <Route exact path="/find/pw/auth" component={FindPasswordAuth}></Route>
                    <Route exact path="/find/pw/change" component={FindPasswordChange}></Route>
                    <Route exact path="/find/join" component={Join}></Route>
                    <Route exact path="/find/join/success" component={JoinSuccess}></Route> */}



                    <Route  path={['/', '/find']} exact component={MainLogin}></Route>
                    <Route  path="/find/id" exact component={FindID}></Route>
                    <Route  path="/find/id/success" exact component={FindIDSuccess}></Route>
                    <Route  path="/find/pw" exact component={FindPassword}></Route>
                    <Route  path="/find/pw/auth" exact component={FindPasswordAuth}></Route>
                    <Route  path="/find/pw/change" exact component={FindPasswordChange}></Route>
                    <Route  path="/find/join" exact component={Join}></Route>
                    <Route  path="/find/join/success" exact component={JoinSuccess}></Route>
                
                </div>
            </div>
        </section> 
        );
    }
}

export default FindRouter;