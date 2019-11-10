import React from "react";

function NumberBtn(props){

    return(
        <button type="button" className="numberBtn" style={{order: props.btnPlace}}>{props.btnValue}</button>
    );

};

export default NumberBtn;