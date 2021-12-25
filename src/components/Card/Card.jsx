import React from "react";
import './Card.css'


class Card extends React.Component {
   state={card:{},question:'',answer:''}

    componentDidMount() {
        let card =this.props.card
        this.setState({card:card},()=>this.setState({card:this.props.card}) )

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    injectCard=()=>{
       if(this.props.side){
           return(
               <div className={this.props.class}>
               <div className='card question show-card'>
                   <h2>question:</h2>
                   <h3>{this.props.card.question}</h3>
               </div>
               </div>
           )
       }else {
           return(
               <div className={this.props.class}>
               <div className='card answer show-card'>
                  <h2> answer:</h2>
                   <h3>{this.props.card.answer}</h3>
               </div>
               </div>

           )
       }
    }

    render() {

        return(
            <div >

                {this.injectCard()}

            </div>
        )

    }
}
export default Card