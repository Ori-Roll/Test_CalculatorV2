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
