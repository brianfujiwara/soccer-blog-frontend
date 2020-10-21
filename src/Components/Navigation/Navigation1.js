import React from "react";

import { Navbar, Nav } from "react-bootstrap";

import "./Navigation1.css";

const navLinks = [
	{ title: "Home", path: "/" },

	{ title: "About", path: "/about" },

	{ title: "Login", path: "/login" },
	{ title: "Sign Up", path: "/signup" },
];

export default function Navigation1() {
	return (
		<Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
			<Navbar.Brand>
				<Nav.Link to="/" className="titleName">
					First Touch Blog
				</Nav.Link>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="nav__top">
					{navLinks.map((link, index) => (
						<Nav.Item key={index}>
							<Nav.Link href={link.path} className="nav__link">
								<span className="nav__title">{link.title}</span>
							</Nav.Link>
						</Nav.Item>
					))}
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
