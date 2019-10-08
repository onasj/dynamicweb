import React, { useState, useEffect } from 'react';
import axios from 'axios'; //axiosnpm
import queryString from 'query-string';
import WeatherIcon from '..//components/weathericon.js';


	export default function Home(props){
		const [city, setCity] = useState('');
		const [weather, setWeather] = useState({});
		const [weatherType, setWeatherType] = useState('');
		const [Cloudy, setCloudy] = useState(0);
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
			const values = queryString.parse(props.location.search)
			const city = values.q ? values.q : 'London';
			setCity(city);
			queryWeatherAPI(city);
			// console.log('weather test', queryWeatherAPI(city));

		}, []);

		useEffect(() => {
			let getWeatherType = weather.weather ? weather.weather[0].main : '';
			let getCloudy = weather.clouds ? weather.clouds.all : 0;
			setWeatherType(getWeatherType);
			setCloudy(getCloudy);
			// console.log('weathertype', weatherType);
		}, [weather])

		// console.log('weather',weather);
		// console.log(Cloudy);

		return (
			<div className="Page" style={{
				height:'100%',
				width: '100%',
				minHeight: '100vh',
				minWidth: '100vw',
				backgroundColor: `rgba(0,0,0,${Cloudy * 0.01})`
			}}>
				<a className="Locations" href='?q=Seoul'>Seoul</a>
				<a className="Locations" href='?q=London'>London</a>
				<a className="Locations" href='?q=California'>California</a>
				<a className="Locations" href='?q=Belgium'>Belgium</a>
				<h1>Weather in {city}</h1>
				<div>{WeatherIcon({weatherType})}</div>
				<p>Weather: {weather.weather ? weather.weather[0].main : ''} </p>
				<p>Current Temperature: {weather.main && weather.main.temp} </p>
				<p>Max Temperature: {weather.main && weather.main.temp_max} </p>
				<p>Min Temperature: {weather.main && weather.main.temp_min} </p>
				<p>Humidity: {weather.main && weather.main.humidity} </p>
				<p>Cloudiness: {weather.clouds && weather.clouds.all} </p>
				<p>Wind Speed: {weather.wind && weather.wind.speed} </p>
			</div>
		);
	}