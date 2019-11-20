import React, {useState} from "react";
import NumberBtn from "./NumberBtn.js";
import CalcNumPad from "./CalcNumPad.js"
import CalcScreen from "./CalcScreen.js"

function CalcBody(){
    
    const [numOnScreen, setNumOnScreen] = useState("0.0");

    function changeNumOnScreen(btnValue){
        let onScreenNum = numOnScreen;

        switch(btnValue) {
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
            case "+":
                console.log("+ - add function");
            break;
            case "-":
                console.log("- - subtract function");
            break;
            case "x":
                console.log("x - multiply function");
            break;
            case "÷":
                console.log("÷ - divide function");
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
                    console.log("DISPLAY: "+onScreenNum);
                    setNumOnScreen(onScreenNum);
                }
            break;
        }
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