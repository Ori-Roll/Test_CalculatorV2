import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CalcBody from "./CalcComponents/CalcBody.js";

const meta = {
	title: "Calculator V.2",
	author: "Ori",
};

function App() {
	return (
		<div className='App'>
			<CalcBody />
		</div>
	);
}

export default App;

/*
OLD STUFF
---------
      
      {<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> }




*/
