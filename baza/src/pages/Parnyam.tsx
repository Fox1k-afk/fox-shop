import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import DiscountsBlock from '../components/main/discounts/DiscountsBlock';
import NewClothesBlock from '../components/main/newClothes/NewClothesBlock';
import s from '../components/main/Parnyam.module.css';
import PodborObrazov from '../components/main/podborObrazov/PodborObrazov';
import SmallBanners from '../components/main/smallBanners/SmallBanners';
import ScrollButton from '../components/ScrollButton';
import ParnyamSlider from '../components/slider/boysSlider/ParnyamSlider';

// import Loader from '../components/Loader';
// import upArrow from '../assets/svg/up-arrow.svg';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { getTotals } from '../store/slices/cartSlice';
const Parnyam = () => {
	const dispatch = useAppDispatch();
	const cart = useAppSelector((state) => state.cart);

	useEffect(() => {
		dispatch(getTotals());
	}, [dispatch, cart]);

	return (
		<div>
			<div className={s.main__wrapper}>
				<ParnyamSlider />

				<div className={s.main__content_container}>
					<SmallBanners />
					<div>
						<PodborObrazov />
						<DiscountsBlock />
						<NewClothesBlock />
					</div>
					<ToastContainer />
				</div>
				<div>
					<ScrollButton />
				</div>
			</div>
		</div>
	);
};

export default Parnyam;
