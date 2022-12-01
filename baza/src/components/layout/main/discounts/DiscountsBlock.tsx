import React from 'react';
import DiscountsSlider from '../../../slider/DiscountsSlider';
import s from '../../main/Main.module.css';

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
