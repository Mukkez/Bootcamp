import React from 'react';

const MovieCard = (props) => {
	return (
		<div>
			<h1 className="text-5xl p-6">Movie Database</h1>
			<div class="flex flex-wrap justify-center">
				{props.MovieData.map((content) => (
					<div className="w-1/3 max-w-xs m-4 p-6 bg-zinc-700  text-white border-1 border-gray-900 rounded-lg shadow-xl">
						<h3 className="p-2">{content.title}</h3>
						<p className="p-2">{content.year}</p>
						<p className="p-2">{content.director}</p>
						<p className="p-2">{content.duration}</p>
						<p className="p-2">{content.rate}</p>
						<p>
							{content.genre.map((item) => (
								<p className="p-1">{item}</p>
							))}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default MovieCard;
