function evaluate(prev){
    while(prev.length>1){
        console.log(prev)
        if(prev.includes("^")){
            prev[prev.indexOf("^")-1] = Math.pow(Number(prev[prev.indexOf("^")-1]), Number(prev[prev.indexOf("^")+1]))
            prev.splice(prev.indexOf("^"),2);
            continue;
        }
        if(prev.includes("/")){
            prev[prev.indexOf("/")-1] = Number(prev[prev.indexOf("/")-1])/Number(prev[prev.indexOf("/")+1]);
            prev.splice(prev.indexOf("/"),2);
            continue;
        }
        if(prev.includes("*")){
            prev[prev.indexOf("*")-1] = Number(prev[prev.indexOf("*")-1])*Number(prev[prev.indexOf("*")+1]);
            prev.splice(prev.indexOf("*"),2);
            continue;
        }
        if(prev.includes("-")){
            prev[prev.indexOf("-")-1] = Number(prev[prev.indexOf("-")-1])-Number(prev[prev.indexOf("-")+1]);
            prev.splice(prev.indexOf("-"),2);
            continue;
        }
        if(prev.includes("+")){
            prev[prev.indexOf("+")-1] = Number(prev[prev.indexOf("+")-1])+Number(prev[prev.indexOf("+")+1]);
            prev.splice(prev.indexOf("+"),2);
            continue;
        }
        if(prev.includes("%")){
            prev[prev.indexOf("%")-1] = (Number(prev[prev.indexOf("%")-1])*Number(prev[prev.indexOf("%")+1]))/100;
            prev.splice(prev.indexOf("%"),2);
            continue;
        }
    }
    return prev
}
export default evaluate