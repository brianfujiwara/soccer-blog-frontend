import React from "react";

import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Screens/Home";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Home />
		</div>
	);
}

export default App;
