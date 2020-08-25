import React from "react";
import { useRouteMatch } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Article() {
	const {
		params: { id },
	} = useRouteMatch();

	const url = `/blogs/${id}`;

	let blogs = useAxiosGet(url);

	let content = null;

	if (blogs.data) {
		content = <div>{blogs.data.title}</div>;
	}
	return <div>{content}</div>;
}

export default Article;
