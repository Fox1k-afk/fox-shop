import React from 'react';

import AppRouter from './components/AppRouter';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

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
