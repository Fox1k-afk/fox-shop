import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../hooks/redux';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
	const auth = useAppSelector((state) => state.auth);

	return (
		<Routes>
			{auth.loggined &&
				authRoutes.map(({ path, Component }) => (
					<Route key={path} path={path} element={<Component />} />
				))}

			{publicRoutes.map(({ path, Component }) => (
				<Route key={path} path={path} element={<Component />} />
			))}

			<Route path='*' element={<Navigate to={'/main'} />} />
		</Routes>
	);
};

export default AppRouter;
