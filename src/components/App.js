/* Movie Database: Entertainment Data Hub
API Features:
  Get/Images/Redirect
Matching
  Get Data Mactch
  Get ID Match
Searching
  Get Search

Site Features
  * Signup form
  * Login form
  * Search form 
    - title
    - ID

  * Display
    - Title
    - Descriptions
    - Date
      - Year
      - Month
    - Genres

  * Chat / Messaging
    - Send 
    - Rceive

  * User Porfile
*/

/* Middleware / Libaries
  Axios
  Socket.io
  Express.js
  React
  .Env
*/

// Step: Dispaly a Database response
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios
			.get(
				// `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
				`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=US&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
			)
			.then(function (response) {
				return setMovies([...response.data.results]);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	return (
		<>
			<h1>Movie App</h1>
			<h3>Discover Movies</h3>
			<ol>
				{movies.map((movie, index) => (
					<li key={index}>{movie.original_title}</li>
				))}
			</ol>
		</>
	);
}
