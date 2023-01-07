import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<section className="navBar">
			<article>
				<h1>My Life</h1>
			</article>
			<article>
				<Link to="/">HOME</Link>
				<Link to="/blog">BLOG</Link>
			</article>
		</section>
	);
};

export default Navbar;
