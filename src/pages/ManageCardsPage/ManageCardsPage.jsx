import React from "react";
import './ManageCardsPage.css'
import {CardClass, getData} from "../../Data/data";
import EditCard from "../../components/Card/EditCard";
import EditWindow from "../../components/EditWindow/EditWindow";
import Button from "../../components/Button/Button";

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
            this.setState({data:allcards,isEdit:false},()=> this.updateLocalStorage(allcards))
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


    }
    handleSubmitButton=  async (inputQuestion,inputAnswer,type)=>{
        let allData=  await  getData();
        let currentCard={
            id:this.state.currentCard.id,
            question:inputQuestion,
            answer:inputAnswer
        }
        console.log(allData)
        if(type==='Edit'){
            let result = allData.map(card=>{
                if(card.id!==this.state.currentCard.id){
                    return card
                }else if(card.id===this.state.currentCard.id) {
                    return currentCard
                }
                return card
            })
            this.setState({data:result,isEdit:false},()=> this.updateLocalStorage(result))
        }else{
            allData.push(currentCard)
            this.setState({data:allData,isEdit:false},()=> this.updateLocalStorage(allData))
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