import React from 'react';
import Navigation from './Navigation';
import ShopInfo from './ShopInfo';

const Header = () => {
	return (
		<header>
			<ShopInfo />
			<Navigation />
		</header>
	);
};

export default Header;
