import './index.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { LogInState } from './context/ProfileContext';
import { SearchState } from './context/SearchContext';
import { store } from './store';
import { loadUser } from './store/slices/authSlice';
import { getTotals } from './store/slices/cartSlice';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

store.dispatch(loadUser(null));

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<SearchState>
				<LogInState>
					<App />
				</LogInState>
			</SearchState>
		</BrowserRouter>
	</Provider>
);
