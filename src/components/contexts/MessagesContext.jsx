import { createContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, INBOX_PATH } from '../../constants/api';
const MessagesContext = createContext();

export const STORE_MESSAGES = 'STORE_MESSAGES';
export const REMOVE_MESSAGES = 'REMOVE_MESSAGES';

const initialState = {
	messages: [],
	
};

function reducer(state, action) {
	switch (action.type) {
		case STORE_MESSAGES:
			return { ...state, messages: action.payload };
		case REMOVE_MESSAGES:
			return {
				...state,
				messages: state.messages.filter(u => u.id !== action.payload),
			};

		default:
			throw new Error();
	}
}

export const MessagesProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [error, setError] = useState(null);
	const url = BASE_URL + INBOX_PATH;

	async function getUsers() {
		try {
			const response = await axios.get(url);
			dispatch({ type: STORE_MESSAGES, payload: response.data });
			console.log(response.data);
		} catch (error) {
			console.log(error);
			setError(error.toString());
		}
	}

	useEffect(() => {
		getUsers();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function deleteMessages(id) {
		let res = await axios.delete(url + id);
		const { status } = res;

		if (status === 200) {
			dispatch({ type: REMOVE_MESSAGES, payload: id });
		}
	}

	return (
		<MessagesContext.Provider value={[state, dispatch, deleteMessages, error]}>
			{props.children}
		</MessagesContext.Provider>
	);
};

export default MessagesContext;
