import { useContext } from 'react';

//Components
import ErrorMsg from '../common/ErrorMsg';
import LoadingMsg from '../common/LoadingMsg';
import CustomCard from '../common/Card';
import EstablishmentContext from '../contexts/EstablishmentsContext';

const ResultsList = () => {
	
	const establishmentContext = useContext(EstablishmentContext);
	const [state ] = establishmentContext; 

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
					<CustomCard
						id={id}
						name={name}
						stars={stars}
						description={description}
						image={imgUrl.url}
						price={price}
					/>
				);
			})}
		</section>
	);
};

export default ResultsList;
