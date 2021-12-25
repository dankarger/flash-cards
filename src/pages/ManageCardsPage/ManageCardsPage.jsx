import React from "react";
import './ManageCardsPage.css'
import {CardClass, getData} from "../../Data/data";
import EditCard from "../../components/Card/EditCard";
import EditWindow from "../../components/EditWindow/EditWindow";
import Button from "../../components/Button/Button";
// import Card from "../../components/Card/Card";

class ManageCardsPage extends React.Component {
    state={data:[],isEdit:false,currentCard:null,type:''}

    componentDidMount() {
        getData().then(res=>   this.setState({data:res}))

    }
    handleEditCard=(card)=>{
        this.setState({isEdit:!this.state.isEdit,currentCard:card,type:'Edit'})

}

        handleDeleteButton= async ()=>{
            let allData=    await getData();
            let allcards= allData.filter(card=>{
                return card.id!==this.state.currentCard.id
            })
            this.setState({data:allcards},()=> this.updateLocalStorage(allcards))

        }

    injectCard=()=>{
       return this.state.data.map(card=>{
           return (
               <div key={card.id} onClick={()=>this.handleEditCard(card)} className='' data-id={card.id}>
                   <EditCard  class='edit' card={card}/>
               </div>
           )
       })
}
    handleCancelButton=()=>{
      this.setState({isEdit:false})

    }
    handleAddCardButton=()=>{
        let newCard=new CardClass('','')
        this.setState({isEdit:!this.state.isEdit,currentCard:newCard,type:'Add'})
        // this.setState({data:allcards},()=> this.updateLocalStorage(allcards))


    }
    handleSubmitButton=  (inputQuestion,inputAnswer,type)=>{
        // const{inputQuestion,inputAnswer}=this.props
        let allData=    getData();
        let currentCard={
            id:this.state.currentCard.id,
            question:inputQuestion,
            answer:inputAnswer
        }
        console.log(allData)
        if(type==='Edit'){
            let result = allData.map(card=>{
                if(card.id!==this.state.card.id){
                    return card
                }else if(card.id===this.state.card.id) {
                    return currentCard
                }
            })
            this.updateLocalStorage(result)
            console.log('r',result)
        }else{
            allData.push(currentCard)
            console.log('add',allData)
            this.updateLocalStorage(allData)
        }
    }
    updateLocalStorage=(allCards)=>{
        localStorage.setItem('flash_Cards', JSON.stringify(allCards));
        console.log(localStorage)
    }

    render(){
        return(
            <div>

                <div className='header'>
                    <h1>Manage Cards</h1>
                    <Button  callback={this.handleAddCardButton} name='Add Card' />
                </div>
                {this.state.isEdit && <EditWindow callbackDelete={this.handleDeleteButton}
                                                  callbackSubmit={this.handleSubmitButton}
                                                  callback={this.handleCancelButton}
                                                  card={this.state.currentCard}
                                                  type={this.state.type}/>}
                <div className="cards-div">
                    {this.injectCard()}
                </div>

            </div>
        )
    }
}
export default ManageCardsPage