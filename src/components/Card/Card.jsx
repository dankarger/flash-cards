import React from "react";
import './Card.css'


class Card extends React.Component {
   state={card:{},question:'',answer:''}

    componentDidMount() {
        // console.log('c111',this.props.card )
        let card =this.props.card
        // console.log('card2',card)
        this.setState({card:card},()=>this.setState({card:this.props.card}) )

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log('ca',this.state.card )
    }


    injectCard=()=>{
       if(this.props.side){
           return(
               <div className='card'>
                   question:
                   <h2>{this.props.card.question}</h2>
               </div>
           )
       }else {
           return(
               <div className='card'>
                   answer:
                   <h2>{this.props.card.answer}</h2>
               </div>
           )

       }

    }


    render() {
        const {card}= this.props
        return(
            <div >

                {this.injectCard()}

            </div>
        )

    }
}
export default Card