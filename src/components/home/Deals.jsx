import {useContext} from 'react';
import {Link} from 'react-router-dom';
//import {PropTypes} from "prop-types";

//Components
import SubHeading from '../common/SubHeading';
import CustomCard from '../common/Card';
import Button from '../common/Button';
import HotelContext from '../contexts/HotelContext';
import ErrorMsg from '../common/ErrorMsg';
import LoadingMsg from '../common/LoadingMsg';

const Deals = () => {
	const specialDealId = 3;
	const hotelContext = useContext(HotelContext);
	const [ hotels, loading, error ] = hotelContext;

	//Return max 4 hotels from array 
	const hotelResult = hotels.slice(0, 4);
	
	if(loading) {
		return <LoadingMsg>Loading...</LoadingMsg>
	}
	if(error) {
		return <ErrorMsg>ERROR: {error}</ErrorMsg>
	}

	return (
		<section className="deals">
			<SubHeading content="Special deals this month" />
			<div className="deals__hotelList">
				{hotelResult.map(hotel =>  {
					const {id, name, description, imgUrl, price} = hotel;
					return(
						 <CustomCard 
						 	key={id}
							id={id}
							name={name}
							description={description}
							image={imgUrl.url}
							price={price} 
							/>
						) 
					})} 
			</div>
			<div className="deals__special" key={specialDealId}>
				<div className="deals__special-wrapper">
					<h3 className="deals__special-title h3">Special deal on lake cabin</h3>
					<p className="deals__special-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<Link to={"/specific/" + specialDealId}>  
						<Button label="Show details" type="deals__special-btn button--yellow button--hover" />
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
