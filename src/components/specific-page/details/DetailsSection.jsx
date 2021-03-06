import { PropTypes } from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Components

import FacilitiesMobileView from './mobileView/FacilitiesMobileView';

const DetailsSection = ({
	name,
	description,
	maxGuests,
	id,
	selfcatering,
	popularFacilityIcons,
	icons,
}) => {
	
	return (
		<section className="specific__details" key={id}>
			<FacilitiesMobileView icons={icons} id={id} />
			<div className="specific__details-wrapper">
				<div className="specific__details-item">
					<h3 className="heading--h3">Details about {name}</h3>
					<p
						className="specific__text"
						dangerouslySetInnerHTML={{ __html: description }}
					></p>
				</div>
				<div className="specific__details-item pt-3">
					<div className="specific__details-item-child pt-2">
						<p>
							<span className="pr-2 bold">Max guests&#58;</span>
							{maxGuests}
						</p>
						<p>
							<span className="pr-2 bold">Self catering&#58;</span>
							{selfcatering === false ? 'No' : 'Yes'}
						</p>
					</div>
					<div className="specific__details-item-child">
						<h5 className="heading--h5 mb-3">Most popular facilities</h5>
						{popularFacilityIcons ? (
							<ul>
								{popularFacilityIcons.map((icon) => {
									return (
										<li className="specific__details-list-item" key={icon.id}>
											<span className={`fa ${icon.cssClass}`}>
												<FontAwesomeIcon
													icon={
														require('@fortawesome/free-solid-svg-icons')[
															icon.name
														]
													}
												></FontAwesomeIcon>
											</span>
										</li>
									);
								})}
							</ul>
						) : null}
					
					</div>
				</div>
			</div>
		</section>
	);
};

DetailsSection.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	selfcatering: PropTypes.bool.isRequired,
	maxGuests: PropTypes.number.isRequired,
	popularFacilityIcons: PropTypes.array.isRequired,
	icons: PropTypes.array.isRequired,
};

export default DetailsSection;
