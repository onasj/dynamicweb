import React, { useState, useEffect } from 'react';
import axios from 'axios'; //axiosnpm


	export default function Home(props){
		const [city, setCity] = useState('');
		const [weather, setWeather] = useState('');
		const apiKey = '72755bc467c1d53c659735f90fec6c06';

		function queryWeatherAPI(queryCity){
			axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${queryCity}&APPID=${apiKey}`)
			.then(function(response){
				console.log('response', response);
				setWeather(response.data.main.humidity);
				return response;
			})
			.catch(function(error) {
				console.log('error', error);
				return error;
			});
		}

		useEffect(() => {
			setCity('London');
			queryWeatherAPI('London');
			console.log('weather test', queryWeatherAPI('London'));
		}, []);

		console.log('weather',weather);

		return (
			<div>
				<h1>Weather in {city}</h1>
				<p>Humidity: {weather} </p>
			</div>
		);
	}