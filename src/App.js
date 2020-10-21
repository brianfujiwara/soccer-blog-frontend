import React from "react";

import Navigation1 from "./Components/Navigation/Navigation1";

import Home from "./Screens/Home";
import About from "./Screens/About";
import Login from "./Screens/Login";
import Article from "./Screens/Article";
import SignUp from "./Screens/SignUp";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<Navigation1 />
				<div className="drake">
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/about">
							<About />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signup">
							<SignUp />
						</Route>
						<Route exact path="/:id" component={Article} />{" "}
					</Switch>
				</div>
				<footer>
					<span> Contact Us</span>
				</footer>
			</div>
		</Router>
	);
}

export default App;
