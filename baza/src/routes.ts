import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import Main from './pages/Main';
import Profile from './pages/Profile/Profile';
import Search from './pages/Search/Search';
import SoloProduct from './pages/SoloProduct/SoloProduct';

export const authRoutes = [{ path: '/profile', Component: Profile }];

export const publicRoutes = [
	{ path: '/main', Component: Main },
	{ path: '/search', Component: Search },
	{ path: '/cart', Component: Cart },
	{ path: '/product/:id', Component: SoloProduct },
	{ path: '/favorites', Component: Favorites },
];
