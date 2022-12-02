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
							<span className={styles.drop_title}>Verhnij odayg</span>
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
							<span className={styles.drop_title}>Svitshoty, tolstovky</span>
						</Link>
					</div>

					<div className={`${styles.drop_category} ${'mb-[5px]'}`}>
						<Link to={'/'}>
							<span className={styles.drop_title}>Shtany</span>
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
							<span className={styles.drop_title}>Sportivny kostumes</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/'}>
							<span className={styles.drop_title}>Polo i futbolki</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/'}>
							<span className={styles.drop_title}>Shorty</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/'}>
							<span className={styles.drop_title}>Letnie komplekty</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clothes;
