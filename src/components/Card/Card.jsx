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
               <div className='card question'>
                   question:
                   <h2>{this.props.card.question}</h2>
               </div>
               </div>
           )
       }else {
           return(
               <div className={this.props.class}>
               <div className='card answer'>
                   answer:
                   <h2>{this.props.card.answer}</h2>
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