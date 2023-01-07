import Button from './Button';
const Container = (props) => {
	return (
		<article className="blogArticle">
			<div>
				<img src={props.image} alt="" />
			</div>

			<p>{props.title}</p>
			<Button id={props.id} />
		</article>
	);
};
export default Container;
