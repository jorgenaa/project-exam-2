import { useContext, useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import EstablishmentContext from '../contexts/EstablishmentsContext';
import ErrorMsg from '../common/ErrorMsg';
import LoadingMsg from '../common/LoadingMsg';
import Button from '../common/Button';
import ContentHeading from '../common/ContentHeading';
import ImageSection from './images/ImageSection';
import CarouselSlider from './images/Carousel';
import DetailsSection from './details/DetailsSection';
import GuestReviews from './GuestReviews';
import Attractions from './Attractions';
import Sidebar from '../common/Sidebar';
import SpecificSidebarContent from './sidebar/SpecificSidebarContent';

const Specific = () => {
	const [specificHotel, setSpecificHotel] = useState([]);
	const { id } = useParams();
	const establishmentContext = useContext(EstablishmentContext);
	const [state ] = establishmentContext; 

	let parsedId = parseInt(id);
	
	useEffect(() => {
		for (let i = 0; i < state.establishments.length; i++) {
			if (state.establishments[i].id === parsedId) {
				setSpecificHotel(state.establishments[i]);
				break;
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.establishments, specificHotel]);

	if (state.loading) {
		return <LoadingMsg>Loading...</LoadingMsg>;
	}
	if (state.serverError) {
		return <ErrorMsg>ERROR: {state.serverError}</ErrorMsg>;
	}

	return (
		<main className="specific mt-2" key={parsedId}>
			<div className="specific__header-section">
				<h2 className="specific__heading">{specificHotel.name}</h2>
				{specificHotel.stars ? (
					<ul className="specific__stars">
						{specificHotel.stars.map(star => {
							return (
								<li key={star.id} className="specific__star">
									<span className={`fa ${star.cssClass}`}><FontAwesomeIcon icon={require("@fortawesome/free-solid-svg-icons")[star.name]}></FontAwesomeIcon></span>
								</li>
							);
						})}
					</ul>
				) : (
					''
				)}
			</div>

			<div className="specific__wrapper">
				<section className="specific__body">
					<ImageSection
						image={specificHotel.imgUrl}
						images={specificHotel.imgsUrl}
						id={parsedId}
					/>
					<CarouselSlider
						imgMobile={specificHotel.imgsMobileUrl}
						id={parsedId}
					/>
					<DetailsSection
						id={parsedId}
						name={specificHotel.name}
						description={specificHotel.description}
						maxGuests={specificHotel.maxGuests}
						popularFacilityIcons={specificHotel.popularFacilityIcons}
						icons={specificHotel.facilityIcons}
						selfcatering={specificHotel.selfCatering}
					/>
				</section>
				<div className="specific__sidebar">
					<Sidebar type="sidebar__specific">
						<SpecificSidebarContent
							id={parsedId}
							icons={specificHotel.facilityIcons}
						/>
					</Sidebar>
				</div>
			</div>
			<ContentHeading content="Guest reviews" />
			<div className="specific__wrapper">
				<GuestReviews />
				<div className="specific__sidebar">
					<Sidebar />
				</div>
			</div>

			<ContentHeading content="Top attractions nearby" />

			<div className="specific__wrapper">
				<Attractions />
				<div className="specific__sidebar">
					<Sidebar type="sidebar">
						<section className="pt-3 ml-3">
							<Link className="float-right" to={'/enquiry/' + parsedId}>
								<Button
									label="Reserve"
									type="specific__attraction-btn button--blue button--hover"
								/>
							</Link>
						</section>
					</Sidebar>
				</div>
			</div>
			<section>
				<Link
					className="float-right pt-3 specific__link-bottom"
					to={'/enquiry/' + parsedId}
				>
					<Button
						label="Reserve"
						type="specific__attraction-btn button--blue button--hover"
					/>
				</Link>
			</section>
		</main>
	);
};

Specific.propTypes = {
	parsedId: PropTypes.number.isRequired,
};

export default Specific;
