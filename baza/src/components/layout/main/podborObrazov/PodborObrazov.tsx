import React from 'react';
import Lookoftheday from '../../../slider/lookOfTheDay/LookofthedaySlider';
import s from '../../main/Main.module.css';

const PodborObrazov = () => {
	return (
		<div className={s.main__content_item}>
			<div className={s.main__title_container}>
				<div className={s.underlined_title__container}>
					<span>Look of the day</span>
				</div>
			</div>

			<div className={s.main__products_container_fashion}>
				<div className={s.scrollable_products__container}>
					<Lookoftheday />
				</div>
			</div>
		</div>
	);
};

export default PodborObrazov;
