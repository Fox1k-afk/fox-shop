import React from 'react';
import { ToastContainer } from 'react-toastify';

import DiscountsBlock from '../components/layout/main/discounts/DiscountsBlock';
import NewClothesBlock from '../components/layout/main/newClothes/NewClothesBlock';
import PodborObrazov from '../components/layout/main/podborObrazov/PodborObrazov';
import SmallBanners from '../components/layout/main/smallBanners/SmallBanners';
import s from '../components/layout/main/Main.module.css';
import PanoramSlider from '../components/slider/PanoramSlider';
import ScrollButton from '../components/universal/ScrollButton';

// import Loader from '../components/Loader';
// import upArrow from '../assets/svg/up-arrow.svg';
const Main = () => {
	return (
		<div>
			<div className={s.main__wrapper}>
				<PanoramSlider />

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

export default Main;
