import React from "react";
import "./DictLayout.css"
import Top from "./DicTop"
import Info from "./Data"
const Full = ()=>{
    let [word,setWord] = React.useState("");
    function save(event){
        setWord(event.target.value);
    }
    let [obj,setObj] = React.useState({name: {word},phonetic: "",  
                      meanings: [{definitions: {definition: "", example:""}, partofSpeech:"", synonyms: [], antonyms: []}],
                    phonetics : [{text: ""}]})
    let [need, setNeed] = React.useState(false)
    function objvalue(){
        console.log("Clicked")
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res=>res.json())
        .then(data => setObj(data))
        setTimeout(() => {setNeed(true)}, 2000);
        console.log(obj)
    }
    return(
        <div className="Dictionary">
        <Top handleChange={save} getObject={objvalue}/>   
        {need && <Info obj = {obj} word={word} />}
        </div>
    )
}
export default Full