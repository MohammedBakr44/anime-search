import React, { useState, useEffect } from 'react'
import './App.scss'
import Anime from './Anime'
import Card from './Card'
import Trending from './Trending'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
 
	const [anime, setAnime] = useState([]);
	const [query, setQuery] = useState("");
	const [search, setSearch] = useState("");	

	const Zawarudo = async () => {
		//const data = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&genre=12?genre_exclude=1`);
			const data = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${query}`);
		const fetchAnime = await data.json();
		setAnime(fetchAnime.data);
		//console.log(fetchAnime);
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
	<Router>	  
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
				<Switch>
						<Route path="/anime/:id" component={Anime}></Route>
						<Route path="/trending" component={Trending}></Route>
			<div className="anime">
						{anime.length > 1 ? anime.map(a => (			
								<Card anime={a} key={a.id}/>		
						)) : null}		
			</div>
			</Switch>			
		</div>
	</Router>		
  )
}

export default App
