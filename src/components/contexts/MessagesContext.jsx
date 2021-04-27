import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, INBOX_PATH } from '../../constants/api';

const MessagesContext = createContext();

export const STORE_MESSAGES = 'STORE_MESSAGES';
export const REMOVE_MESSAGES = 'REMOVE_MESSAGES';
export const SUBMITTING = "SUBMITTING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const LOADING = "LOADING";
export const ADD_MESSAGES = "ADD_MESSAGES";


const initialState = {
	messages: [],
	successMsg: false,
	serverError: null,
	loading: true,
	submitting: false
};


function reducer(state, action) {
	switch (action.type) {
		case STORE_MESSAGES: 
			return {...state, messages: action.payload };
		case REMOVE_MESSAGES: 
			return {...state, messages: state.messages.filter(u => u.id !== action.payload)};
		case SUCCESS: 
			return {...state, successMsg: action.payload, serverError: null };
		case LOADING: 
			return {...state, loading: action.payload };
		case SUBMITTING: 
			return {...state, submitting: action.payload };
		case ERROR: 
			return {...state, serverError: action.payload, successMsg: false };
		case ADD_MESSAGES: 
			return {...state, messages: [...state.messages, action.payload]};	
		default:
			throw new Error();
	}
}

export const MessagesProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const url = BASE_URL + INBOX_PATH;

	async function getMessages() {
		
		try {
			const response = await axios.get(url);
			console.log(response.data);
			dispatch({ type: STORE_MESSAGES, payload: response.data });
			console.log(response.data);
		
		} catch (error) {
			console.log(error);
			dispatch({ type: ERROR, payload: error.toString() });
		}
	}
	console.log(state)
	useEffect(() => {
		getMessages();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// async function sendMsg(data) {
	// 	dispatch({ type: LOADING });
	// 	try {
	// 		const response = await axios.post(url, data);
	// 		console.log(response.data)
	// 		if (response === 200) {
	// 		dispatch({ type: ADD_MESSAGES, payload: data });
	// 		dispatch({ type: SUCCESS });
	// 		dispatch({ type: LOADING, payload: false });
	// 		setTimeout(() => {
	// 			dispatch({ type: SUCCESS, payload: false })
	// 		}, 1000);
	// 		}
	// 	} catch (error) {
	// 		console.log(error)
	// 		dispatch({ type: ERROR, payload: error.toString() });
	// 	 } finally {
	// 		dispatch({ type: SUCCESS, payload: true });
	// 	 }
	// }

	async function deleteMessages(id) {
		let res = await axios.delete(url + '/' + id);
		const { status } = res;

		if (status === 200) {
			dispatch({ type: REMOVE_MESSAGES, payload: id });
		}
	}

	return (
		<MessagesContext.Provider value={[state, dispatch, deleteMessages]}>
			{props.children}
		</MessagesContext.Provider>
	);
};

export default MessagesContext;
