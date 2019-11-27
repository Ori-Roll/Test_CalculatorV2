import React, {useState, useEffect} from "react";
import CalcNumPad from "./CalcNumPad.js"
import CalcScreen from "./CalcScreen.js"
import calculate from "./CalcOperations.js"

function CalcBody(){
    
    const [numOnScreen, setNumOnScreen] = useState(0);
    const [requestNumOnScreen, setRequestNumOnScreen] = useState(0);
    const [mode, setMode] = useState("cleard");
    const [total, setTotal] = useState(0);
    const [numIsSet, setNumIsSet] = useState(false);
    //const [isFinished, setIsFinished] = useState(false);

    useEffect(
        ()=>{
            console.log(" - - - - - - - - - - - - - - - - - - - - - -  - - - -" ); 
            console.log(" USE-EFFECT !  requestNumOnScreen was set to: "+requestNumOnScreen); 
            // Is the new number requested for screen too big for it?
            if(requestNumOnScreen>9999 || requestNumOnScreen<-9999){
                console.log("too big or small");
                if(numIsSet===true){
                    console.log("num is SET")
                    setNumOnScreen("err");    
                } else {
                    console.log("num is NOT SET, no more numbers")
                }
            } else {
                setNumOnScreen(requestNumOnScreen);    
            }
            console.log("mode: "+mode);
            console.log("so far total is: "+total);
        }
    ,[requestNumOnScreen]);

    function numPadClicked(keyValue){
        console.log("----------------------------------------------------");
        console.log("keyValue clicked: "+keyValue+" , Now numIsSet: "+numIsSet+", mode: "+mode);
        let newNum = 0;
        if (keyValue==="+" || keyValue==="-" || keyValue==="x" || keyValue==="÷" || keyValue==="=") {
                if        (mode === "+") {
                    if(numIsSet){
                        newNum = Number(numOnScreen);
                        console.log("Locked !")
                    } else {
                        console.log("!!! total is: "+total+" , numOnScreen is: "+numOnScreen);
                        newNum = Number(total)+Number(numOnScreen);
                    };
                } else if (mode === "-") {
                    if(numIsSet){
                        newNum = Number(numOnScreen);
                        console.log("Locked !")
                    } else {
                    console.log("!!! total is: "+total+" , numOnScreen is: "+numOnScreen);
                    newNum = Number(total)-Number(numOnScreen);
                    };
                } else if (mode === "x") {
                    if(numIsSet){
                        newNum = Number(numOnScreen);
                        console.log("Locked !")
                    } else {
                    console.log("!!! total is: "+total+" , numOnScreen is: "+numOnScreen);
                    newNum = Number(total)*Number(numOnScreen);
                    };
                } else if (mode === "÷") {
                    if(numIsSet){
                        newNum = Number(numOnScreen);
                        console.log("Locked !")
                    } else {
                    console.log("!!! total is: "+total+" , numOnScreen is: "+numOnScreen);
                    newNum = Number(total)/Number(numOnScreen);
                    }
                } else if (mode === "cleard") {
                    newNum = Number(numOnScreen);
                } else if (mode === "=") {
                    newNum = Number(numOnScreen);
                }
                setMode(keyValue); console.log("setMode: "+keyValue);
                setTotal(newNum); console.log("setTotal: "+newNum);
                setNumIsSet(true); console.log("setNumIsSet: to true, but---"+numIsSet);
                setRequestNumOnScreen(Number(newNum));
                // if (keyValue==="=") { setIsFinished(true); console.log("finished") }
        } else if (keyValue==="C") {
                console.log(" C clicked ")
                setTotal(0); console.log("setTotal(0)");
                setRequestNumOnScreen(0);console.log("requestNumOnScreen(0)");
                setNumIsSet(true);console.log("setNumIsSet(true)");
                setMode("cleard");console.log("setMode( cleard )");
        } else {
                console.log("number!"+" num is set? : "+numIsSet);
                if (numIsSet===false){
                    newNum = (Number(numOnScreen)*10)+Number(keyValue);
                    setRequestNumOnScreen(Number(newNum));
                } else if (numIsSet===true) {
                    setNumIsSet(false);
                    setRequestNumOnScreen(Number(keyValue));
                }
        }
        /* switch (keyValue){
            case "+"||"-" :
                 console.log(" + or - ");
            break;
            case "0" : 
                console.log("number 0")
                let newNum = (Number(numOnScreen)*10)+Number(keyValue);
                setRequestNumOnScreen(newNum);
            break;
            case "1" : 
                let newNum = (Number(numOnScreen)*10)+Number(keyValue);
                setRequestNumOnScreen(newNum);
            break;
        }; */
    };

       /*  let numOnScreenWas = numOnScreen;
       let operatorOnWas = operatorOn;
       setNumOnScreen( calcEval(keyValue, numOnScreenWas, operatorOnWas, setTotal) ); //IS THIS GOOD PRACTICE? (with passing seState) ??? DENISE!!!
       console.log("total is set to: "+total) */
    
    return(
        <div className="calcBody">
            <CalcScreen numValue={numOnScreen}/>
            <div className="numInterface">
                <CalcNumPad numPadClicked={numPadClicked} />
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