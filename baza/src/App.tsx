import React from 'react';

import AppRouter from './components/AppRouter';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';

const App = () => {
	return (
		<>
			<Header />
			<AppRouter />
			<Footer />
		</>
	);
};

export default App;
