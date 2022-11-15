import React, { useContext } from 'react';

import CreateProduct from '../components/CreateProduct';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import Modal from '../components/Modal';
import Product from '../components/Product';
import { ModalContext } from '../context/ModalContext';
import { useProducts } from '../hooks/product';

const Products = () => {
	const { loading, error, products } = useProducts();
	const { modal, open, close } = useContext(ModalContext);

	return (
		<div className='container mx-auto max-w-2xl pt-5'>
			{loading && <Loader />}
			{error && <ErrorMessage error={error} />}
			{products.map((product) => (
				<Product product={product} key={product.id} />
			))}

			{modal && (
				<Modal title='Create new product' onClose={close}>
					<CreateProduct />
				</Modal>
			)}
			<button
				className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
				onClick={open}
			>
				ModalOpen
			</button>
		</div>
	);
};

export default Products;
