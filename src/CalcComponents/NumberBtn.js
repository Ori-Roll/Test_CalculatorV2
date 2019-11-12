import React from "react";

function btnClick(btnValue){
    console.log("THIS IS MEEEEE!!!:"+btnValue);
};

function NumberBtn(props){

    return(
        <button type="button" className="numberBtn" style={{order: props.btnPlace}} onClick={btnClick(props.btnValue)}>{props.btnValue}</button>
    );

};

export default NumberBtn;