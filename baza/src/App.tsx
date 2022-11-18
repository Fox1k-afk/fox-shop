import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/header/navigation/Navigation';
import About from './pages/About';
import Products from './pages/Products';
import Footer from './components/Footer';
import Header from './components/header/Header';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Products />} />
				<Route path='/about' element={<About />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
