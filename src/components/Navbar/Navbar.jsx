import React from "react";
import './Navbar.css'
import {Link} from "react-router-dom";

class Navbar extends React.Component {


    render() {
        return(
            <div>
                <div id="navBar" className="ui top fixed menu ">
                    <div className="item">
                        <i className="fas fa-question-circle"></i>
                    </div>
                    <Link to='/' className="item">Home</Link>
                    <Link to='/cards' className="item">Show Cards</Link>
                    <Link to='/manage' className="item">Manage Cards</Link>
                    {/*<Link to='/add' className="item">Add Card</Link>*/}


                </div>
                <div className="ui bottom fixed menu">
                    <div>Footer</div>
                    <div className="item">
                    </div>
                </div>
                <p> </p>
                <p> </p>
            </div>
        )
    }
}
export default Navbar