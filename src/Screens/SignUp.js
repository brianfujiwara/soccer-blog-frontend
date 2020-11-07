import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import axios from "axios";

function SignUp() {
	const URL = "blogs/signup";

	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
		loggedIn: localStorage.getItem("loggedIn") || "false",
	});

	function handleSubmit(e) {
		e.preventDefault();

		const { email, password, username } = user;

		console.log(email, password, username);

		axios
			.post(URL, { email, password, username })
			.then((Response) => {
				//setUser({ ...user, loggedIn: true });
				localStorage.setItem("loggedIn", "true");
				if (Response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(Response.data));
					console.log(Response.data);
				}
			})
			.catch(setUser({ ...user, loggedIn: false }));
	}

	if (user.loggedIn === "true") {
		return <div>Logged in</div>;
	} else {
		return (
			<div className="container center_div">
				<Form onSubmit={handleSubmit}>
					<div>
						<Form.Group>
							<Form.Group>
								<Form.Label>Email</Form.Label>
								<Form.Control
									type="email"
									name="email"
									placeholder="Enter email"
									onChange={(e) => setUser({ ...user, email: e.target.value })}
									value={user.email}
								/>
							</Form.Group>
							<Form.Label>Username</Form.Label>
							<Form.Control
								type="username"
								name="username"
								placeholder="Enter username"
								onChange={(e) => setUser({ ...user, username: e.target.value })}
								value={user.username}
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								placeholder="Enter password"
								onChange={(e) => setUser({ ...user, password: e.target.value })}
								value={user.password}
							/>
						</Form.Group>
					</div>

					<Button type="submit">Register</Button>
				</Form>
			</div>
		);
	}
}

export default SignUp;
