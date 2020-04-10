import React, { useState } from "react";
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {
	const [theme] = useState("numberBtn");

	function toggleTheme() {
		console.log(theme);
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>{props.children}</ThemeContext.Provider>
	);
}

export { ThemeContextProvider, ThemeContext };
