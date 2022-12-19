import './App.css';
import MovieData from './data/movie_data.json';
import MovieCard from './components/movie_card';

function App() {
	return (
		<div className="App">
			<MovieCard MovieData={MovieData} />
		</div>
	);
}

export default App;
