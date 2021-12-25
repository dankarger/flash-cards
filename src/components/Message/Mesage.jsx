import React from "react";
import './Mesage.css'
import Button from "../Button/Button";

export default function Message({message,callback}) {
    if(message) {
        return (
            <div className='Message'>
                <h1>{message}</h1>
                <Button callback={callback} name="Start Over"/>
                <Button name="Play another set of Cards"/>
            </div>
        )
    }

}