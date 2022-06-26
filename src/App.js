import React, { useState, useEffect } from 'react';
import Countries from './component/Countries';
import SearchCountry from './component/SearchCountry';
// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './component/countries.module.css'


const url = "https://restcountries.com/v3.1/all";
function App() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [contries, setCountries] = useState([]);
	const [filteredCountries, setFilteredCountries] = useState([]);

	const fetchData = async (url) => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			setCountries(data);
			setFilteredCountries(data);
			setLoading(false);
			setError(null);
			console.log(contries)
		} catch (error) {
			setLoading(false);
			setError(error);
		}
	}
	useEffect(() => {
		fetchData(url);
	}, []);

	const handleRemoveCountry = (name) => {
		const filter = filteredCountries.filter((Country) => Country.name.common !== name);
		setFilteredCountries(filter)
	}

	const handleSearch = (searchValue) => {
		let value = searchValue.toLowerCase();
		const newCountries = contries.filter((country) => {
			const countryName = country.name.common.toLowerCase();
			return countryName.startsWith(value)
		});
		setFilteredCountries(newCountries);
	}

	return (
		<div className="App">
			<h1 className={style.heading}>This is country app</h1>

			<SearchCountry onSearch={handleSearch} />

			{loading && <h3> Loading...</h3>}
			{error && <h3>{error.message}</h3>}
			{contries && <Countries Countries={filteredCountries} onRemoveCountry={handleRemoveCountry} />}
		</div>
	);
}

export default App;
