import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PropTypes } from 'prop-types';

import { BASE_URL } from '../../constants/api';

const Overview = ({ name, stars, image, id }) => {
	const parsedId = parseInt(id);
	console.log(typeof image);
	return (
		<section className="enquiry__overview" key={parsedId}>
			{image ? (
				<div className="enquiry__overview-item-1">
					<img
						className="enquiry__overview-img"
						src={`${BASE_URL}${image.url}`}
						alt="Hotel"
					/>
				</div>
			) : null}
			<div className="enquiry__overview-item-2">
				<h4 className="heading--h4">{name}</h4>
				{stars ? (
					<ul className="enquiry__overview-stars">
						{stars.map(star => {
							return (
								<li className="enquiry__overview-star" key={star.id}>
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
				) : null}
			</div>
		</section>
	);
};

Overview.propTypes = {
	image: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired,
	stars: PropTypes.array.isRequired,
	name: PropTypes.string.isRequired,
};

export default Overview;
