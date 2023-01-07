import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import AboutArticle from './Pages/AboutArticle';

function App() {
	return (
		<BrowserRouter>
			<Nav />
			<h1>Unsere Webseite</h1>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about/:id" element={<AboutArticle />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
