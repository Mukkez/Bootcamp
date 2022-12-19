import React from 'react';

const MovieCardButton = (props) => {
	return (
		<div>
			<button onClick={props.onClick} className="px-4 py-2 m-4 font-bold text-white rounded-full bg-zinc-700">
				{props.buttonText}
			</button>
		</div>
	);
};

export default MovieCardButton;
