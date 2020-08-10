
import React, { useState, useEffect } from 'react'
import './App.css'
import Anime from './Anime'

function App() {
 
	const [anime, setAnime] = useState([]);
	const [query, setQuery] = useState("");
	const [search, setSearch] = useState("");	


	const Zawarudo = async () => {
		const data = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}`);
		const fetchAnime = await data.json();
		setAnime(fetchAnime.results);
		console.log(fetchAnime);
	};

	useEffect(() => {
		Zawarudo();
		// eslint-disable-next-line react-hooks/exhaustive-deps	
	}, [query]);	
		

	const changeQuery = e => {
		e.preventDefault();	
		setQuery(search);
		setSearch("");	
	}

	const updateSearch = e => {
		setSearch(e.target.value);
	}


  return (
    <div className="App">
		<div className="search-form">	
			<form onSubmit={changeQuery}>
				<input type="text" 
					value={search}
					onChange={updateSearch}
					placeholder="Search for anime..."	
				/>
				<button><i className="fas fa-search"/></button>
			</form>
		</div>		
		<div className="anime">
				{anime.length > 1 ? anime.map(a => (<Anime anime={a} key={a.mal_id}/>)) : null}	
		</div>		
	</div>
  )
}

export default App
