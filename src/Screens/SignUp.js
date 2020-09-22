import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function SignUp() {
	const [emailData, setEmailData] = useState({
		email: "",
	});

	const [passwordData, setPasswordData] = useState({
		password: "",
	});

	const [usernameData, setUsernameData] = useState({
		username: "",
	});

	function emailChange(e) {
		setEmailData({ email: e.target.value });
	}
	function usernameChange(e) {
		setUsernameData({ username: e.target.value });
	}
	function passwordChange(e) {
		setPasswordData({ password: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();

		console.log(emailData.email, passwordData.password, usernameData.username);
	}

	return (
		<div className="container center_div">
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control
							type="email"
							name="email"
							placeholder="Enter email"
							value={EventTarget.value}
							onChange={emailChange}
						/>
					</Form.Group>
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="username"
						name="username"
						placeholder="Enter username"
						value={EventTarget.value}
						onChange={usernameChange}
					/>
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						placeholder="Enter password"
						value={EventTarget.value}
						onChange={passwordChange}
					/>
				</Form.Group>

				<Button type="submit">Register</Button>
			</Form>
		</div>
	);
}

export default SignUp;
