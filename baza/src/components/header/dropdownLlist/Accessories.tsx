import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../Navigation.module.css';

const Accessories = () => {
	return (
		<div className={styles.drop_wrapper}>
			<div className={styles.drop_container}>
				<div className={styles.drop_categories}>
					<div className={styles.drop_category}>
						<Link to={'/kepki-panamy'}>
							<span className={styles.drop_title}>kepkipanamy</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/zimnie-shapki'}>
							<span className={styles.drop_title}>zimnie shapki</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/sharfi-perchatki'}>
							<span className={styles.drop_title}>sharfi,perchatki</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/noski'}>
							<span className={styles.drop_title}>noski</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/remni-ochki-trusy-stikera-koshelki'}>
							<span className={styles.drop_title}>
								remni, ochki, trusy, stikera, koshelki
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accessories;
