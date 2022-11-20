import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import slide from '../../../assets/images/parnyamMain/42d486c092fb4fa9aaa1b6697c8b172a.jpeg';
import slide2 from '../../../assets/images/parnyamMain/61c8caa3d6044fb2b1ebac8e0d95333a.jpeg';
import nextArrow from '../../../assets/images/nextArrow.png';
import prevArrow from '../../../assets/images/prevArrow.png';
import s from '../../../pages/Parnyam.module.css';

function SampleNextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<>
			<button
				className={className}
				style={{
					...style,
					display: 'block',
					right: '30px',
					color: 'transparent',
					background: 'transparent',
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
				display: 'block',
				color: 'transparent',
				background: 'transparent',
				left: '30px',
				zIndex: '5',
			}}
			onClick={onClick}
		></button>
	);
}

const ParnyamSlider = () => {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		speed: 1000,
		slidesPerRow: 1,
		dots: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		swipeToSlide: false,
		draggable: false,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: 'linear',
		appendDots: (dots: any) => (
			<div
				style={{
					backgroundColor: 'transparent',
				}}
			>
				<ul style={{ position: 'absolute', bottom: '60px', left: '115px' }}>
					{dots}
				</ul>
			</div>
		),
	};
	return (
		<div className={s.main__banner_container}>
			<div className={s.banner_carousel__wrapper}>
				<div className={s.banner_carousel__container}>
					<Slider {...settings}>
						<Link to={'/m/fox-basic'}>
							<img src={slide} alt='carousel-slide1' />
						</Link>
						<Link to={'/m/verknyaya-odezhda'}>
							<img src={slide2} alt='carousel-slide2' />
						</Link>
					</Slider>
					<div className=' absolute bottom-[35px] left-[calc(50%-56px)] cursor-pointer w-[111px]'>
						<Link to={'/m/verknyaya-odezhda'}>
							<button className=' bg-black text-white p-[10px] font-medium uppercase tracking-[1.5px] w-full text-[12px] hover:opacity-80'>
								Forward
							</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ParnyamSlider;
