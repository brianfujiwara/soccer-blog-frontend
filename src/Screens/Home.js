import React from "react";
import { useAxiosGet } from "../Hooks/HttpRequest";
import { Card, CardDeck, Container } from "react-bootstrap";
import CarouselArticles from "../Components/CarouselArticles";
import { Link } from "react-router-dom";

function Home() {
	//const url = "http://localhost:8080/blogs";
	//const url = "/blogs";

	const url = "/blogs/passpost";

	let blogs = useAxiosGet(url);

	let content = null;

	if (blogs.data) {
		content = blogs.data.map((blog, key) => (
			<Card className="text-left col-sm" style={{ width: "18rem" }} key={key}>
				<div className="blog-image">
					{/*<Card.Img variant="top" src={require("../assets/images/Honda.png")} />*/}
					<Card.Img src={blog.imgurl} />
				</div>
				<Card.Body className="card-body d-flex flex-column">
					<Card.Title className="blog-title">
						<h1>{blog.title}</h1>
					</Card.Title>
					<Card.Text className="card-text mt-auto">
						<span> {blog.writer}</span>
					</Card.Text>
					<Link
						to={{ pathname: `/${blog.id}` }}
						className="stretched-link"
					></Link>{" "}
				</Card.Body>
			</Card>
		));
	}

	return (
		<div className="top">
			<CarouselArticles />

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
