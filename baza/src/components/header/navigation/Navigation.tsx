import React from 'react';

import logo from '../../../assets/svg/fox.svg';
import styles from '../Navigation.module.css';
import DropdownNav from './LowerNav';
import IconsNav from './UpperNav';

const Navigation = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.main_container}>
				<div className={styles.container}>
					<div className={styles.logo_container}>
						{/* <button className={styles.hamburger_slider}></button>    hamb for mobiles */}
						<div className={styles.logo_wrapp}>
							<div>
								<a href='/'>
									<div>
										<img src={logo} alt='logo' className={styles.logo_img} />
									</div>
								</a>
							</div>
						</div>
					</div>

					<div className={styles.menu_nav_container}>
						{/* <div className={styles.showOnMobile}></div> mobiles */}
						<IconsNav />
						<DropdownNav />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
