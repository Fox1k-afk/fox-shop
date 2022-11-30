import Parnyam from './pages/Parnyam';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import SoloProduct from './pages/SoloProduct';
import Favorites from './pages/Favorites';

export const authRoutes = [{ path: '/profile', Component: Profile }];

export const publicRoutes = [
	{ path: '/parnyam', Component: Parnyam },
	{ path: '/search', Component: Search },
	{ path: '/cart', Component: Cart },
	{ path: '/product/:id', Component: SoloProduct },
	{ path: '/favorites', Component: Favorites },
];
