import React from "react";
import { isNumber } from "util";

let onScreenNum = 0.0;

function NumberBtn(props){

    function btnClick(e, btnValue){
        // console.log("It's-a-meee, "+btnValue+"."/* ,e */ , "target: "+e.target);
        props.changeNumOnScreen(btnValue);
    };

    return(
        <button 
            type="button" 
            className="numberBtn" 
            style={{order: props.btnPlace}} 
            onClick={(e) => {btnClick(e, props.btnValue)}}
        >
            {props.btnValue}
        </button>
    );

};

export default NumberBtn;