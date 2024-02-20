import { createContext, useReducer } from 'react';
import reducer from '../reducers/sidebarReducer';
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../actions/actions';

const InitialState = {
	isSidebarOpen: false,
};

export const SidebarProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, InitialState);

	const openSidebar = () => {
		dispatch({ type: OPEN_SIDEBAR });
	};

	const closeSidebar = () => {
		dispatch({ type: CLOSE_SIDEBAR });
	};

	return (
		<SidebarContext.Provider
			value={{
				...state,
				openSidebar,
				closeSidebar,
			}}>
			{children}
		</SidebarContext.Provider>
	);
};

export const SidebarContext = createContext({});
