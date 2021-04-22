import { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';
import {PropTypes} from "prop-types";

import Button from '../../common/Button';

const SpecificSidebarContent = ({ id, icons }) => {
	const [serviceIcon, setServiceIcon] = useState([]);
	const [revisedIcons, setRevisedIcons] = useState([]);

	useEffect(() => {
		if(icons) {
			const filteredIcon = icons.filter(icon => icon.name !== "fa-concierge-bell");
			setRevisedIcons(filteredIcon);
		}
		
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if(icons) {
		for(let i = 0; i < icons.length; i++) {
			if(icons[i].name === "fa-concierge-bell") {
				setServiceIcon(icons[i]);  
				break 
			}
		}
	}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
								<span className={`fa ${icon.name}`}></span>
							</li>
						);
					})}
					{serviceIcon ? <li>
						<span className={`fa ${serviceIcon.name}`} /> 
						<ul>
							<li className="specific__list-services-item">- Laundry</li>
							<li className="specific__list-services-item">
								- Wake-up service
							</li>
							<li className="specific__list-services-item">
								- 24-hour front desk
							</li>
						</ul>
					</li> : ""}
				</ul>
			</div>
		</>
	);
};
SpecificSidebarContent.propTypes = {
    id: PropTypes.number.isRequired,
}

export default SpecificSidebarContent;
