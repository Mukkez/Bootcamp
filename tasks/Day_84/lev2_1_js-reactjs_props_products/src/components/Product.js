const Product = (props) => {
	return (
		<div className="text-center">
			<img className="object-cover w-96" src={props.image} alt="product" />
			<div className="p-4 text-xl font-bold">
				<p className="p-4">{props.name}</p>
				<p className="p-4">{props.price}$</p>
				<button className="bg-rose-400 hover:bg-rose-700 text-white font-bold py-3 px-14 rounded-full text-sm">Buy Now</button>
			</div>
		</div>
	);
};

export default Product;
