import React from "react";

const Card = () => {
	return (
		<div className="card" style={{ width: "20rem" }}>
			<img
				className="card-img-top"
				src="https://www.elsoldetlaxcala.com.mx/incoming/j3sdgs-perrito.jpg/ALTERNATES/LANDSCAPE_1140/perrito.jpg"
				alt="Card image cap"></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

export default Card;
