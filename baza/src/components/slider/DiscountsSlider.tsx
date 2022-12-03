import React from 'react';
import Slider from 'react-slick';

import { shopAPI } from '../../store/services/ShopService';
import DiscountProduct from '../layout/main/discounts/DiscountProduct';
import Loader from '../universal/Loader';

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
					padding: '15px',
					height: '20px',
					width: '20px',
					cursor: 'pointer',

					background: 'black',
					borderRadius: '50%',
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
				padding: '15px',
				height: '20px',
				width: '20px',
				cursor: 'pointer',

				background: 'black',
				borderRadius: '50%',
			}}
			onClick={onClick}
		></button>
	);
}

const DiscountsSlider = () => {
	const { data: products, isLoading } = shopAPI.useFetchAllProductsQuery(10);

	const settings = {
		infinite: false,
		mobileFirst: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 1440,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	};

	return (
		<Slider {...settings}>
			{isLoading && <Loader />}
			{products?.map((product) => (
				<DiscountProduct product={product} key={product.id} />
			))}
		</Slider>
	);
};

export default DiscountsSlider;
