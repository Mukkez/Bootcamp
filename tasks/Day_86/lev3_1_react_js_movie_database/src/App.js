import './App.css';
import Card from './components/card/card';
import data from './data/movie_data.json';

function App() {
	return (
		<div className="App">
			<Card movieData={data} />
		</div>
	);
}

export default App;
