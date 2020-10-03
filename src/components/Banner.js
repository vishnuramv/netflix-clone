import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original";

function Banner() {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginals);
			setMovie(
				request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
			);
			return request;
		}
		fetchData();
	}, []);
    // console.log(movie);
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

	return (
		<div
			className="banner"
			style={{
				backgroundImage: `linear-gradient(to bottom, rgba(245, 246, 252, 0.0), rgba(17, 17, 17, 0.3), rgba(17, 17, 17, 1)), url(${base_url}${movie?.backdrop_path})`,
				backgroundSize: "cover",
				backgroundPosition: "top center",
			}}>
			<div className="banner_content">
				<h1 className="banner_title">
					{movie?.title || movie?.name || movie?.original_title || movie?.original_name}
				</h1>
				<div className="banner_buttons">
					<button className="banner_button">Play</button>
					<button className="banner_button">My List</button>
				</div>
				<p className="banner_description">{truncate(movie?.overview, 200)}</p>
			</div>
		</div>
	);
}

export default Banner;
