import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/base.scss";
import "antd/dist/antd.css";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/"; /// Global address for all request made with axios.

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
