import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Navigation.module.css';

const Clothes = () => {
	return (
		<div className={styles.drop_wrapper}>
			<div className={styles.drop_container}>
				<div className={styles.drop_categories}>
					<div className={`${styles.drop_category} ${'mb-[5px]'}`}>
						<Link to={'/verkhnyaya-odezhda'}>
							<span className={styles.drop_title}>Verhnij odayd</span>
						</Link>

						<div className={styles.drop_subCategorys}>
							<div className={styles.drop_subtitles_container}>
								<Link to={'/kurtki'}>
									<span className={styles.drop_link_subtitle}>Kurtki</span>
								</Link>
							</div>

							<div className={styles.drop_subtitles_container}>
								<Link to={'/kurtki'}>
									<span className={styles.drop_link_subtitle}>Kurtki</span>
								</Link>
							</div>

							<div className={styles.drop_subtitles_container}>
								<Link to={'/kurtki'}>
									<span className={styles.drop_link_subtitle}>Kurtki</span>
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/svitshoty-tolstovki'}>
							<span className={styles.drop_title}>Svitshoty, tolstovky</span>
						</Link>
					</div>

					<div className={`${styles.drop_category} ${'mb-[5px]'}`}>
						<Link to={'/shtany'}>
							<span className={styles.drop_title}>Shtany</span>
						</Link>

						<div className={styles.drop_subCategorys}>
							<div className={styles.drop_subtitles_container}>
								<Link to={'/dzhinsy'}>
									<span className={styles.drop_link_subtitle}>Dzinsy</span>
								</Link>
							</div>

							<div className={styles.drop_subtitles_container}>
								<Link to={'/sportivnye-shtany'}>
									<span className={styles.drop_link_subtitle}>Sportivnye shtany</span>
								</Link>
							</div>

							<div className={styles.drop_subtitles_container}>
								<Link to={'/kargo-dzhoggery-chinosy'}>
									<span className={styles.drop_link_subtitle}>
										Kargo, dzhogery, chinosy
									</span>
								</Link>
							</div>
						</div>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/sportivnye-kostyumy'}>
							<span className={styles.drop_title}>Sportivny kostumes</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/polo-i-futbolki'}>
							<span className={styles.drop_title}>Polo i futbolki</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/shorty'}>
							<span className={styles.drop_title}>Shorty</span>
						</Link>
					</div>

					<div className={styles.drop_category}>
						<Link to={'/letnie-komplekty'}>
							<span className={styles.drop_title}>Letnie komplekty</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Clothes;
