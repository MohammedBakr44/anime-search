import React from 'react';
//import PropTypes from 'prop-types';

const Anime = ({ anime }) => (
		<div>
			<h1>{anime.title}</h1>
			<img src={anime.image_url} alt={anime.title}/>
			<p>Score: {anime.score}</p>
			<p>Episodes: {anime.episodes}</p>
		</div>
);


export default Anime
