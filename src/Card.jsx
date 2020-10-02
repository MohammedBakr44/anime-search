import React from 'react';
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types';

const Card = ({ anime }) => {
		const atr = anime.attributes;
		return(
			<div>
				<Link to={`/anime/${anime.id}`}>
				<div className="card">
					<div className="main">
						<h3>{atr.canonicalTitle}</h3>
					</div>
						<div className="sub-card">
						<p>Status: {atr.status}</p>
						<p>Episodes: {atr.episodeCount}</p>
						<p>Rating: { atr.averageRating ? 
								 atr.averageRating : "N/A"}
						</p>
					</div>
					<img src={atr.posterImage.small} alt={atr.canonicalTitle} />
				</div>
				</Link>

			</div>
)};


export default Card
