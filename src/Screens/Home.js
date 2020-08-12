import React, { Image } from "react";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Home() {
	//const url = "http://localhost:8080/blogs";
	const url = "/blogs";

	let blogs = useAxiosGet(url);

	let content = null;

	if (blogs.data) {
		content = blogs.data.map((blog, key) => (
			<div key={key}>
				<div>
					<img src={require("../assets/images/Honda.png")} alt="pic"></img>
				</div>
				<h2 className="blog-title">{blog.title}</h2>
				<h3 className="blog-content"> {blog.content}</h3>
			</div>
		));
	}

	return (
		<div className="card">
			<h1>{content}</h1>
		</div>
	);
}

export default Home;
