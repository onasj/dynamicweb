import React, { useState, useEffect } from 'react';
import axios from 'axios'; //axiosnpm


	export default function Home(props){
		const [city, setCity] = useState('');
		const [weather, setWeather] = useState({});
		const apiKey = '72755bc467c1d53c659735f90fec6c06';

		function queryWeatherAPI(queryCity){
			axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}`)
			.then(function(response){
				console.log('response', response);
				setWeather(response.data);
				return response;
			})
			.catch(function(error) {
				console.log('error', error);
				return error;
			});
		}

		useEffect(() => {
			const urlParams = new URLSearchParams(props.location.search);
			const cityParam = urlParams.get('city') ? urlParams.get('city') : 'London';
			setCity(cityParam);
			queryWeatherAPI(cityParam);
			console.log('weather test', queryWeatherAPI(cityParam));
			console.log(urlParams);

		}, []);

		console.log('weather',weather);

		return (
			<div>
				<a href="?q=Seoul">Seoul</a>
				<h1>Weather in {city}</h1>
				<p>Current Temperature: {weather.main && weather.main.temp} </p>
				<p>Max Temperature: {weather.main && weather.main.temp_max} </p>
				<p>Min Temperature: {weather.main && weather.main.temp_min} </p>
				<p>Humidity: {weather.main && weather.main.humidity} </p>
				<p>Cloudiness: {weather.clouds && weather.clouds.all} </p>
				<p>Wind Speed: {weather.wind && weather.wind.speed} </p>
			</div>
		);
	}