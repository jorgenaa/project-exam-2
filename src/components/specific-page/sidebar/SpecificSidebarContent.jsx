import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../common/Button';

const SpecificSidebarContent = ({ id, icons }) => {
	const [serviceIcon, setServiceIcon] = useState([]);
	const [revisedIcons, setRevisedIcons] = useState([]);
	const SVGicons = require("@fortawesome/free-solid-svg-icons");

	useEffect(() => {
		if (icons) {
			//Remove "faConciergeBell" icon from the list
			const filteredIcon = icons.filter(
				icon => icon.name !== 'faConciergeBell'
			);
			setRevisedIcons(filteredIcon);
		}
	}, [icons]);

	useEffect(() => {
		if (icons) {
			//get the "faConciergeBell" icon from the list
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
					{revisedIcons.map((icon) => {
					
						return (
							 <li key={icon.id} className="specific__sidebar-list-item">
								<span className={`fa ${icon.cssClass}`}>
									<FontAwesomeIcon
										icon={SVGicons[icon.name]
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
						{serviceIcon.services.map(service => {
							return (
								<li className="specific__list-services-item" key={service.id}>{service.name}</li>
							)	
						})}
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
