import React, { useState, useEffect } from 'react';
import axios from 'axios'; //axiosnpm
import queryString from 'query-string';
import superMarket from '../components/supermarket.js';

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
			const base = values.b ? values.b : 'USD';
			const symbol = values.s ? values.s : 'JPY';
			setSymbol(symbol);
			setBase(base);
			queryCurrencyAPI(base, symbol);
		}, []);

		function SuperCard({superContent}) {
		    return (
		        <div>
		            <p className="both">{superContent.title}</p>
		            <div className="botc">
		            	{superContent.price} {base} -> {(superContent.price)*(currency.rates && currency.rates[`${symbol}`])} {symbol}
		            </div>
		        </div>
		    )
		};

		return (
			<div className="skel"
			style={{
				backgroundColor: `rgba(52,73,40,${currency.rates && currency.rates[`${symbol}`]})`
			}}>
				<div className="links">
					<a href='?b=USD&s=EUR'>USD to EUR</a>
					<a href='?b=USD&s=JPY'>USD to JPY</a>
					<a href='?b=USD&s=GBP'>USD to GBP</a>
					<a href='?b=USD&s=CNY'>USD to CNY</a>
				</div>
				<p className="top">Base: {currency.base} </p>
				<p className="top">Currency: {symbol}</p>
				<p className="top">Conversion Rate: {currency.rates && currency.rates[`${symbol}`]}</p>
				<p className="mid">Cost of grocery items from a Bougy Market</p>
				<div>
			        {superMarket.map((product, i) =>(
			        <SuperCard superContent={product} key={i}/>
			        ))}
			    </div>
			</div>
			)


	};