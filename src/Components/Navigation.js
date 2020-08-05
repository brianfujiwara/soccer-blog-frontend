import React from "react";
import "./Navigation.css";

const navLinks = [
	{ title: "Home", path: "/" },

	{ title: "About", path: "/about" },

	{ title: "Login", path: "/login" },
];

export default function Navigation() {
	return (
		<nav className="nav-bar">
			<span className="nav-title">My Soccer Blog</span>
			<div className="list-container">
				<ul>
					{navLinks.map((link, index) => (
						<li key={index}>{link.title}</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
