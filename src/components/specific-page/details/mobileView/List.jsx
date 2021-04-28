import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = ({ icons, id }) => {
	const [firstIconsList, setFirstIconsList] = useState([]);
	const [serviceIcon, setServiceIcon] = useState([]);
	const [secondIconsList, setSecondIconsList] = useState([]);

	useEffect(() => {
		if (icons) {
			//remove the service icon from the list
			const filteredIcon = icons.filter(
				icon => icon.name !== 'faConciergeBell'
			);
			const iconList = filteredIcon.slice(0, 2);
			setFirstIconsList(iconList)
			
			const secondIconsList = filteredIcon.slice(3, 8);
	 		setSecondIconsList(secondIconsList);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [icons]);


	return (
		<>
			<ul className="specific__list-mobile" key={id}>
				<ul className="specific__list-mobile-item">
					{firstIconsList.map((icon, index) => {
						return (
							<li key={index} className="specific__details-list-item">
								<span className={`fa ${icon.cssClass}`}><FontAwesomeIcon icon={require("@fortawesome/free-solid-svg-icons")[icon.name]}></FontAwesomeIcon></span>
							</li>
						);
					})}
					<li>
						<span className={`fa ${serviceIcon.cssClass}`}><FontAwesomeIcon icon={require("@fortawesome/free-solid-svg-icons")[serviceIcon.name]} /></span>
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
								<span className={`fa ${icon.cssClass}`}><FontAwesomeIcon icon={require("@fortawesome/free-solid-svg-icons")[icon.name]}></FontAwesomeIcon></span>
							</li>
						);
					})}
				</ul>
			</ul>
		</>
	);
};

export default List;
