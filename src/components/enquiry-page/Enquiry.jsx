import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

//Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EstablishmentContext from '../contexts/EstablishmentsContext';
import ErrorMsg from '../common/ErrorMsg';
import LoadingMsg from '../common/LoadingMsg';
import SubHeading from '../common/SubHeading';
import Overview from './Overview';
import EnquiryForm from './EnquiryForm';
import Sidebar from '../common/Sidebar';
import BookingDetails from './sidebar/BookingDetails';
import Price from './sidebar/Price';
import Summary from './sidebar/Summary';

const Enquiry = () => {
	const [fromDate, setFromDate] = useState('');
	const [toDate, setToDate] = useState('');
	const [selectedHotel, setSelectedHotel] = useState([]);
	const context = useContext(EstablishmentContext);
	const [state, , ,] = context;

	let { id } = useParams();
	
	//Split string to array
	const splitId = id.split(" ")
	const parsedId = parseInt(splitId);
	console.log(typeof(parsedId))
	
	const handleOnDateChangeStart = (startDate) => {
		const fromdate = startDate.target.value;
		const start = moment(fromdate).format('DD/MM/YYYY');
		setFromDate(start);
	};

	const handleOnDateChangeEnd = endDate => {
		const todate = endDate.target.value;
		const end = moment(todate).format('DD/MM/YYYY');
		setToDate(end);
	};

	const startDate = fromDate;
	const endDate = toDate;

	const start = moment(startDate, 'DD/MM/YYYY');
	const end = moment(endDate, 'DD/MM/YYYY');
	const diffDays = moment.duration(end.diff(start)).asDays();

	useEffect(() => {
		for (let i = 0; i < state.establishments.length; i++) {
			if (state.establishments[i].id === parsedId) {
				setSelectedHotel(state.establishments[i]);
				break;
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.establishments]);

	if (state.loading) {
		return <LoadingMsg>Loading...</LoadingMsg>;
	}

	if (state.serverError) {
		return <ErrorMsg>ERROR: {state.serverError}</ErrorMsg>;
	}


	return (
		<main className="enquiry">
			<SubHeading content="Enter your details" />
			<section>
				<Row>
					<Col lg={8} md={7} className="p-0">
						<Row>
							<Overview
								key={parsedId}
								id={id}
								image={selectedHotel.imgUrl}
								name={selectedHotel.name}
								stars={selectedHotel.stars}
							/>
						</Row>
						<Row>
							<EnquiryForm
								key={parsedId}
								id={parsedId}
								name={selectedHotel.name}
								handleOnDateChangeStart={handleOnDateChangeStart}
								handleOnDateChangeEnd={handleOnDateChangeEnd}
								fromDate={fromDate}
								toDate={toDate}
							/>
						</Row>
					</Col>
					<Col lg={4} md={5} className="p-0 ">
						<Sidebar type="sidebar__enquiry">
							<div className="sidebar__enquiry-item">
								<BookingDetails
									key={parsedId}
									fromDate={fromDate}
									toDate={toDate}
									roomType={selectedHotel.roomType}
								/>
							</div>
							<div className="sidebar__enquiry-item">
								<Price
									price={selectedHotel.price}
									roomType={selectedHotel.roomType}
									diffDays={diffDays}
								/>
								<Summary bookingInc={selectedHotel.bookingIncludes} />
							</div>
						</Sidebar>
					</Col>
				</Row>
			</section>
		</main>
	);
};

export default Enquiry;
