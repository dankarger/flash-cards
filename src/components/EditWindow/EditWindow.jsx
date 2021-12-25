import React from "react";
import './EditWindow.css'
import Button from "../Button/Button";

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