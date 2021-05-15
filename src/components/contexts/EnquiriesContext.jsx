import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, ENQUIRIES_PATH } from '../../constants/api';

const EnquiriesContext = createContext();

export const STORE_ENQUIRY = 'STORE_ENQUIRY';
export const REMOVE_ENQUIRY = 'REMOVE_ENQUIRY';
export const ADD_ENQUIRY = 'ADD_ENQUIRY';
export const SUBMITTING = "SUBMITTING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";
export const LOADING = "LOADING";

const initialState = {
	enquiries: [],
	successMsg: false,
	serverError: null,
	loading: true,
	submitting: false
};

function reducer(state, action) {
	switch (action.type) {
		case STORE_ENQUIRY:
			return { ...state, enquiries: action.payload};
		case REMOVE_ENQUIRY: 
			return {...state, enquiries: state.enquiries.filter(u => u.id !== action.payload)};
		case SUCCESS: 
			return {...state, successMsg: action.payload, serverError: null };
		case LOADING: 
			return {...state, loading: action.payload };
		case SUBMITTING: 
			return {...state, submitting: action.payload };
		case ERROR: 
			return {...state, serverError: action.payload, successMsg: false };
		case ADD_ENQUIRY: 
			return {...state, enquiries: [...state.enquiries, action.payload]};	
		default:
			throw new Error();
	}
}

export const EnquiriesProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const url = BASE_URL + ENQUIRIES_PATH;

	async function getUsers() {
		try {
			const response = await axios.get(url);
			dispatch({ type: STORE_ENQUIRY, payload: response.data });
			console.log(response.data);
		} catch (error) {
			console.log(error);
			dispatch({ type: ERROR, payload: error.toString()});
		}
	}

	useEffect(() => {
		getUsers();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function deleteEnquiries(id) {
		try {
			let res = await axios.delete(url + '/' + id);
			const { status } = res;
	
			if (status === 200) {
				dispatch({ type: REMOVE_ENQUIRY, payload: id });
				console.log("enquiry is deleted")
			}
		}catch (error) {
			console.log(error);
			dispatch({ type: ERROR, payload: error.toString()});
		}
		
	}

	return (
		<EnquiriesContext.Provider
			value={[state, dispatch, deleteEnquiries]}
		>
			{props.children}
		</EnquiriesContext.Provider>
	);
};

export default EnquiriesContext;
