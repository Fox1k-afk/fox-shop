import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import About from './pages/About';
import Parnyam from './pages/Parnyam';
import Profile from './pages/Profile';
import Search from './pages/Search';

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/parnyam' element={<Parnyam />} />
				<Route path='/about' element={<About />} />
				<Route path='/search' element={<Search />} />
				<Route path='/profile' element={<Profile />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
