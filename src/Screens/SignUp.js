import React from "react";
import { Form, Button } from "react-bootstrap";

function handleSubmit(e) {
	alert("hey yo");
}

function SignUp() {
	return (
		<div className="container center_div">
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Label>Username</Form.Label>
					<Form.Control type="username" placeholder="Enter username" />
				</Form.Group>

				<Form.Group>
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Enter password" />
				</Form.Group>

				<Button type="submit">Register</Button>
			</Form>
		</div>
	);
}

export default SignUp;
