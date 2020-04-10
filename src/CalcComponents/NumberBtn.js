import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";

let onScreenNum = 0.0;

function NumberBtn(props) {
	const { theme, toggleTheme } = useContext(ThemeContext);

	function btnClick(e, btnValue) {
		// console.log("It's-a-meee, "+btnValue+"."/* ,e */ , "target: "+e.target);
		console.log("It's-a-meee, " + btnValue + ".", "Theme context is: " + theme);
		props.numPadClicked(btnValue);
		toggleTheme();
	}

	return (
		<button
			type='button'
			className={theme}
			style={{ order: props.btnPlace }}
			onClick={(e) => {
				btnClick(e, props.btnValue);
			}}>
			{props.btnValue}
		</button>
	);
}

export default NumberBtn;
