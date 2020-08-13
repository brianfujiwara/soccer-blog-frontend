import React, { Image } from "react";
import { useAxiosGet } from "../Hooks/HttpRequest";

function Home() {
	//const url = "http://localhost:8080/blogs";
	const url = "/blogs";

	let blogs = useAxiosGet(url);

	let content = null;

	if (blogs.data) {
		content = blogs.data.map((blog, key) => (
			<div className="article" key={key}>
				<div className="blog-image">
					<img src={require("../assets/images/Honda.png")} alt="pic"></img>
				</div>
				<div className="blog-title">
					<h1>{blog.title}</h1>

					<p> {blog.content}</p>

					<span>Jon Doe</span>
				</div>
			</div>
		));
	}

	return (
		<div className="top">
			<header>
				<h1>Most Recent Post</h1>
			</header>
			<div className="cards">{content}</div>;
		</div>
	);
}

export default Home;
