import React from 'react';

import styles from '../Header.module.css';
import Logo from './Logo';
import LowerNav from './LowerNav';
import ShowOnMobile from './ShowOnMobile';
import UpperNav from './UpperNav';

const Navigation = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.main_container}>
				<div className={styles.container}>
					<Logo />

					<div className={styles.menu_nav_container}>
						<UpperNav />
						<ShowOnMobile />
						<LowerNav />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
