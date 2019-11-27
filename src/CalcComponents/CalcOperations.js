/* function calcEval(keyValue, numOnScreenWas, operatorOnWas, setTotal){
    console.log("keyValue was : "+keyValue);
    console.log("numOnScreen was : "+numOnScreenWas);
    console.log("operatorOnWas was : "+operatorOnWas);
    setTotal(100)
    return("THIS"); //Will return the new num to be on screen
}; */


function calculate(clacOperator, newNum, oldTotal){
    let calculated;
    console.log("clacOperator, newNum, oldTotal : "+clacOperator+newNum+oldTotal)
    switch(clacOperator){

        case "+": {
            calculated = oldTotal+newNum;
            console.log("calculate + ...."+" operator: "+clacOperator+" new number: "+newNum+" original Total: "+oldTotal)
        } 
        break;

        case "-": {
            console.log("calculate -");
            calculated = oldTotal-newNum;
        }
        break;

        case "x": {
            console.log("calculate x")
            calculated = oldTotal*newNum;
        }
        break;

        case "÷": {
            console.log("calculate ÷");
            calculated = oldTotal/newNum;
        }
        break;
    };
    return calculated;
    console.log("calculated : "+calculated);
};

export default calculate;
