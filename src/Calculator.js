import React from "react";
import Rows from "./calData"
import "./Cal.css"
import evaluate from "./evaluateEq"
const Calculator = ()=>{
    let [equation,setEquation] = React.useState([])
    function add(event){
        let symbols = ["+","*", "/", "%", "B", "C", "^", "=", "-"]
        if(!symbols.includes(event.target.innerText)){
                setEquation(prev=>{
                    let a=[] 
                    for(let i=0;i<prev.length;i++){
                        a.push(prev[i])
                    }
                    if(a.length>0){
                        if(!symbols.includes(a[a.length-1])){
                             a[a.length-1] = a[a.length-1]+event.target.innerText;
                        }
                        else {
                            if(a.length===1 && a[0]==="-"){
                                a[0]+=event.target.innerText;
                            }
                            else a.push(event.target.innerText)
                        }
                    }
                    else a.push(event.target.innerText)
                    return a
                })
        }
        else{
            let evalSymbols = ["=", "B", "C", ""]
            if(!evalSymbols.includes(event.target.innerText)){
                setEquation(prev=>[...prev, event.target.innerText]);
            }
            else{
            if(event.target.innerText==="C"){
                setEquation([])
            }
            if(event.target.innerText==="B"){
                let specSymb = ["+","-","*","%","^","/"]
                setEquation(equation=>{
                    let eq = []
                    for(let i=0;i<equation.length-1;i++){
                        eq.push(equation[i])
                    }
                    if(equation.length===0)return eq
                    if(specSymb.includes(equation[equation.length-1])){
                        return eq
                    }
                    else{
                        if(equation.length===1){
                           if(typeof(equation[0])==="number"){
                                return []
                           }
                        }
                        let a = [...eq, equation[equation.length-1].slice(0, equation[equation.length-1].length-1)]   
                        if(a.length===0){
                            a=[]
                            return a
                        }
                        if(a[a.length-1]===''){
                            a.pop()
                        }
                        return a
                    }
                })
            }
            else{
                setEquation(prev=>{
                    let previous = [...prev]
                    return evaluate(previous);
                })
            }
                
            }
        }
    }
    function f1(prev){
        return prev.map((val,index)=><button  key = {index} className = "btnCal" onClick={add}>{val}</button>)
    }
    let rows = Rows.map(f1);
    rows = rows.map((val,index)=>{
        return(
            <div className="row">
                {val}
                <br/>
            </div>
        )
    })
    console.log(equation)
    let a = equation.length ? equation : "Calculation Result"
    return(
        <div className="Cal">
        <div className="inside">
        <p className="cal-input" align="right">{a}</p>
        {rows}
        </div>
        </div>
    )
}
export default Calculator