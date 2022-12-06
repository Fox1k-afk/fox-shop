import './index.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { store } from './store';
import { LogInState } from './context/ProfileContext';
import { loadUser } from './store/slices/authSlice';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

store.dispatch(loadUser());

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<LogInState>
				<App />
			</LogInState>
		</BrowserRouter>
	</Provider>
);
