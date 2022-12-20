import './App.css';
import Card from './components/card/card';
import Data from './data/movie_data.json';

function App() {
	return (
		<div className="App">
			<Card movieData={Data} />
		</div>
	);
}

export default App;
