import { createContext, useReducer, useEffect, useState } from "react"; 
import axios from "axios";
import { BASE_URL, INBOX_PATH } from '../../constants/api'; 
const MessagesContext = createContext();

export const STORE_USERS = "STORE_USERS";
export const REMOVE_USER = "REMOVE_USER";
export const TOGGLE_ALL = "TOGGLE_ALL";
export const ADD_ID = "ADD_ID";
export const REMOVE_ID = "REMOVE_ID";
export const TOGGLE_DELETING = "TOGGLE_DELETING";

const initialState = {
	users: [],
	allChecked: false,
	checkedIds: [],
	deleting: false,
};

function reducer(state, action) {

	switch (action.type) {
		case STORE_USERS:
			return { ...state, users: action.payload };
		case REMOVE_USER:
			return { ...state, users: state.users.filter((u) => u.id !== action.payload) };
		case TOGGLE_ALL:
			return { ...state, allChecked: !state.allChecked, checkedIds: action.payload ? state.users.map((u) => u.id) : [] };
		case ADD_ID:
			console.log("ADD action.payload", action.payload);
			return { ...state, allChecked: state.checkedIds.length + 1 === state.users.length, checkedIds: [...state.checkedIds, action.payload] };
		case REMOVE_ID:
			console.log("REMOVE action.payload", action.payload);
			return { ...state, allChecked: false, checkedIds: state.checkedIds.filter((i) => i !== action.payload) };
		case TOGGLE_DELETING:
			return { ...state, deleting: !state.deleting };
		default:
			throw new Error();
	}
}

export const MessagesProvider = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [error, setError] = useState(null);
	const url = BASE_URL + INBOX_PATH;
	
	async function getUsers() {
		try {
			const response = await axios.get(url);
			dispatch({ type: STORE_USERS, payload: response.data });
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
	
async function deleteUsers(){
	dispatch({ type: TOGGLE_DELETING });

	for (let i = 0; i < state.checkedIds.length; i++) {
		const id = state.checkedIds[i];
  
		let res = await axios.delete(url + id);
		 const { status } = res;
		 console.log(status)
		 if(status === 200) 
		{
		dispatch({ type: REMOVE_USER, payload: res.data.id });
		dispatch({ type: REMOVE_ID, payload: res.data.id });
		}
	  }
  
	  dispatch({ type: TOGGLE_DELETING });
	}


	// async function deleteUsers() {
	// 	dispatch({ type: TOGGLE_DELETING });

	// 	for (let i = 0; i < state.checkedIds.length; i++) {
	// 		const id = state.checkedIds[i];
	// 		await axios.delete(url + id);
			
	// 		dispatch({ type: REMOVE_USER, payload: id });
	// 		dispatch({ type: REMOVE_ID, payload: id });
			
			
	// 	}

	// 	dispatch({ type: TOGGLE_DELETING });
	// }

	return <MessagesContext.Provider value={[state, dispatch, deleteUsers, error]}>{props.children}</MessagesContext.Provider>;
};

export default MessagesContext;
