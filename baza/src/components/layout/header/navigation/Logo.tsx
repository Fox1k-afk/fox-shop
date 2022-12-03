import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../../assets/svg/fox.svg';
import styles from '../Header.module.css';

const Logo = () => {
	const [active, setActive] = useState(false);

	return (
		<>
			<div className={styles.logo_container}>
				<button
					className={`${styles.hamburger_slider} ${styles.hamburger}`}
					onClick={() => setActive(!active)}
				>
					<div className={styles.hamburger_box}>
						<div className={styles.hamburger_inner}></div>
					</div>
				</button>

				<div className={styles.logo_wrapp}>
					<div>
						<Link to={'/main'}>
							<div>
								<img src={logo} alt='logo' className={styles.logo_img} />
							</div>
						</Link>
					</div>
				</div>
			</div>

			<div className={active ? styles.side_bar__active : styles.side_bar}>
				<div className={styles.side_bar__container}>
					<div className={styles.side_bar__links}>
						<div className='text-white'>links</div>
						<div className='text-white'>links</div>
						<div className='text-white'>links</div>
						<div className='text-white'>links</div>
						<div className='text-white'>links</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Logo;
