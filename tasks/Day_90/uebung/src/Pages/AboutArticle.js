import aboutData from '../Components/AboutData';
import { useParams } from 'react-router-dom';

const AboutData = () => {
	let params = useParams();
	console.log(params);

	return (
		<section>
			<h2>{aboutData[params.id].title}</h2>
			<article>
				<p>{aboutData[params.id].text}</p>
			</article>
		</section>
	);
};

export default AboutData;
