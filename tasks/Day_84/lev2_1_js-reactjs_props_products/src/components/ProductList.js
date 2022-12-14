import Product from './Product';

const products = [
	{
		name: 'cocooil',
		price: 30,
		image: 'https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg',
	},
	{
		name: 'Polaroid',
		price: 60,
		image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80 ',
	},
	{
		name: 'Maui Moisture',
		price: 20,
		image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
	},
];

const ProductsList = () => {
	return (
		<div className="flex justify-around pt-4">
			{products.map((product) => {
				return <Product name={product.name} price={product.price} image={product.image} />;
			})}
		</div>
	);
};

export default ProductsList;
