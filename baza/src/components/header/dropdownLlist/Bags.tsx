import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Navigation.module.css';

const Bags = () => {
	return (
		<div className={styles.drop_wrapper}>
			<div className={styles.drop_container}>
				<div className={styles.drop_categories}>
					<div className={styles.drop_category}>
						<Link to={'/backpacks'}>
							<span className={styles.drop_title}>backpacks</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/bananka'}>
							<span className={styles.drop_title}>Bananki</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/sumki-cherez-plecho'}>
							<span className={styles.drop_title}>Cherez plecho</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bags;
