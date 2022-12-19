import './App.css';
import MovieCard from './components/movie_card';
import data from './data/movie_data.json';

function App() {
	return (
		<div className="App">
			<MovieCard movieData={data} />
		</div>
	);
}

export default App;
