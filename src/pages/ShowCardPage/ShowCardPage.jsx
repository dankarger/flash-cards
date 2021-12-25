import React from "react";
import './ShowCardPage.css'
// import Data from "../../Data/data";
// import {CardClass} from "../../Data/data";
import Card from "../../components/Card/Card";
import {getData} from "../../Data/data";
import Button from "../../components/Button/Button";

class ShowCardPage extends React.Component {
        state={data:[{id:1,question:'ff',answer:'test'}],currentCardsList:[],isQuestion:true,currentCardIndex:0}
    componentDidMount() {
            // console.log('gfgfggfsdfg',this.props.data)
        // console.log('dasd',getData())
        getData().then(res=>   this.setState({data:res}))

            }
    toggleCardSide=()=>{
            this.setState({ isQuestion: !this.state.isQuestion})
    }
    handleNextCardButton=()=>{

            this.setState((prev)=>{return{currentCardIndex:prev.currentCardIndex+1}},()=>console.log(this.state.currentCardIndex))
    }
    showCard(){
            let index = this.state.currentCardIndex
            // let currentCardsList=this.state.currentCardsList

        let card =this.state.data[index]
        return (
            <div>
                <div>

                    <Card card={card} side={this.state.isQuestion}/>
                </div>
                <Button callback={this.toggleCardSide} name="Reveal Answer" />
                <Button callback={this.handleNextCardButton} name="Next Card" />
            </div>
        )
    }

    render(){
        return(
            <div>

                {this.showCard()}

            </div>
        )
    }
}
export default ShowCardPage