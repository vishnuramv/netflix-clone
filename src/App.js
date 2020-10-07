import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Row from "./components/Row";
import requests from "./request";
function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Row titles="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row titles="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
			<Row titles="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row titles="Action" fetchUrl={requests.fetchActionMovies} />
			<Row titles="Romance" fetchUrl={requests.fetchRomanceMovies} />
            <Row titles="Comedy" fetchUrl={requests.fetchComedyMovies} />
            <Row titles="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row titles="Documentries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
