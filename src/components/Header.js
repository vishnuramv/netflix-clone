import React, { useEffect, useState } from "react";
import './Header.css'
function Header() {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if(window.scrollY > 100) {
				handleShow(true);
			}
			else handleShow(false);
		});
		return () => {
			window.removeEventListener("scroll");
		};
	}, []);
	console.log(show);
	return (
		<div className={`header ${show && "header_black"}`}>
			<img
				className="header_logo"
				src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
				alt="NETFLIX"
			/>
		</div>
	);
}

export default Header;
