import { useEffect, useState } from 'react';

const List = ({ facilityIcons, id }) => {
	const [allIcons, setAllIcons] = useState([]);
	const [serviceIcon, setServiceIcon] = useState([]);
	const [secondIconsList, setSecondIconsList] = useState([]);

	useEffect(() => {
		if (facilityIcons) {
			console.log('icons are not undefined');
			const splitedIcons = facilityIcons.split(' ');
			const icons = splitedIcons.slice(0, 2);
			setAllIcons(icons);
			//remove the service icon from the list
			icons.splice(2, 1);
			// add the service icon to a list element
			const serviceIcon = splitedIcons.slice(2, 3);
			setServiceIcon(serviceIcon);
			const secondIconsList = splitedIcons.slice(3, 8);
			setSecondIconsList(secondIconsList);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<ul className="specific__list-mobile" key={id}>
				<ul className="specific__list-mobile-item">
					{allIcons.map((icon, index) => {
						return (
							<li key={index} className="specific__details-list-item">
								<span className={`fa ${icon}`}></span>
							</li>
						);
					})}
					<li>
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
					</li>
				</ul>
				<ul className="specific__list-mobile-item">
					{secondIconsList.map((icon, index) => {
						return (
							<li key={index} className="specific__details-list-item">
								<span className={`fa ${icon}`}></span>
							</li>
						);
					})}
				</ul>
			</ul>
		</>
	);
};

export default List;
