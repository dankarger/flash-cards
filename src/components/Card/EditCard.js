import React from "react";
import './Card.css'


class EditCard extends React.Component {
    state={card:{} }

    componentDidMount() {
        let card = this.props.card
        this.setState({card: card}, () => this.setState({card: this.props.card}))
    }



    render() {
        return(
            <div className={this.props.class} onClick={this.props.callback} id={this.props.id}>
                <div className='card question'>
                    question:
                    <h2>{this.props.card.question}</h2>
                </div>
                <div className='card answer'>
                    answer:
                    <h2>{this.props.card.answer}</h2>
                </div>
            </div>
        )

    }
}
export default EditCard