import { createContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, ENQUIRIES_PATH } from '../../constants/api';

const EnquiriesContext = createContext();

export const STORE_ENQUIRY = 'STORE_ENQUIRY';
export const REMOVE_ENQUIRY = 'REMOVE_ENQUIRY';

const initialState = {
	enquiries: [],
};

function reducer(state, action) {
	switch (action.type) {
		case STORE_ENQUIRY:
			return { ...state, enquiries: action.payload };
		case REMOVE_ENQUIRY:
			return {
				...state,
				enquiries: state.enquiries.filter(u => u.id !== action.payload),
			};
		default:
			throw new Error();
	}
}

export const EnquiriesProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [error, setError] = useState(null);
	const url = BASE_URL + ENQUIRIES_PATH;

	async function getUsers() {
		try {
			const response = await axios.get(url);
			dispatch({ type: STORE_ENQUIRY, payload: response.data });
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

	async function deleteEnquiries(id) {
		let res = await axios.delete(url + id);
		const { status } = res;

		if (status === 200) {
			dispatch({ type: REMOVE_ENQUIRY, payload: id });
		}
	}


	return (
		<EnquiriesContext.Provider
			value={[state, dispatch, deleteEnquiries, error]}
		>
			{props.children}
		</EnquiriesContext.Provider>
	);
};

export default EnquiriesContext;
