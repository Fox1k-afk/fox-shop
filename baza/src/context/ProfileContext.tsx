import { createContext, useState } from 'react';

interface ILogInContext {
	modal: boolean;
	open: () => void;
	close: () => void;
}

export const LoginContext = createContext<ILogInContext>({
	modal: false,
	open: () => {},
	close: () => {},
});

export const LogInState = ({ children }: { children: React.ReactNode }) => {
	const [modal, setModal] = useState(false);

	const open = () => setModal(true);
	const close = () => setModal(false);

	return (
		<LoginContext.Provider value={{ modal, open, close }}>
			{children}
		</LoginContext.Provider>
	);
};
