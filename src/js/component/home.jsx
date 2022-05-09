import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotrom from "./jumbotrom.jsx";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Jumbotrom />
			<div className="row d-flex justify-content-center">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
