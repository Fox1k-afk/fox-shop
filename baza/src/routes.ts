import Parnyam from './pages/Parnyam';
import About from './pages/About';
import Search from './pages/Search';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import SoloProduct from './pages/SoloProduct';

export const authRoutes = [{ path: '/profile', Component: Profile }];

export const publicRoutes = [
	{ path: '/parnyam', Component: Parnyam },
	{ path: '/about', Component: About },
	{ path: '/search', Component: Search },
	{ path: '/cart', Component: Cart },
	{ path: '/product/:id', Component: SoloProduct },
];
