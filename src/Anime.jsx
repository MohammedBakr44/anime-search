import React from 'react';
//import PropTypes from 'prop-types';

const Anime = ({ anime }) => (
		<div>
			<div className="card">
				<div className="main">
					<h3>{anime.title}</h3>
				</div>
				<div className="sub-card">
					<p>Status: {anime.airing ? "Ongoing" : "Completed"}</p>
					<p>Episodes: {anime.episodes}</p>
					<p>Score: {anime.score}</p>
				</div>
				<img src={anime.image_url} alt={anime.title} />
			</div> 
		</div>
);


export default Anime
