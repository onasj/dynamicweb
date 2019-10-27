import React, { useState, useEffect } from 'react';
import axios from 'axios'; //axiosnpm
import queryString from 'query-string';

	export default function Home(props){
		// const apiKey = 'bcdde1de5d0d7d0b06c69d19191f54be';
		const [currency, setCurrency] = useState({});
		const [base, setBase] = useState('');
		const [symbol, setSymbol] = useState('');

		function queryCurrencyAPI(queryCurrency, queryOther){
			axios.get(`https://api.exchangeratesapi.io/latest?base=${queryCurrency}&symbols=${queryOther}`)
			.then(function(response){
				console.log('response', response);
				setCurrency(response.data);
				return response;
			})
			.catch(function(error) {
				console.log('error', error);
				return error;
			});
		}

		useEffect(() => {
			const values = queryString.parse(props.location.search)
			const base = values.b ? values.b : 'EUR';
			const symbol = values.s ? values.s : 'JPY';
			setSymbol(symbol);
			setBase(base);
			queryCurrencyAPI(base, symbol);

		}, []);

		return (
			<div>
				<p>The Page</p>
				<a href='?b=USD&s=EUR'>USD to EUR</a>
				<a href='?b=USD&s=JPY'>USD to JPY</a>
				<p>Base: {currency.base} </p>
				<p>Rate: {symbol}</p>
				<p> {currency.rates && currency.rates[`${symbol}`]} </p>
			</div>
			)
	}