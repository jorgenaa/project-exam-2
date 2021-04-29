import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import {PropTypes} from "prop-types";

//Components
import SubHeading from '../common/SubHeading';
import CustomCard from '../common/Card';
import Button from '../common/Button';
import EstablishmentContext from '../contexts/EstablishmentsContext';
//import { ERROR, LOADING } from '../contexts/EstablishmentsContext';
import ErrorMsg from '../common/ErrorMsg';
import LoadingMsg from '../common/LoadingMsg';

const Deals = () => {
	const specialDealId = 3;
	const establishmentContext = useContext(EstablishmentContext);
	const [state, , , ] = establishmentContext; //dispatch

	//Return max 4 hotels from array
	const hotelResult = state.establishments.slice(0, 4);

useEffect(() => {
	// dispatch({ type: ERROR});
	// dispatch({ type: LOADING});
	
	// eslint-disable-next-line react-hooks/exhaustive-deps
}, [state.serverError, state.loading]);

	if (state.loading) {
		return <LoadingMsg>Loading...</LoadingMsg>;
	}
	if (state.serverError) {
		return <ErrorMsg>ERROR: {state.serverError}</ErrorMsg>;
	}

	return (
		<section className="deals">
			<SubHeading content="Special deals this month" />
			<div className="deals__hotelList">
				{hotelResult.map(hotel => {
					const { id, name, stars, description, imgUrl, price } = hotel;
					return (
						<CustomCard
							key={id}
							id={id}
							name={name}
							stars={stars}
							description={description}
							image={imgUrl.url}
							price={price}
						/>
					);
				})}
			</div>
			<div className="deals__special" key={specialDealId}>
				<div className="deals__special-wrapper">
					<h3 className="deals__special-title h3">
						Special deal on lake cabin
					</h3>
					<p className="deals__special-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
					<Link to={'/specific/' + specialDealId}>
						<Button
							label="Show details"
							type="deals__special-btn button--yellow button--hover"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};

// Deals.propTypes = {
// 	specialDealId: PropTypes.number.isRequired
// }

export default Deals;
