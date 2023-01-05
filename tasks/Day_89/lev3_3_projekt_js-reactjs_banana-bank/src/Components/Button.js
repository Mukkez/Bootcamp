const Button = (props) => {
	return (
		<button onClick={() => props.func()} className="btn">
			{props.btnName}
		</button>
	);
};
export default Button;
