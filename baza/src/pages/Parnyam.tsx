import React from 'react';

import DiscountsBlock from '../components/main/discounts/DiscountsBlock';
import NewClothesBlock from '../components/main/newClothes/NewClothesBlock';
import s from '../components/main/Parnyam.module.css';
import PodborObrazov from '../components/main/podborObrazov/PodborObrazov';
import ScrollButton from '../components/ScrollButton';
import SmallBanners from '../components/main/smallBanners/SmallBanners';
import ParnyamSlider from '../components/slider/boysSlider/ParnyamSlider';
import { ToastContainer } from 'react-toastify';

// import Loader from '../components/Loader';
// import upArrow from '../assets/svg/up-arrow.svg';

const Parnyam = () => {
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
