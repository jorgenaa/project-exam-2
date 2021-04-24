import { createContext, useReducer, useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL, HOTEL_PATH } from '../../constants/api';
import useAxios from '../../hooks/useAxios';
//import { getAuth } from '../../localStorage/getLocalStorage';

const EstablishmentsContext = createContext();

export const STORE_ESTABLISHMENT = 'STORE_ESTABLISHMENT';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const SUBMITTING = 'SUBMITTING';
export const SUBMITTED = 'SUBMITTED';
export const ADD_ESTABLISHMENT = 'ADD_ESTABLISHMENT';
export const REMOVE_ESTABLISHMENT = 'REMOVE_ESTABLISHMENT';
export const TOGGLE_ALL = 'TOGGLE_ALL';
export const ADD_ID = 'ADD_ID';
export const REMOVE_ID = 'REMOVE_ID';
export const TOGGLE_DELETING = 'TOGGLE_DELETING';

const initialState = {
	establishments: [],
	allChecked: false,
	checkedIds: [],
	deleting: false,
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
			return {
				...state,
				establishments: [...state.establishments, action.payload],
			};
		case REMOVE_ESTABLISHMENT:
			return {
				...state,
				establishments: state.establishments.filter(
					u => u.id !== action.payload
				),
			};
		case TOGGLE_ALL:
			return {
				...state,
				allChecked: !state.allChecked,
				checkedIds: action.payload ? state.establishments.map(u => u.id) : [],
			};
		case ADD_ID:
			console.log('ADD action.payload', action.payload);
			return {
				...state,
				allChecked: state.checkedIds.length + 1 === state.establishments.length,
				checkedIds: [...state.checkedIds, action.payload],
			};
		case REMOVE_ID:
			console.log('REMOVE action.payload', action.payload);
			return {
				...state,
				allChecked: false,
				checkedIds: state.checkedIds.filter(i => i !== action.payload),
			};
		case TOGGLE_DELETING:
			return { ...state, deleting: !state.deleting };
		default:
			throw new Error();
	}
}

export const EstablishmentsProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [error, setError] = useState(null);

	const http = useAxios();
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
		data.status = 'publish';

		try {
			const response = await http.post(url, data);
			dispatch({ type: ADD_ESTABLISHMENT, payload: response.data });
			dispatch({ type: SUCCESS });
			setTimeout(() => {
				dispatch({ type: SUBMITTED });
			}, 1500);
		} catch (error) {
			dispatch({ type: ERROR, payload: error.toString() });
			dispatch({ type: SUBMITTED });
		} finally {
			dispatch({ type: SUBMITTED });
		}
	}

	async function deleteEstablishment() {
		dispatch({ type: TOGGLE_DELETING });

		for (let i = 0; i < state.checkedIds.length; i++) {
			const id = state.checkedIds[i];

			await axios.delete(url + id);
			dispatch({ type: REMOVE_ESTABLISHMENT, payload: id });
			dispatch({ type: REMOVE_ID, payload: id });
		}

		dispatch({ type: TOGGLE_DELETING });
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
