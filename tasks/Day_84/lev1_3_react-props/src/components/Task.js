const task = (props) => {
	return (
		<li>
			<img src={props.task.iconLeft} alt="" />
			<p> {props.task.name} </p>
			<img src={props.task.iconRight} alt="" />
		</li>
	);
};

export default task;
