import React, { FC, useState } from 'react';

import { IProduct } from '../models/IProduct';

interface ProductProps {
	product: IProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
	const [details, setDatails] = useState(false);

	const btnBgClassName = details ? 'bg-blue-400' : 'bg-yellow-400';
	const btnClasses = ['py-2 px-4 border', btnBgClassName];

	return (
		<div className=' border py-2 px-4 rounded flex flex-col items-center mb-2'>
			<img src={product.image} alt={product.title} className='w-1/6' />
			<p>{product.title}</p>
			<p className=' font-bold'>{product.price}</p>
			<button
				onClick={() => setDatails((prev) => !prev)}
				className={btnClasses.join(' ')}
			>
				{details ? 'Hide Details' : 'Show Deatails'}
			</button>

			{details && (
				<div>
					<p>{product.description}</p>
					<p>
						Rate: <span style={{ fontWeight: 'bold' }}>{product.rating.rate}</span>
					</p>
				</div>
			)}
		</div>
	);
};

export default Product;
