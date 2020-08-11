import React from "react";

import Navigation from "./Components/Navigation";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Login from "./Screens/Login";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
