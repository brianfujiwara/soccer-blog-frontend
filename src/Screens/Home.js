import React from "react";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Home() {
	//const url = "http://localhost:8080/blogs";
	const url = "/blogs";

	let blogs = useAxiosGet(url);

	let content = null;

	if (blogs.data) {
		content = blogs.data.map((blog, key) => <div key={key}>{blog.title}</div>);
	}

	return (
		<div>
			<h1>{content}</h1>
		</div>
	);
}

export default Home;
