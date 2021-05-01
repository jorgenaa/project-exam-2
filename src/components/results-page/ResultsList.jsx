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

	useEffect(() => {
	
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.serverError, state.loading]);

	if (state.loading) {
		return <LoadingMsg>Loading...</LoadingMsg>;
	}
	if (state.serverError) {
		return <ErrorMsg>ERROR: {state.serverError}</ErrorMsg>;
	}

	return (
		<section className="resultsList">
			{state.establishments.map(hotel => {
				const { id, name, stars, description, imgUrl, price } = hotel;

				return (
					<>
					{imgUrl ?<CustomCard
						id={id}
						name={name}
						stars={stars}
						description={description}
						image={imgUrl.url} 
						price={price}
					/>: null}
					</>
				);
			})}
		</section>
	);
};

export default ResultsList;
