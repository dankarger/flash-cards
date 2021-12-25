import React from "react";
import './ShowCardPage.css'
// import Data from "../../Data/data";
// import {CardClass} from "../../Data/data";
import Card from "../../components/Card/Card";
import {getData} from "../../Data/data";
import Button from "../../components/Button/Button";
import Message from "../../components/Message/Mesage";

class ShowCardPage extends React.Component {
        state={data:[{id:1,question:'',
                answer:''}],
            currentCardsList:[],
            isQuestion:true,
            currentCardIndex:0,
            isMessage:false,
            message:'Well Done,You Finished the cards,Cards answered: ',
            isEndOfCards:false
        }

    componentDidMount() {
            // console.log('gfgfggfsdfg',this.props.data)
        // console.log('dasd',getData())
        getData().then(res=>   this.setState({data:res}))

            }
    toggleCardSide=()=>{
            this.setState({ isQuestion: !this.state.isQuestion})
    }
    handleNextCardButton=()=>{
        let index = this.state.currentCardIndex
        if(index<this.state.data.length-1) {
            this.setState((prev)=>{return{currentCardIndex:prev.currentCardIndex+1,isQuestion:true}},()=>console.log(this.state.currentCardIndex))
            }else {
            this.handleEndOfCards()
        }
    }
    handleEndOfCards=()=> {
            console.log('end of cards')
        this.setState({isEndOfCards:true})
        this.toggleMessage()

    }
    showCard(){
            let index = this.state.currentCardIndex
        console.log(this.state.data.length)
            // let currentCardsList=this.state.currentCardsList
        if(index>this.state.data.length-1) {
            this.handleEndOfCards()
            return
        }
        let card =this.state.data[index]
        return (
            <div className={this.state.isEndOfCards?'hide':'show'}>
                <div>

                    <Card class='show-card' card={card} side={this.state.isQuestion}/>
                </div>
                <Button callback={this.toggleCardSide} name="Reveal Answer" />
                <Button callback={this.handleNextCardButton} name="Next Card" />
                <div>Answered {this.state.currentCardIndex} / {this.state.data.length}</div>
            </div>
        )
    }

    injectMessage(){
        if(this.state.isMessage){
            return(
                <div className="Message-div ">
                    <Message callback={this.handleStartOverButton} message={this.state.message+this.state.data.length}/>
                </div>
            )
        }
    }
    toggleMessage=(message)=>{
        this.setState({isMessage:!this.state.isMessage})
    }
    handleStartOverButton=()=>{
            this.setState({ data:[{id:1,question:'fsdf',
                        answer:'sdf'}],
                    currentCardsList:[],
                    isQuestion:true,
                    currentCardIndex:0,
                    isMessage:false,
                    message:'Well Done,You Finished the cards',
                    isEndOfCards:false})

        getData().then(res=>   this.setState({data:res}))
    }

    render(){
        return(
            <div>
                {this.state.isMessage && this.injectMessage()}
                {this.showCard()}

            </div>
        )
    }
}
export default ShowCardPage