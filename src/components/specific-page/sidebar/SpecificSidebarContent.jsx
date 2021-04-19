import { useEffect, useState } from 'react'; //
import { Link } from 'react-router-dom';
//import {PropTypes} from "prop-types";

import Button from '../../common/Button';

const SpecificSidebarContent = ({ id, icons }) => {
	
	const [serviceIcon, setServiceIcon] = useState([]);
	const [revisedIcons, setRevisedIcons] = useState([]);

	useEffect(() => {
		if (icons) {
			const allIcons = icons.split(" ");
			const reviseIconList = allIcons.slice(0, 8);
			
			//remove the service icon from the list
			reviseIconList.splice(2, 1);
			setRevisedIcons(reviseIconList);

			// add the service icon to a list element
			const filteredIcon = allIcons.find(icon => {
				const lowerCaseName = icon.toLowerCase();
	 
				if(lowerCaseName.includes("fa-concierge-bell")) {
					return true
				}
					return false;
			});
			
			setServiceIcon(filteredIcon);
			
		} else {
			console.log('icons are undefined', icons);
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
					{revisedIcons.map((icon, index) => {
						return (
							<li key={index} className="specific__sidebar-list-item">
								<span className={`fa ${icon}`}></span>
							</li>
						);
					})}
					{serviceIcon ? <li>
						<span className={`fa ${serviceIcon}`} /> 
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
// SpecificSidebarContent.propTypes = {
//     id: PropTypes.number.isRequired,
// }

export default SpecificSidebarContent;
