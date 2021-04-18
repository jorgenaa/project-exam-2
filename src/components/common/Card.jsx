import {Link} from 'react-router-dom';
import {PropTypes} from "prop-types";
import Button from './Button';
import { BASE_URL } from '../../constants/api';
const CustomCard = ({name, image, price, id}) => {
	
	return (
		<div className="custom-card">
			<div className="custom-card__img">	
				<img className="custom-card__img-item" src={`${BASE_URL}${image}`} alt="Hotels" />
			</div>
			<div className="custom-card__info">
				<h5 className=" custom-card__title">{name}</h5>
				<div className="custom-card__price-btn">
					<p className="custom-card__price"><span className="custom-card__span">NOK</span>{price}</p>
					<Link to={"/specific/" + id}>
						<Button label="Show details" type="button--blue button--hover" />
					</Link>
				</div>
			</div>
		</div>
	);
};

CustomCard.propTypes = {
	name: PropTypes.string.isRequired, 
	image: PropTypes.string.isRequired, 
	description: PropTypes.string.isRequired, 
	price: PropTypes.number.isRequired, 
	id: PropTypes.string.isRequired
}

export default CustomCard;
