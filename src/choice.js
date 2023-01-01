import React from "react";

const choice = (props)=>{
    
    return(
        <div className={`choice-box-${props.obj.id}`} onClick={props.handleClick}>
        <h2>{props.obj.name}</h2>
        <img src={props.obj.img} alt={props.obj.name}/>
        <p>{props.obj.description}</p>
        </div>
    )       
}

export default choice 