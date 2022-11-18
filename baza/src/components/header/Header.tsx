import React from 'react';
import Navigation from './navigation/Navigation';
import ShopInfo from './shopInfo/ShopInfo';

const Header = () => {
	return (
		<header>
			<ShopInfo />
			<Navigation />
		</header>
	);
};

export default Header;
