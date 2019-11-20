import React, {useState} from "react";
import NumberBtn from "./NumberBtn.js";
import CalcNumPad from "./CalcNumPad.js"
import CalcScreen from "./CalcScreen.js"

function CalcBody(){
    
    const [numOnScreen, setNumOnScreen] = useState("0.0");

    function changeNumOnScreen(changeReason){
        setNumOnScreen(changeReason);
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