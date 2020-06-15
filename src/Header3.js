import React, { Component } from "react";
import {Link} from "react-router-dom";


class Header2 extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            authUser: null
        }
    }


      
    render() {

        return(
            <div style={{position:"fixed",paddingTop:"1px",zIndex:"99",width:"100%"}}>
            <section className="nav-sec" >
	            <div className="d-flex justify-content-between">       
                <div className= "p-2 nav-icon-lg mint-green"></div>
                <div className= "p-2 nav-icon-lg mint-green"></div>
                <div className= "p-2 nav-icon-lg mint-green"></div>
                <div className= "p-2 nav-icon-lg mint-green"></div>
                <div className= "p-2 nav-icon-lg mint-green"></div>

	  </div>
	</section>	
    </div>
        );
    }

}

export default Header2;