import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import s from '../../main/Parnyam.module.css';
import emptyhHeart from '../../../assets/svg/emptyheart.svg';
import fulHeart from '../../../assets/svg/fullheart.svg';

import { shopAPI } from '../../../services/ShopService';

function SampleNextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<>
			<button> </button>
			<button
				className={className}
				style={{
					...style,
					position: 'absolute',
					top: '-75px',
					right: '0px',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					verticalAlign: 'middle',
					padding: '15px 16px 24px 15px',
					height: '20px',
					width: '20px',
					cursor: 'pointer',
					zIndex: '20',
					background: 'black',
				}}
				onClick={onClick}
			></button>
		</>
	);
}

function SamplePrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<button
			className={className}
			style={{
				...style,
				position: 'absolute',
				top: '-75px',
				right: '63px',
				left: 'unset',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				verticalAlign: 'middle',
				padding: '15px 16px 24px 15px',
				height: '20px',
				width: '20px',
				cursor: 'pointer',
				zIndex: '20',
				background: 'black',
			}}
			onClick={onClick}
		></button>
	);
}

const DiscountsSlider = () => {
	const { data: products } = shopAPI.useFetchAllProductsQuery(30);
	const [like, setLike] = useState(false);

	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	return (
		<Slider {...settings}>
			{products?.map((product) => (
				<div className={s.main__product_card} key={product.id}>
					<div className={s.product_card__container}>
						<div className={s.product_card__image_container}>
							<div className={s.product_card__main_image}>
								<img src={product.image} alt={product.title} />
							</div>

							<button
								onClick={() => setLike((prev) => !prev)}
								className={s.product_card__like}
							>
								{like ? (
									<img src={fulHeart} alt='liked' className=' h-[15px]' />
								) : (
									<img src={emptyhHeart} alt='not liked' className=' h-[15px]' />
								)}
							</button>
						</div>

						<div className={s.product_card__discount}>
							-{Math.floor(Math.random() * 20) + 10}%
						</div>

						<div className={s.product_card__info}>
							<span className={s.product_card__info_title}>{product.title}</span>
							<span className={s.product_card__info_rating}>
								rate: {product.rating.rate}
							</span>

							<div>
								<span className={s.product_card__info_price}>{product.price} $.</span>
								<span className={s.product_card__info_oldprice}>
									{Math.floor(product.price * 80) / 100} $.
								</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</Slider>
	);
};

export default DiscountsSlider;
