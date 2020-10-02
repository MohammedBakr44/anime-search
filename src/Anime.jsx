import React, { useState, useEffect } from 'react';
import './Anime.scss';
function Anime({ match }) {
	useEffect(() => {
		Zawarudo();
		// eslint-disable-next-line
	}, []);

	const [anime, setAnime] = useState({});
	const [loading, setLoading] = useState(true);

	const Zawarudo = async () => {
		const data = await fetch(
			`https://kitsu.io/api/edge/anime/${match.params.id}`
		);
		const anime = await data.json();
		console.log(anime.data);
		setAnime(anime.data);
		setLoading(false);
	};

	console.log(anime);
	const atr = anime.attributes;

	return (
		<div className='Anime'>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<div
						className='cover'
						style={{
							backgroundImage: `url('${atr.coverImage.original}')`,
						}}
						alt={atr.canonicalTitle}>
						<div className='overlay'>
							<p>{atr.synopsis}</p>
						</div>
					</div>
					<div className="main">
						<div className="poster" style={{
							backgroundImage: `url('${atr.posterImage.medium}')`
						}}>
						</div>
						<h1>{atr.canonicalTitle}</h1>
					</div>
				</div>
			)}
		</div>
	);
}

export default Anime;
