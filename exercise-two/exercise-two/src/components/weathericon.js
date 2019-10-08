import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudRain, faCloud, faSun, faSmog } from '@fortawesome/free-solid-svg-icons';

export default function WeatherIcon({weatherType}) {
	// console.log('weatherType', weatherType)
	let icon;
	switch(weatherType) {
		case 'Rain':
			return (<FontAwesomeIcon icon={faCloudRain}/>);
		case 'Clouds':
			return (<FontAwesomeIcon icon={faCloud}/>);
		case 'Clear':
			return (<FontAwesomeIcon icon={faSun}/>);
		case 'Mist':
			return (<FontAwesomeIcon icon={faSmog}/>);
		default:
			return (
				<div></div>
			);
	};
};