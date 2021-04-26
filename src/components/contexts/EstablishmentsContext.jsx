import { createContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, HOTEL_PATH } from '../../constants/api';

const EstablishmentsContext = createContext();

export const STORE_ESTABLISHMENT = 'STORE_ESTABLISHMENT';
export const ADD_ESTABLISHMENT = 'ADD_ESTABLISHMENT';
export const REMOVE_ESTABLISHMENT = 'REMOVE_ESTABLISHMENT';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const SUBMITTING = 'SUBMITTING';
export const SUBMITTED = 'SUBMITTED';



const initialState = {
	establishments: [],
	successMsg: false,
	serverError: null,
	
};

function reducer(state, action) {
	switch (action.type) {
		case STORE_ESTABLISHMENT:
			return { ...state, establishments: action.payload };
		case SUBMITTING: {
			return { ...state, submitting: true };
		}
		case SUBMITTED: {
			return { ...state, submitting: false };
		}
		case ERROR: {
			return { ...state, serverError: action.payload, successMsg: false };
		}
		case SUCCESS: {
			return { ...state, successMsg: true };
		}
		case ADD_ESTABLISHMENT:
			return {...state, establishments: action.payload};
			
		case REMOVE_ESTABLISHMENT:
			return {
				...state,
				establishments: state.establishments.filter(
					u => u.id !== action.payload
				),
			};
		default:
			throw new Error();
	}
}

export const EstablishmentsProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [error, setError] = useState(null);

	
	const url = BASE_URL + HOTEL_PATH;

	//const token = getAuth();

	async function getEstablishments() {
		try {
			const response = await axios.get(url);
			dispatch({ type: STORE_ESTABLISHMENT, payload: response.data });
			console.log(response.data);
		} catch (error) {
			console.log(error);
			setError(error.toString());
		}
	}

	useEffect(() => {
		getEstablishments();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	async function addEstablishment(data) {
		//data.status = 'publish';

		try {
			const response = await axios.post(url, data);
			console.log(response.data)
			if (response === 200) {
			dispatch({ type: ADD_ESTABLISHMENT, payload: response.data });
			// dispatch({ type: SUCCESS });
			// setTimeout(() => {
			// 	dispatch({ type: SUBMITTED });
			// }, 1500);
			}
		} catch (error) {
			console.log(error)
			// dispatch({ type: ERROR, payload: error.toString() });
			// dispatch({ type: SUBMITTED });
		} finally {
			dispatch({ type: SUBMITTED });
		}
	}

	async function deleteEstablishment(id) {
		let res = await axios.delete(url + id);
		const { status } = res;

		if (status === 200) {
			dispatch({ type: REMOVE_ESTABLISHMENT, payload: id });
		}
	}

	return (
		<EstablishmentsContext.Provider
			value={[state, dispatch, deleteEstablishment, addEstablishment, error]}
		>
			{props.children}
		</EstablishmentsContext.Provider>
	);
};

export default EstablishmentsContext;
