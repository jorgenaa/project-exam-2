import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL, HOTEL_PATH } from '../../constants/api';

const EstablishmentsContext = createContext();

export const STORE_ESTABLISHMENT = 'STORE_ESTABLISHMENT';
export const ADD_ESTABLISHMENT = 'ADD_ESTABLISHMENT';
export const REMOVE_ESTABLISHMENT = 'REMOVE_ESTABLISHMENT';
export const LOADING = "LOADING";
export const FINISHED_LOADING = "FINISHED_LOADING";
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const SUBMITTING = 'SUBMITTING';
export const SUBMITTED = 'SUBMITTED';


const initialState = {
	establishments: [],
	successMsg: false,
	serverError: null,
	loading: true
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
		case LOADING: {
			return { ...state, loading: true };
		}
		case FINISHED_LOADING: {
			return { ...state, loading: false };
		}
		case ERROR: {
			return { ...state, serverError: action.payload, successMsg: false };
		}
		case SUCCESS: {
			return { ...state, successMsg: true };
		}
		case ADD_ESTABLISHMENT:
  			return {...state, establishments: [...state.establishments, action.payload]};
			
		case REMOVE_ESTABLISHMENT:
			return {...state, establishments: state.establishments.filter(u => u.id !== action.payload),
			};
		default:
			throw new Error();
	}
}

export const EstablishmentsProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const url = BASE_URL + HOTEL_PATH;

	async function getEstablishments() {
		try {
			const response = await axios.get(url);
			dispatch({ type: STORE_ESTABLISHMENT, payload: response.data });
			console.log(response.data);
		} catch (error) {
			console.log(error);
			dispatch({ type: ERROR, payload: error.toString() });
			
		} finally {
			dispatch({ type: FINISHED_LOADING });
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
			dispatch({ type: ADD_ESTABLISHMENT, payload: data });
			dispatch({ type: SUCCESS });
			setTimeout(() => {
				dispatch({ type: SUBMITTED });
			}, 1500);
			}
		} catch (error) {
			console.log(error)
			dispatch({ type: ERROR, payload: error.toString() });
			dispatch({ type: SUBMITTED });
		} finally {
			dispatch({ type: SUBMITTED });
			dispatch({ type: FINISHED_LOADING });
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
			value={[state, dispatch, deleteEstablishment, addEstablishment]}
		>
			{props.children}
		</EstablishmentsContext.Provider>
	);
};

export default EstablishmentsContext;
