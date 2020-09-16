import React from "react";
import { Card, Form, Button } from "react-bootstrap";

function Login() {
	return (
		<div className="container center_div mt-3">
			<Card className="card card-container">
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
			</Card>
		</div>
	);
}

export default Login;
