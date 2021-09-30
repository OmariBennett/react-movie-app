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
				`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
			)
			.then(function (response) {
				return setMovies([...response.data.results]);
			});
	}, []);

	return (
		<>
			<h1>Hola World!</h1>
			<ol>
				{movies.map((obj, index) => (
					<li key={index}>{obj.original_title}</li>
				))}
			</ol>
		</>
	);
}
