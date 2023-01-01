import React from "react";
import Choice from "./choice";
import Details from "./objData"
import "./FirstPage.css"
import LayoutDictionary from './Dictionary';
import Calculator from './Calculator';
const FirstPage = (props)=>{
    let [next1, setNext1] = React.useState(false);
    let [next2, setNext2] = React.useState(false);
    function changeToCal(){
        setNext1(!next1);
        setNext2(false)
    }
    function changeToDict(){
        setNext2(!next2);
        setNext1(false)
    }
    return(
        <div className="front">
         {!next1&&!next2 && <Choice obj = {Details[0]} handleClick={changeToCal}/>}
         {!next2&&!next1 && <Choice obj = {Details[1]} handleClick={changeToDict}/>}
         {next1 && <Calculator/>}
         {next2 && <LayoutDictionary/>}
        </div>
        )
}

export default FirstPage