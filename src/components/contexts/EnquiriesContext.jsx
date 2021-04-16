import { createContext, useReducer, useEffect, useState } from "react"; 
import axios from "axios";
import { BASE_URL, DELETE_ENQ_PATH, ENQUIRIES_PATH } from '../../constants/api'; 

const  EnquiriesContext = createContext();

export const STORE_ENQUIRY = "STORE_ENQUIRY";
export const REMOVE_ENQUIRY = "REMOVE_ENQUIRY";
export const TOGGLE_ALL = "TOGGLE_ALL";
export const ADD_ID = "ADD_ID";
export const REMOVE_ID = "REMOVE_ID";
export const TOGGLE_DELETING = "TOGGLE_DELETING";

const initialState = {
	enquiries: [],
	allChecked: false,
	checkedIds: [],
	deleting: false,
};

function reducer(state, action) {
	switch (action.type) {
		case STORE_ENQUIRY:
			return { ...state, enquiries: action.payload };
		case REMOVE_ENQUIRY:
			return { ...state, enquiries: state.enquiries.filter((u) => u.id !== action.payload) };
		case TOGGLE_ALL:
			return { ...state, allChecked: !state.allChecked, checkedIds: action.payload ? state.enquiries.map((u) => u.id) : [] };
		case ADD_ID:
			console.log("ADD action.payload", action.payload);
			return { ...state, allChecked: state.checkedIds.length + 1 === state.enquiries.length, checkedIds: [...state.checkedIds, action.payload] };
		case REMOVE_ID:
			console.log("REMOVE action.payload", action.payload);
			return { ...state, allChecked: false, checkedIds: state.checkedIds.filter((i) => i !== action.payload) };
		case TOGGLE_DELETING:
			return { ...state, deleting: !state.deleting };
		default:
			throw new Error();
	}
}

export const EnquiriesProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [error, setError] = useState(null);
	const url = BASE_URL + ENQUIRIES_PATH;
    const urlDelete = BASE_URL + DELETE_ENQ_PATH;
	
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
		getUsers()
	
	  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

	async function deleteEnquiries() {
		dispatch({ type: TOGGLE_DELETING });

		for (let i = 0; i < state.checkedIds.length; i++) {
			const id = state.checkedIds[i];

			await axios.delete(urlDelete + id);
			dispatch({ type: REMOVE_ENQUIRY, payload: id });
			dispatch({ type: REMOVE_ID, payload: id });
		}

		dispatch({ type: TOGGLE_DELETING });
	}

	return <EnquiriesContext.Provider value={[state, dispatch, deleteEnquiries, error]}>{props.children}</EnquiriesContext.Provider>;
};

export default EnquiriesContext; 
