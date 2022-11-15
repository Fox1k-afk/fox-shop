import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import About from './pages/About';
import Products from './pages/Products';

const App = () => {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path='/' element={<Products />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</>
	);
};

export default App;
