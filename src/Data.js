import React from "react";
import "./DictLayout.css";

const Info = (props)=>{
    console.log(`object is ${props.obj}`)
    return(
        <div className="data">
                    <div className="singular">
                    <div className="dicProps"align="left">Word : {props.word}</div>
                    <div className="dicProps"align="left">Phonetic :  
                    {props.obj[0].hasOwnProperty("phonetic")? props.obj[0].phonetic : (props.obj[0].phonetics.length>0 ? (props.obj[0].phonetics[0].hasOwnProperty("text")?props.obj[0].phonetics[0].text : props.obj[0].phonetics[1].text):" unvailable")}</div>
                    </div>
                    <div className="dicProps"align="left">Definition : <p>
                    {props.obj[0].meanings[0].definitions.map(obj=>{return <li>{obj.definition}</li> })}</p></div>
                    <div className="dicProps"align="left">Example : <p>{props.obj[0].meanings[0].definitions.map(obj=>
                    {if(obj.example===undefined)return ""
                    else return <li>{obj.example}</li>
                    }
                    )}</p></div> 
                    <div className="dicProps"align="left">Part of Speech : <p>{new Set(props.obj[0].meanings.map(obj=>{
                                return obj.partOfSpeech + " ";
                            }))}</p></div>
                    <div className="singular">
                    <div className="dicProps"align="left">Synonyms :  <p>{new Set(props.obj[0].meanings.map(obj=>{
                                return `${obj.synonyms}`}))} </p></div>
                         </div>
                    <div className="dicProps"align="left">Antonyms :  <p>{new Set(props.obj[0].meanings.map(obj=>{
                                return obj.antonyms+"  "}))} </p></div> 
        </div>
    )
}

export default Info

       
        
   /*
        
        //         <div className="dicProps"align="left">Example : <p>{new Set(props.obj[0].meanings[0].definitions.filter(obj=>{return {obj.example!==undefined}}))}</p></div>
        */
