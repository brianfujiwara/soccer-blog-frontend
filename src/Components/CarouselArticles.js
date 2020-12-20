import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAxiosGet } from "../Hooks/HttpRequest";

export default function CarouselArticles() {
	const url = "blogs/slider";

	let blogs = useAxiosGet(url);

	let content = null;

	if (blogs.data) {
		content = blogs.data.map((blog, key) => (
			<Carousel.Item key={key}>
				<img
					className="d-block w-100 img-fluid"
					src={blog.imgurl}
					alt="article"
				/>
				<Carousel.Caption>
					<h3 className="title">{blog.title}</h3>
				</Carousel.Caption>
				<Link
					to={{ pathname: `/${blog.id}` }}
					className="stretched-link"
				></Link>{" "}
			</Carousel.Item>
		));
	}

	return (
		<div>
			<Carousel>{content}</Carousel>
		</div>
	);
}
