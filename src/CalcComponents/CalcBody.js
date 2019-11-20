import React, {useState} from "react";
import NumberBtn from "./NumberBtn.js";
import CalcNumPad from "./CalcNumPad.js"
import CalcScreen from "./CalcScreen.js"

function CalcBody(){
    
    const [numOnScreen, setNumOnScreen] = useState("0.0");

    
    return(
        <div className="calcBody">
            <CalcScreen/>
            <div className="numInterface">
                <CalcNumPad/>
            </div>
        </div>    
    );
};

export default CalcBody;

// {calcBtnValues.map((btnLabel) => {
//     return <NumberBtn key={btnLabel} btnValue={btnLabel} />;
// })}