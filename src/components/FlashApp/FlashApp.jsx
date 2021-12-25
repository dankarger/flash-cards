import React from "react";
import './FlashApp.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ShowCardPage from "../../pages/ShowCardPage/ShowCardPage";
import HomePage from "../../pages/HomePage/HomePage";
import ManageCardsPage from "../../pages/ManageCardsPage/ManageCardsPage";
import {getData} from "../../Data/data";


class FlashApp extends React.Component {
state={Alldata:[]}
 componentDidMount() {
     this.setState({Alldata:getData()})
 }

    render() {
        return (
            <div className='FlashCard-main'>

                <BrowserRouter >
                    <Navbar />
                    <Routes>
                        <Route path='/' exact element={<HomePage />} />
                        <Route path='/cards' exact element={<ShowCardPage />} />
                        <Route path='/manage' exact element={<ManageCardsPage />} />
                        <Route path='/add' exact element={<ManageCardsPage />} />
                        {/*<Route path='/products/:id' exact element={<ProductDetailWrapper callback={this.addCart} type='products'/>} />*/}
                        {/*<Route path='/clothes' exact element={<ClothesPage callback={this.addCart} />} />*/}
                        {/*<Route path='/clothes/:id' exact element={<ProductDetailWrapper callback={this.addCart}  type='clothes'/>} />*/}
                        {/*<Route path='/cart' exact element={<Cart cart={this.state.cart}/>} />*/}
                        {/*/!*<Route path='/create/:id' element={<EditPageWrapper />} />*!/*/}
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
export default FlashApp