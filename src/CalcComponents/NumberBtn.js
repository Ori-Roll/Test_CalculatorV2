import React from "react";
import { isNumber } from "util";

let onScreenNum = 0.0;

function btnClick(e, btnValue){
    console.log("It's-a-meee, "+btnValue+"."/* ,e */ , "target: "+e.target);
            
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
            onScreenNum =((onScreenNum*10)+Number(btnValue));
            console.log("DISPLAY: "+onScreenNum);
        break;
    }
};

function NumberBtn(props){

    return(
        <button type="button" className="numberBtn" style={{order: props.btnPlace}} onClick={(e) => {btnClick(e, props.btnValue)}}>{props.btnValue}</button>
    );

};

export default NumberBtn;