import React, { useContext } from 'react';
import s from './Parnyam.module.css';

// import CreateProduct from '../components/CreateProduct';
// import ErrorMessage from '../components/ErrorMessage';
// import Loader from '../components/Loader';
// import Modal from '../components/Modal';
// import Product from '../components/Product';
// import { ModalContext } from '../context/ModalContext';
// import { shopAPI } from '../services/ShopService';
import ParnyamSlider from '../components/slider/boysSlider/ParnyamSlider';
import SmallBanners from '../components/main/SmallBanners';
import Lookoftheday from '../components/slider/boysSlider/Lookoftheday';

// const Parnyam = () => {
// 	const {
// 		data: products,
// 		error,
// 		isLoading: loading,
// 	} = shopAPI.useFetchAllProductsQuery(10);
// 	const { modal, open, close } = useContext(ModalContext);

// 	return (
// 		<div className='container mx-auto max-w-[1170px] pt-5'>
// 			{loading && <Loader />}
// 			{error && <ErrorMessage errMsg='Loading products error' />}
// 			{products?.map((product) => (
// 				<Product product={product} key={product.id} />
// 			))}

// 			{modal && (
// 				<Modal title='Create new product' onClose={close}>
// 					<CreateProduct />
// 				</Modal>
// 			)}
// 			<button
// 				className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl px-4 py-2'
// 				onClick={open}
// 			>
// 				ModalOpen
// 			</button>
// 		</div>
// 	);
// };

const Parnyam = () => {
	return (
		<div>
			<div className={s.main__wrapper}>
				<ParnyamSlider />

				<div className={s.main__content_container}>
					<SmallBanners />
					<div className={s.main__content_item}>
						<div className={s.main__title_container}>
							<div className={s.underlined_title__container}>
								<span>Pidbirka obraziv</span>
							</div>
						</div>
						<div className={s.main__products_container_fashion}>
							<div className={s.scrollable_products__container}>
								<Lookoftheday />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Parnyam;
