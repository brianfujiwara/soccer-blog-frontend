import React from "react";
import { useAxiosGet } from "../Hooks/HttpRequest";
import { Card, CardDeck, Container, Button } from "react-bootstrap";

function Home() {
	//const url = "http://localhost:8080/blogs";
	const url = "/blogs";

	let blogs = useAxiosGet(url);

	let content = null;

	if (blogs.data) {
		content = blogs.data.map((blog, key) => (
			<Card className="text-left col-sm" style={{ width: "18rem" }} key={key}>
				<div className="blog-image">
					<Card.Img variant="top" src={require("../assets/images/Honda.png")} />
				</div>
				<Card.Body className="card-body">
					<Card.Title className="blog-title">
						<h1>{blog.title}</h1>
					</Card.Title>
					<Card.Text className="card-text">
						<p> {blog.content}</p>

						<span>Jon Doe</span>
					</Card.Text>
					<a href="#" className="stretched-link"></a>
				</Card.Body>
			</Card>
		));
	}

	return (
		<div className="top">
			<header className="text-center">
				<h1>Most Recent Post</h1>
			</header>
			<Container fluid className="cards-container">
				<CardDeck>{content}</CardDeck>
			</Container>
		</div>
	);
}

export default Home;
