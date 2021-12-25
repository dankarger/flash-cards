import React from "react";
import './Navbar.css'
import {Link} from "react-router-dom";
import Button from "../Button/Button";

class Navbar extends React.Component {


    render() {
        return(
            <div>
                <div id="navBar" className="ui top fixed menu ">
                    <div className="item">
                        <i className="fas fa-question-circle"></i>
                    </div>
                    <Link to='/cards' className="item">Show Cards</Link>
                    <Link to='/manage' className="item">Manage Cards</Link>
                    {/*<div className="filler-div"> </div>*/}


                </div>
                {/*<div> <Cart /></div>*/}
                <div className="ui bottom fixed menu">
                    <div>Footer</div>
                    <div className="item">
                        {/*<img src="/images/logo.png"/>*/}
                    </div>
                    {/*<div> <Cart /></div>*/}
                </div>
                <p></p>
                <p></p>
            </div>
        )
    }
}
export default Navbar