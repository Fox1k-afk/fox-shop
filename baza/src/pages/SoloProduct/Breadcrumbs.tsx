import React from 'react';
import { Link } from 'react-router-dom';

import s from './SoloProduct.module.css';

const Breadcrumbs = () => {
	return (
		<div className={s.breadcrumbs}>
			<div className={`${s.breadcrumbs__link} ${s.breadcrumbs__link_after}`}>
				<Link to={'/main'}>Store</Link>
			</div>

			<div className={`${s.breadcrumbs__link} ${s.breadcrumbs__link_after}`}>
				<Link to={'/main'}>blank</Link>
			</div>

			<div className={`${s.breadcrumbs__link} ${s.breadcrumbs__link_after}`}>
				<Link to={'/main'}>blank</Link>
			</div>

			<div className={`${s.breadcrumbs__link} ${s.breadcrumbs__link_after}`}>
				<Link to={'/main'}>blank</Link>
			</div>

			<div className={s.breadcrumbs__link}>
				<Link to={'/main'}>current</Link>
			</div>
		</div>
	);
};

export default Breadcrumbs;
