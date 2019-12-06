import React, {useState} from "react";
const ThemeContext = React.createContext();

function ThemeContextProvider(props) {

    const[theme, setTheme] = useState("numberBtn")

    function toggleTheme(){
        setTheme( prevTheme=> prevTheme==="numberBtn" ? "numberBtnDark" :"numberBtn" );
        console.log(theme);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );

};

export {ThemeContextProvider, ThemeContext};