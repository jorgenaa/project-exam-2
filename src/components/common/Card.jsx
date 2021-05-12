import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Componentns
import Button from './Button';
import { BASE_URL } from '../../constants/api';

const CustomCard = ({ name, image, price, id, stars }) => {
	//Convert from object to array
	const allStars = Object.values(stars);

	return (
		<div className="custom-card">
			<div className="custom-card__img">
				<img
					key={image.id}
					className="custom-card__img-item"
					src={`${BASE_URL}${image.url}`}
					alt="Hotels"
				/>
			</div>
			<div className="custom-card__info">
				<div className="custom-card__title-wrapper">
					<h5 className="custom-card__title">{name}</h5>
					<ul className="specific__stars">
						{allStars.map(star => {
							return (
								<li key={star.id} className="specific__star">
									<span className={`fa ${star.cssClass}`}>
										<FontAwesomeIcon
											icon={
												require('@fortawesome/free-solid-svg-icons')[star.name]
											}
										></FontAwesomeIcon>
									</span>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="custom-card__price-btn">
					<p className="custom-card__price">
						<span className="custom-card__span">NOK</span>
						{price}
					</p>
					<Link to={'/specific/' + id}>
						<Button label="Show details" type="button--blue button--hover" />
					</Link>
				</div>
			</div>
		</div>
	);
};

CustomCard.propTypes = {
	stars: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.object.isRequired,
	description: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	id: PropTypes.number.isRequired,
};

export default CustomCard;
