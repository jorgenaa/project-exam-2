import { createContext, useReducer, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL, HOTEL_PATH } from '../../constants/api';

const EstablishmentsContext = createContext();

export const STORE_ESTABLISHMENT = 'STORE_ESTABLISHMENT';
export const ADD_ESTABLISHMENT = 'ADD_ESTABLISHMENT';
export const LOADING = 'LOADING';
export const SUBMITTING = 'SUBMITTING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

const initialState = {
	establishments: [],
	successMsg: false,
	serverError: null,
	loading: true,
	submitting: false,
};

function reducer(state, action) {
	switch (action.type) {
		case STORE_ESTABLISHMENT:
			return { ...state, establishments: action.payload };
		case SUCCESS:
			return { ...state, successMsg: action.payload, serverError: null };
		case LOADING:
			return { ...state, loading: action.payload };
		case SUBMITTING:
			return { ...state, submitting: action.payload };
		case ERROR:
			return { ...state, serverError: action.payload, successMsg: false };
		case ADD_ESTABLISHMENT:
			console.log('ADD action.payload', action.payload);
			return {
				...state,
				establishments: [...state.establishments, action.payload],
			};
		default:
			throw new Error();
	}
}

export const EstablishmentsProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const url = BASE_URL + HOTEL_PATH;

	async function getEstablishments() {
		dispatch({ type: LOADING, payload: true });
		try {
			const response = await axios.get(url);
			dispatch({ type: STORE_ESTABLISHMENT, payload: response.data });
			dispatch({ type: LOADING, payload: false });
			console.log(response.data);
		} catch (error) {
			console.log(error);
			dispatch({ type: ERROR, payload: error.toString() });
		}
	}

	useEffect(() => {
		getEstablishments();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const history = useHistory();

	async function addEstablishment(data) {
		dispatch({ type: SUBMITTING, payload: true });
		dispatch({ type: ERROR, payload: null });

		try {
			const response = await axios.post(url, data, {
				headers: {
					Accept: 'application/json',
					'Content-Type': 'multipart/form-data',
				},
			});
			dispatch({ type: SUCCESS, payload: true });
			const { status } = response;
			if (status === 200) {
				console.log(response.data);
				dispatch({ type: ADD_ESTABLISHMENT, payload: data });
				setTimeout(() => {
					dispatch({ type: SUCCESS, payload: false });
					history.push('/establishment');
				}, 1000);
			}
		} catch (error) {
			console.log(error);
			dispatch({ type: ERROR, payload: error.toString() });
		} finally {
			dispatch({ type: SUBMITTING, payload: false });
		}
	}

	return (
		<EstablishmentsContext.Provider value={[state, dispatch, addEstablishment]}>
			{props.children}
		</EstablishmentsContext.Provider>
	);
};

export default EstablishmentsContext;
