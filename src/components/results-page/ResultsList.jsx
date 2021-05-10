import { useContext, useEffect } from 'react';

//Components
import ErrorMsg from '../common/ErrorMsg';
import LoadingMsg from '../common/LoadingMsg';
import CustomCard from '../common/Card';
import EstablishmentContext from '../contexts/EstablishmentsContext';
//import { ERROR, LOADING } from '../contexts/EstablishmentsContext';

const ResultsList = () => {
	
	const establishmentContext = useContext(EstablishmentContext);
	const [state, , , ] = establishmentContext; 

	useEffect(() => {}, [state.serverError, state.loading]);

	if (state.loading) {
		return <LoadingMsg>Loading...</LoadingMsg>;
	}
	if (state.serverError) {
		return <ErrorMsg>ERROR: {state.serverError}</ErrorMsg>;
	}

	return (
		<section className="resultsList">
			{state.establishments.map(hotel => {
				//Convert from object to array
				const allStars = Object.values(hotel.stars);
				const { id, name, description, imgUrl, price } = hotel;
				
				return (
					<CustomCard
						key={id}
						id={id}
						name={name}
						stars={allStars}
						description={description}
						image={imgUrl} 
						price={price}
					/>
					
				);
			})}
		</section>
	);
};

export default ResultsList;
