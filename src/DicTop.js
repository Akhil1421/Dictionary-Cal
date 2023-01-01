import React from "react";
import "./DictLayout.css";

const DicTop = (props)=>{
    return(
        <div className="dictionary-top">
            <input type="text" placeholder="Enter word" className="word" onChange={props.handleChange}/>
            <button onClick={props.getObject}>Search</button>
        </div>
    )
}
export default DicTop