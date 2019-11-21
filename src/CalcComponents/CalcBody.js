import React, {useState, useEffect} from "react";
import NumberBtn from "./NumberBtn.js";
import CalcNumPad from "./CalcNumPad.js"
import CalcScreen from "./CalcScreen.js"
import calculate from "./CalcOperators.js"

let cleard = true;

function CalcBody(){
    
    const [numOnScreen, setNumOnScreen] = useState(0);
    const [operatorOn, setOperatorOn] = useState(null);
    const [total, setTotal] = useState(0);

    useEffect(
        ()=>{console.log("EFFECT: "+numOnScreen)}
    ,[numOnScreen]);

    function changeNumOnScreen(btnValue){
        let onScreenNum = numOnScreen;

        switch(btnValue) {
            
            case "+":
                console.log("prev operator was "+operatorOn+" now : "+btnValue);
                if (cleard) {
                    setTotal(numOnScreen);
                    cleard = false; console.log(cleard);
                } else {
                    setTotal( ()=> calculate(operatorOn, onScreenNum, total));
                }
                console.log("total : "+total);
                setNumOnScreen(total); console.log("setNumOnScreen: "+ total);
                setOperatorOn(btnValue); console.log("setOperatorOn: "+ btnValue);
            break;
            case "-":
                console.log("prev operator was "+operatorOn+" now : - subtract function");
                
                setOperatorOn("-");
            break;
            case "x":
                console.log("prev operator was "+operatorOn+" now : x - multiply function");
                
                setOperatorOn("x");
            break;
            case "÷":
                console.log("prev operator was "+operatorOn+" now : ÷ - divide function");
                
                setOperatorOn("÷");
            break;
            case "=":
                console.log("= - equals function");
            break;
            case ".":
                console.log(". - point function");
            break;
    
            default:
                if ((onScreenNum*10) > 9999 || (onScreenNum*10) < -9999){
                    console.log("TOO BIG Or SMALL!");
                } else {
                    onScreenNum =((onScreenNum*10)+Number(btnValue)); 
                    setNumOnScreen(onScreenNum); 
                    console.log("setNumOnScreen: "+onScreenNum);
                    console.log("numOnScreen is now: "+numOnScreen);
                }
            break;
        };
        
    };
    
    return(
        <div className="calcBody">
            <CalcScreen numValue={numOnScreen}/>
            <div className="numInterface">
                <CalcNumPad changeNumOnScreen={changeNumOnScreen} />
            </div>
        </div>    
    );
};

export default CalcBody;

// {calcBtnValues.map((btnLabel) => {
//     return <NumberBtn key={btnLabel} btnValue={btnLabel} />;
// })}


// This makes sure the btn clicked is Nan  <<<<< Dosnt work because of Number.isNaN - +/-/X/=  comes out as NUMBERS!!! 
// --------------------------------------------------------------------------------------------------------------------

/* case Number.isNaN(btnValue):     <<<<< Dosnt work because of Number.isNaN - +/-/X/=  comes out as NUMBERS!!! 
                console.log("is NaN");      
                switch(btnValue) {
                    case "+":
                        console.log("+ function")
                    break;
                    case "-":
                        console.log("- function")
                    break;
                    case "X":
                        console.log("x function")
                    break;
                    case "÷": 
                        console.log("÷ function")
                    break;                
                    case "=": 
                        console.log("= function")
                    break;
                    case "÷": 
                        console.log(". function")
                    break;
                    default:
                        console.log("OOPS, Somthing else")
                }
            break; */