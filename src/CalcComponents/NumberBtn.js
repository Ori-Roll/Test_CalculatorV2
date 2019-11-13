import React from "react";

function btnClick(e, btnValue){
    console.log("It's-a-meee, "+btnValue+".", e);
};

function NumberBtn(props){

    return(
        <button type="button" className="numberBtn" style={{order: props.btnPlace}} onClick={(e) => {btnClick(e, props.btnValue)}}>{props.btnValue}</button>
    );

};

export default NumberBtn;