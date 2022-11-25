import { createContext, useState } from 'react';

interface ISearchContext {
	modal: boolean;
	open: () => void;
	close: () => void;
}

export const SearchContext = createContext<ISearchContext>({
	modal: false,
	open: () => {},
	close: () => {},
});

export const SearchState = ({ children }: { children: React.ReactNode }) => {
	const [modal, setModal] = useState(false);

	const open = () => setModal(true);
	const close = () => setModal(false);

	return (
		<SearchContext.Provider value={{ modal, open, close }}>
			{children}
		</SearchContext.Provider>
	);
};
