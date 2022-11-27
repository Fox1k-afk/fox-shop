import React from 'react';
import s from '../Parnyam.module.css';
import DiscountsSlider from '../../slider/boysSlider/DiscountsSlider';

const DiscountsBlock = () => {
	return (
		<div className={s.main__content_item}>
			<div className={s.main__title_container}>
				<div className={s.underlined_title__container}>
					<span>Discounts</span>
				</div>
			</div>
			<div className={s.main__products_container}>
				<div className={s.scrollable_products__container}>
					<DiscountsSlider />
				</div>
			</div>
		</div>
	);
};

export default DiscountsBlock;
