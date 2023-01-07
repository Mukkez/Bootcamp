import aboutData from '../Components/AboutData';
import { Link } from 'react-router-dom';

const About = () => {
	return (
		<section>
			<h2>About Page</h2>

			{aboutData.map((article) => (
				<article>
					<h3>{article.title}</h3>
					<Link to={`/about/${article.id}`}>Read more</Link>
				</article>
			))}
		</section>
	);
};

export default About;
