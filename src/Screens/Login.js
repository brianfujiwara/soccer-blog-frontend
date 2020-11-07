import React from "react";
import { Form, Button } from "react-bootstrap";

function Login() {
	return (
		<div className="container center_div mt-3">
			<Form>
				<Form.Group>
					<Form.Label>Username</Form.Label>
					<Form.Control type="username" placeholder="Enter username" />
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" />
				</Form.Group>

				<Button type="submit">Login</Button>
			</Form>
		</div>
	);
}

export default Login;
