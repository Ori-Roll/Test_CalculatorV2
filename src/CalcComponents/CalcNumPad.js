import React from "react";
import NumberBtn from "./NumberBtn.js";

function CalcNumPad(props){

    const calcBtnValues = [ 
        {btnValue:"1", btnPlace:9},
        {btnValue:"2", btnPlace:10},
        {btnValue:"3", btnPlace:11},
        {btnValue:"4", btnPlace:5},
        {btnValue:"5", btnPlace:6},
        {btnValue:"6", btnPlace:7},
        {btnValue:"7", btnPlace:1},
        {btnValue:"8", btnPlace:2},
        {btnValue:"9", btnPlace:3},
        {btnValue:"0", btnPlace:13},
        {btnValue:"C", btnPlace:14},
        {btnValue:"=", btnPlace:15},
        {btnValue:"+", btnPlace:4},
        {btnValue:"-", btnPlace:8},
        {btnValue:"x", btnPlace:12},
        {btnValue:"÷", btnPlace:16}
    ];
    
    const renderMe = () => {
        return calcBtnValues.map((btnLabel, index)=>{ return <NumberBtn 
                                                                key={btnLabel.btnPlace} 
                                                                btnValue={btnLabel.btnValue} 
                                                                btnPlace={btnLabel.btnPlace} 
                                                                numPadClicked={props.numPadClicked}/>});
    };
    return <div className="calcNumPad"> {renderMe()} </div>
    
};

export default CalcNumPad;
