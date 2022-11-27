import React from 'react';
import Slider from 'react-slick';

import { shopAPI } from '../../../store/services/ShopService';
import Loader from '../../Loader';
import DiscountProduct from '../../main/DiscountProduct';

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
	const { data: products, isLoading } = shopAPI.useFetchAllProductsQuery(30);

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
			{isLoading && <Loader />}
			{products?.map((product) => (
				<DiscountProduct product={product} key={product.id} />
			))}
		</Slider>
	);
};

export default DiscountsSlider;
