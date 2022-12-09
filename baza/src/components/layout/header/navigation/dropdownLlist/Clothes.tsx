import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../Header.module.css';

const Clothes = () => {
	return (
		<div className={styles.drop_wrapper}>
			<div className={`${styles.drop_container} ${'hidden'}`}>
				<div className={styles.drop_categories}>
					<div className={`${styles.drop_category} ${'mb-[5px]'}`}>
						<Link to={'/'}>
							<span className={styles.drop_title}>blank</span>
						</Link>

						<div className={styles.drop_subCategorys}>
							<div className={styles.drop_subtitles_container}>
								<Link to={'/'}>
									<span className={styles.drop_link_subtitle}>blank</span>
								</Link>
							</div>

							<div className={styles.drop_subtitles_container}>
								<Link to={'/'}>
									<span className={styles.drop_link_subtitle}>blank</span>
								</Link>
							</div>

							<div className={styles.drop_subtitles_container}>
								<Link to={'/'}>
									<span className={styles.drop_link_subtitle}>blank</span>
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/'}>
							<span className={styles.drop_title}>blank</span>
						</Link>
					</div>

					<div className={`${styles.drop_category} ${'mb-[5px]'}`}>
						<Link to={'/'}>
							<span className={styles.drop_title}>blank</span>
						</Link>

						<div className={styles.drop_subCategorys}>
							<div className={styles.drop_subtitles_container}>
								<Link to={'/'}>
									<span className={styles.drop_link_subtitle}>blank</span>
								</Link>
							</div>

							<div className={styles.drop_subtitles_container}>
								<Link to={'/'}>
									<span className={styles.drop_link_subtitle}>blank</span>
								</Link>
							</div>

							<div className={styles.drop_subtitles_container}>
								<Link to={'/'}>
									<span className={styles.drop_link_subtitle}>blank</span>
								</Link>
							</div>
						</div>
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

export default Clothes;
