import React, { useState, useEffect } from 'react';
import Card from './Card'

const Trending = () => {
	const [anime, setAnime] = useState({});

	useEffect(async () => {
		const data = await fetch('https://kitsu.io/api/edge/trending/anime');
		const trend = await data.json();
		setAnime(trend.data);
	}, []);
	return (
		<div className='ternding'>
			<div className='anime'>
				{anime.length > 1
					? anime.map((a) => <Card anime={a} key={a.id} />)
					: null}
			</div>
		</div>
	);
};

export default Trending;
