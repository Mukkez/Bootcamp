import React from 'react';

const CardItem = (props) => {
	return (
		<div className="w-1/3 max-w-xs p-6 m-4 text-white border-gray-900 rounded-lg shadow-xl bg-zinc-700 border-1">
			<h3 className="p-2 text-xl">{props.title}</h3>
			<p className="p-2">{props.year}</p>
			<p className="p-2">{props.director}</p>
			<p className="p-2">{props.duration}</p>
			<p className="p-2">{props.rate}</p>
			<p className="p-2">{props.item}</p>
		</div>
	);
};

export default CardItem;
