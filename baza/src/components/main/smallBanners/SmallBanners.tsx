import React from 'react';
import { Link } from 'react-router-dom';

import banner1 from '../../../assets/images/main_1.jpeg';
import banner2 from '../../../assets/images/main_2.jpeg';
import banner3 from '../../../assets/images/main_3.jpeg';
import banner4 from '../../../assets/images/main_4.jpeg';
import s from '../Parnyam.module.css';

const SmallBanners = () => {
	return (
		<div className={s.main__small_banners_container}>
			<div className={s.main__banner_img}>
				<div className='relative'>
					<div>
						<Link to='/m/zimnie-kurtki'>
							<img src={banner1} alt='banner' />
						</Link>
					</div>

					<div className={s.main__btn}>
						<button className={s.main_buttonS}>forward</button>
					</div>
				</div>
			</div>

			<div className={s.main__banner_img}>
				<div className='relative'>
					<div>
						<Link to='/m/svitshoty-tolstovki'>
							<img src={banner2} alt='banner' />
						</Link>
					</div>

					<div className={s.main__btn}>
						<button className={s.main_buttonS}>forward</button>
					</div>
				</div>
			</div>

			<div className={s.main__banner_img}>
				<div className='relative'>
					<div>
						<Link to='/m/zimnyaya-obuv'>
							<img src={banner3} alt='banner' />
						</Link>
					</div>

					<div className={s.main__btn}>
						<button className={s.main_buttonS}>forward</button>
					</div>
				</div>
			</div>

			<div className={s.main__banner_img}>
				<div className='relative'>
					<div>
						<Link to='/m/zimnie-shapki'>
							<img src={banner4} alt='banner' />
						</Link>
					</div>

					<div className={s.main__btn}>
						<button className={s.main_buttonS}>forward</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SmallBanners;
