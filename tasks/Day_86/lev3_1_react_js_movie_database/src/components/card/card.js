import React from 'react';
import CardItem from '../item/item';
import MovieCardButton from '../btn/btn';
import { useState, useEffect } from 'react';

const Card = (props) => {
	const [movieData, setMovieData] = useState([]);

	useEffect(() => {
		setMovieData(props.movieData);
	}, [props.movieData]);

	function sortByDateAscending() {
		const sortedData = [...movieData].sort((a, b) => {
			return a.year - b.year;
		});
		setMovieData(sortedData);
	}
	function sortByDateDescending() {
		const sortedData = [...movieData].sort((a, b) => {
			return b.year - a.year;
		});
		setMovieData(sortedData);
	}
	function sortByBestRate() {
		const sortedData = [...movieData].sort((a, b) => {
			return b.rate - a.rate;
		});
		setMovieData(sortedData);
	}
	function sortByAtoZ() {
		const sortedData = [...movieData].sort((a, b) => {
			return a.title > b.title ? 1 : -1;
		});
		setMovieData(sortedData);
	}
	function sortByZtoA() {
		const sortedData = [...movieData].sort((a, b) => {
			return b.title > a.title ? 1 : -1;
		});
		setMovieData(sortedData);
	}

	const cardSort = movieData.map((content) => {
		return (
			<CardItem
				title={content.title}
				year={content.year}
				director={content.director}
				duration={content.duration}
				rate={content.rate}
				item={content.genre.map((item) => (
					<p className="p-1">{item}</p>
				))}
			/>
		);
	});

	return (
		<div>
			<h1 className="p-6 text-5xl">Movie Database</h1>

			<div className="flex flex-wrap justify-center">
				<MovieCardButton buttonText="Sort by Date Ascending" onClick={sortByDateAscending} />
				<MovieCardButton buttonText="Sort by Date Descending" onClick={sortByDateDescending} />
				<MovieCardButton buttonText="Best Rate" onClick={sortByBestRate} />
				<MovieCardButton buttonText="A-Z" onClick={sortByAtoZ} />
				<MovieCardButton buttonText="Z-A" onClick={sortByZtoA} />
			</div>

			<div class="flex flex-wrap justify-center">{cardSort}</div>
		</div>
	);
};

export default Card;
