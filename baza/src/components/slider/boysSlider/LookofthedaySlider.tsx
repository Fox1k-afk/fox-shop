import React from 'react';
import Slider from 'react-slick';

import slide1 from '../../../assets/images/fashionSlider/slide1.jpeg';
import slide10 from '../../../assets/images/fashionSlider/slide10.jpeg';
import slide2 from '../../../assets/images/fashionSlider/slide2.jpeg';
import slide3 from '../../../assets/images/fashionSlider/slide3.jpeg';
import slide4 from '../../../assets/images/fashionSlider/slide4.jpeg';
import slide5 from '../../../assets/images/fashionSlider/slide5.jpeg';
import slide6 from '../../../assets/images/fashionSlider/slide6.jpeg';
import slide7 from '../../../assets/images/fashionSlider/slide7.jpeg';
import slide8 from '../../../assets/images/fashionSlider/slide8.jpeg';
import slide9 from '../../../assets/images/fashionSlider/slide9.jpeg';
import prev from '../../../assets/images/fashionSlider/prev.png';
import next from '../../../assets/images/fashionSlider/next.png';
import s from './Lookoftheday.module.css';

function SampleNextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<>
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

const LookofthedaySlider = () => {
	const settings = {
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 500,
		slidesPerRow: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		swipeToSlide: false,
		cssEase: 'linear',
	};
	return (
		<Slider {...settings}>
			<div className={s.fashion_card__container}>
				<div className={s.fashion_card__image_container}>
					<button className={s.fashion_card__main_image}>
						<img src={slide1} alt='carousel-slide1' />
						<div className={s.complete_look}>
							<p>Podivitisya obraz</p>
						</div>
					</button>
				</div>
			</div>
			<div className={s.fashion_card__container}>
				<div className={s.fashion_card__image_container}>
					<button className={s.fashion_card__main_image}>
						<img src={slide2} alt='carousel-slide2' />
						<div className={s.complete_look}>
							<p>Podivitisya obraz</p>
						</div>
					</button>
				</div>
			</div>
			<div className={s.fashion_card__container}>
				<div className={s.fashion_card__image_container}>
					<button className={s.fashion_card__main_image}>
						<img src={slide3} alt='carousel-slide3' />
						<div className={s.complete_look}>
							<p>Podivitisya obraz</p>
						</div>
					</button>
				</div>
			</div>
			<div className={s.fashion_card__container}>
				<div className={s.fashion_card__image_container}>
					<button className={s.fashion_card__main_image}>
						<img src={slide4} alt='carousel-slide4' />
						<div className={s.complete_look}>
							<p>Podivitisya obraz</p>
						</div>
					</button>
				</div>
			</div>
			<div className={s.fashion_card__container}>
				<div className={s.fashion_card__image_container}>
					<button className={s.fashion_card__main_image}>
						<img src={slide5} alt='carousel-slide5' />
						<div className={s.complete_look}>
							<p>Podivitisya obraz</p>
						</div>
					</button>
				</div>
			</div>
			<div className={s.fashion_card__container}>
				<div className={s.fashion_card__image_container}>
					<button className={s.fashion_card__main_image}>
						<img src={slide6} alt='carousel-slide6' />
						<div className={s.complete_look}>
							<p>Podivitisya obraz</p>
						</div>
					</button>
				</div>
			</div>
			<div className={s.fashion_card__container}>
				<div className={s.fashion_card__image_container}>
					<button className={s.fashion_card__main_image}>
						<img src={slide7} alt='carousel-slide7' />
						<div className={s.complete_look}>
							<p>Podivitisya obraz</p>
						</div>
					</button>
				</div>
			</div>
			<div className={s.fashion_card__container}>
				<div className={s.fashion_card__image_container}>
					<button className={s.fashion_card__main_image}>
						<img src={slide8} alt='carousel-slide8' />
						<div className={s.complete_look}>
							<p>Podivitisya obraz</p>
						</div>
					</button>
				</div>
			</div>
			<div className={s.fashion_card__container}>
				<div className={s.fashion_card__image_container}>
					<button className={s.fashion_card__main_image}>
						<img src={slide9} alt='carousel-slide9' />
						<div className={s.complete_look}>
							<p>Podivitisya obraz</p>
						</div>
					</button>
				</div>
			</div>

			<div className={s.fashion_card__container}>
				<div className={s.fashion_card__image_container}>
					<button className={s.fashion_card__main_image}>
						<img src={slide10} alt='carousel-slide10' />
						<div className={s.complete_look}>
							<p>Podivitisya obraz</p>
						</div>
					</button>
				</div>
			</div>
		</Slider>
	);
};

export default LookofthedaySlider;
