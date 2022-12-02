import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../Header.module.css';

const Bags = () => {
	return (
		<div className={styles.drop_wrapper}>
			<div className={styles.drop_container}>
				<div className={styles.drop_categories}>
					<div className={styles.drop_category}>
						<Link to={'/'}>
							<span className={styles.drop_title}>blank</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/'}>
							<span className={styles.drop_title}>blank</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/'}>
							<span className={styles.drop_title}>blank</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bags;
