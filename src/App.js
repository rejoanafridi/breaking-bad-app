import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Charecters from "./Components/Charecters";

const App = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setLoading] = useState([true]);
  const [query, setQuery] = useState('');
	useEffect(() => {
		const fetchItems = async () => {
			const results = await axios(
				`https://www.breakingbadapi.com/api/characters?name=${query}`
			);
			console.log(results.data);
			setItems(results.data);
			setLoading(false);
		};
		fetchItems();
	}, [query]);
	return (
		<div>
			<Header />
			<Search getQuery={(q)=> setQuery(q)}/>
			<Charecters isLoading={isLoading} items={items}/>
		</div>
	);
};

export default App;
