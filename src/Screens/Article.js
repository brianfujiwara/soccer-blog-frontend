import React from "react";
import { useRouteMatch } from "react-router-dom";
import { useAxiosGet } from "../Hooks/HttpRequest";
import { Container } from "react-bootstrap";

function Article() {
	const {
		params: { id },
	} = useRouteMatch();

	const url = `/blogs/${id}`;

	let blogs = useAxiosGet(url);

	let content = null;

	if (blogs.data) {
		content = (
			<div className="articleController">
				<h1>{blogs.data.title}</h1>
				<h2>Written by: {blogs.data.writer}</h2>
				<img src={blogs.data.imgurl} alt=""></img>
				<div className="artcon">
					<p>{blogs.data.content}</p>
				</div>
			</div>
		);
	}
	return (
		<Container>
			<h1 className="mt-4">{content}</h1>
		</Container>
	);
}

export default Article;
