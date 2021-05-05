import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../common/Button';

const SpecificSidebarContent = ({ id, icons }) => {
	const [serviceIcon, setServiceIcon] = useState([]);
	const [revisedIcons, setRevisedIcons] = useState([]);

	useEffect(() => {
		if (icons) {
			const filteredIcon = icons.filter(
				icon => icon.name !== 'faConciergeBell'
			);
			setRevisedIcons(filteredIcon);
		}
	}, [icons]);

	useEffect(() => {
		if (icons) {
			for (let i = 0; i < icons.length; i++) {
				if (icons[i].name === 'faConciergeBell') {
					setServiceIcon(icons[i]);
					break;
				}
			}
		}
	}, [icons]);
	
	
	return (
		<>
			<Link to={'/enquiry/' + id}>
				<Button label="Reserve" type="button button--blue button--hover" />
			</Link>
			<div>
				<h4 className="specific__sidebar-title">Facilities</h4>

				<ul className="specific__sidebar__list">
					{revisedIcons.map((icon, index) => {
						return (
						
							 <li key={icon.id} className="specific__sidebar-list-item">
								<span className={`fa ${icon.cssClass}`}>
									<FontAwesomeIcon
										icon={
											require('@fortawesome/free-solid-svg-icons')[icon.name]
										}
									></FontAwesomeIcon>
								</span>
							</li> 
						);
					})}
					<li>
						<span className={`fa ${serviceIcon.cssClass}`}>
							<FontAwesomeIcon
								icon={
									require('@fortawesome/free-solid-svg-icons')[serviceIcon.name]
								}
							/>
						</span>
						<ul>
							<li className="specific__list-services-item">- Laundry</li>
							<li className="specific__list-services-item">
								- Wake-up service
							</li>
							<li className="specific__list-services-item">
								- 24-hour front desk
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</>
	);
};
SpecificSidebarContent.propTypes = {
	id: PropTypes.number.isRequired,
	icons: PropTypes.array.isRequired,
};

export default SpecificSidebarContent;
