import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Blog from './Pages/Blog';
import DetailPage from './Pages/DetailPage';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:detail" element={<DetailPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
