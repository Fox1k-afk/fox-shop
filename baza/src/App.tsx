import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from './pages/Products';
import About from './pages/About';
import Navigation from './components/Navigation';

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
