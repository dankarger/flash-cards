import React from "react";
import './HomePage.css'
import {Link} from "react-router-dom";

class HomePage extends React.Component {

render(){
    return(
        <div>
            <h1 className='Header'>Flash Card App</h1>
         <div className="main">

             <div className='category-div left'>
                 <Link to='/cards'>
                     <h3>Play Cards</h3>
                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pCBf3j_zZZ6x1WevhBPKw05XPYOzZP2myg&usqp=CAU' alt='card' />
                 </Link>
             </div>

             <div className='category-div right'>
                 <Link to='/manage'>
                     <h3>ManageCArds</h3>
                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO_cZM3j5rJRBdy1jKo6GUZvP7F838Fj0aXQ&usqp=CAU" alt="pic"/>
                 </Link>
             </div>
         </div>
        </div>
    )
}
}
export default HomePage
