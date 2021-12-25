import React from "react";
import './EditWindow.css'
import Button from "../Button/Button";
import {getData} from "../../Data/data";

class EditWindow extends React.Component {
    state={card:{},inputQuestion:'',inputAnswer:''}

componentDidMount() {
        const{question,answer}=this.props.card
        this.setState({inputQuestion:question,inputAnswer:answer,card:this.props.card})
}
handleOnChange=(e)=>{
         const { name, value } = e.target
        this.setState({[name]:value})
}
// handleSubmitButton= async ()=>{
//         const{inputQuestion,inputAnswer}=this.state
//     let allData=   await getData();
//     let currentCard={
//         id:this.state.card.id,
//         question:inputQuestion,
//         answer:inputAnswer
//     }
//     console.log(allData)
//     if(this.props.type==='Edit'){
//         let result = allData.map(card=>{
//             if(card.id!==this.state.card.id){
//                 return card
//             }else if(card.id===this.state.card.id) {
//                 return currentCard
//             }
//         })
//         this.updateLocalStorage(result)
//         console.log('r',result)
//     }else{
//         allData.push(currentCard)
//         console.log('add',allData)
//         this.updateLocalStorage(allData)
//     }
//
//
// }
    // handleDeleteButton= async ()=>{
    //     let allData=    await getData();
    //     let allcards= allData.filter(card=>{
    //         return card.id!==this.state.card.id
    //     })
    //     this.state.
    //     this.updateLocalStorage(allcards)
    // }


    updateLocalStorage=(allCards)=>{
        localStorage.setItem('flash_Cards', JSON.stringify(allCards));
        console.log(localStorage)
    }

    render() {
        return(
            <div className='EditWindow'>
                <h1>{this.props.type} Card</h1>
                <div className='edit-form'>
                    <div className="ui mini form">
                        <div className="two fields">
                            <div className="field">
                                <label>Question:</label>
                                <input name='inputQuestion'
                                    onChange={this.handleOnChange}
                                       type="text"
                                       value={this.state.inputQuestion}/>
                            </div>
                            <div className="field">
                                <label>Answer:</label>
                                <input   name='inputAnswer'
                                         onChange={this.handleOnChange}
                                         type="text"
                                         value={this.state.inputAnswer}/>
                            </div>
                        </div>
                        <div className='buttons-div'>
                            <Button callback={()=>{
                                this.props.callbackSubmit(this.state.inputQuestion,this.state.inputAnswer,this.props.type)
                                this.setState({inputQuestion:'',inputAnswer:''})
                            }

                            } className='ui submit button' name='Submit' />
                            <Button callback={this.props.callback} className='ui cancel button' name='Cancel' />
                            <Button callback={this.props.callbackDelete} className='ui cancel button' name='Delete' />

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default EditWindow