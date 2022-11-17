import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import phoneSvg from '../../svg/phone-call-svgrepo-com.svg';
import styles from './ShopInfo.module.css';

const ShopInfo = () => {
	const [showMessage, setShowMessage] = useState(false);

	return (
		<div className={styles.main_container_top}>
			<div className={styles.nav_container_top}>
				<div className={styles.nav_up_link}>
					<Link to={'/about'}>
						<span className={styles.nav_span}>News & feedback</span>
					</Link>
				</div>

				<div className={styles.nav_up_link}>
					<Link to={'/'}>
						<span className={styles.nav_span}>Store</span>
					</Link>
				</div>

				<div className={styles.nav_up_link}>
					<Link to={'/'}>
						<span className={styles.nav_span}>About us</span>
					</Link>
				</div>

				<div className={styles.nav_up_link}>
					<Link to={'/'}>
						<span className={styles.nav_span}>delivery, payment, return</span>
					</Link>
				</div>

				<div>
					<Link to={'/'}>
						<span className={styles.nav_span}>Work in a company</span>
					</Link>
				</div>
			</div>

			<div
				className={styles.icon_buttons}
				onMouseEnter={() => setShowMessage(true)}
				onMouseLeave={() => setShowMessage(false)}
			>
				<div className={styles.phones_container}>
					<div>
						<img src={phoneSvg} alt='svg' className='w-[20px]' />
					</div>
					<div className={styles.working_hours_container}>
						<div className={styles.phones}>
							<a href='tel:+380636336363' className={styles.phone_link}>
								063 633-63-63
							</a>
							<a href='tel:+380636336363' className={styles.phone_link}>
								063 633-63-63
							</a>
							{showMessage && (
								<div className={styles.working_hours}>
									<div className={styles.workking_hours_label}>working mode</div>
									<div className={styles.working_hours_hours}>
										10
										<span>00</span>- 19
										<span>00</span>
									</div>
									<div className={styles.working_sunday}>Sun: 11:00 - 18:00</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopInfo;
