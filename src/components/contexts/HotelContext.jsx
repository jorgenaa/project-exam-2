import { useEffect, useState, createContext } from 'react'; //
import axios from 'axios';

//Components
import { BASE_URL, HOTEL_PATH } from '../../constants/api'; //
import { useLocalStorage } from '../../hooks/useLocalStorage';

const url = BASE_URL + HOTEL_PATH;

const HotelContext = createContext();

export const HotelProvider = props => {
	const [hotels, setHotels] = useLocalStorage('hotels');

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchHotels = async () => {
			const response = await axios.get(url);
			console.log('response', response.data);
			try {
				setHotels(response.data);
			} catch (error) {
				console.log(error);
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		};
		fetchHotels();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<HotelContext.Provider value={[hotels, error, loading]}>
			{props.children}
		</HotelContext.Provider>
	);
};

export default HotelContext;
