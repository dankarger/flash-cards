import React from "react";
import './FlashApp.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ShowCardPage from "../../pages/ShowCardPage/ShowCardPage";
import HomePage from "../../pages/HomePage/HomePage";
import ManageCardsPage from "../../pages/ManageCardsPage/ManageCardsPage";


class FlashApp extends React.Component {
state={Alldata:[]}


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
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
export default FlashApp