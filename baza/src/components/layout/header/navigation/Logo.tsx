import React from 'react';

import logo from '../../../../assets/svg/fox.svg';
import styles from '../Navigation.module.css';

const Logo = () => {
	return (
		<div className={styles.logo_container}>
			{/* <button className={styles.hamburger_slider}></button>    hamb for mobiles */}
			<div className={styles.logo_wrapp}>
				<div>
					<a href='/main'>
						<div>
							<img src={logo} alt='logo' className={styles.logo_img} />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Logo;
