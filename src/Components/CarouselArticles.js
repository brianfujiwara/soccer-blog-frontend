import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselArticles() {
	return (
		<Carousel>
			<Carousel.Item>
				<img
					className="d-block w-100 img-fluid"
					src="https://media.gettyimages.com/photos/julen-lopetegui-head-coach-of-sevilla-in-action-during-a-training-picture-id1267369308?s=2048x2048"
					alt="main article"
					style={{ height: "auto" }}
				/>

				<Carousel.Caption>
					<span className="title">Lyon Loses to Bayern</span>
					<p>missed chances caused the game for Lyon</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 img-fluid"
					src="https://media.gettyimages.com/photos/head-coach-of-inter-antonio-conte-and-his-players-attend-the-ceremony-picture-id1228145536?s=2048x2048"
					alt="main article"
				/>

				<Carousel.Caption>
					<span className="title"> Loses to Bayern</span>
					<p>missed chances caused the game for Lyon</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 img-fluid"
					src="https://media.gettyimages.com/photos/players-of-sevilla-celebrate-their-victory-after-their-team-crowned-picture-id1228145303?s=2048x2048"
					alt="main article"
				/>

				<Carousel.Caption>
					<span className="title">Lyon Loses to Bayern</span>
					<p>missed chances caused the game for Lyon</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}
