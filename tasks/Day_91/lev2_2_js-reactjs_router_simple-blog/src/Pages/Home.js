import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="home">
			<article></article>
			<article>
				<h1>Welcome to my simple Blog</h1>
				<Link to="/blog">
					<button className="btn" type="button">
						Go to articles
					</button>
				</Link>
			</article>
		</div>
	);
};

export default Home;
