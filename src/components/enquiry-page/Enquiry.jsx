import {useContext, useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom";
import {PropTypes} from "prop-types";

//Components
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HotelContext from '../contexts/HotelContext';
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
    const [selectedHotel, setSelectedHotel] = useState([]);
    let { id } = useParams();
    const hotelContext = useContext(HotelContext);
    const [hotels, error, loading] = hotelContext;
   
    const [dateRange, setDateRange] = useState({
            startDate: null,
            endDate: null
      });

    useEffect(() => {
        const filterHotels = async()=> {
            hotels.find(hotel => {
               
                if(hotel.id === id) {
                    return true;
                }
            return setSelectedHotel(hotel); 
            })
       }
       filterHotels();
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   if(loading) {
    return <LoadingMsg>Loading...</LoadingMsg>
    }

    if(error) {
        return <ErrorMsg>ERROR: {error}</ErrorMsg>
    }

    return (
        <main className="enquiry">
            <section>
                <SubHeading content="Enter your details" />
            </section>
            <section>
                <Row>
                    <Col lg={8} md={7} className="p-0">
                        <Row>
                            <Overview 
                                key={id}
                                image={selectedHotel.imgUrl}
                                name={selectedHotel.name} 
                                />
                        </Row>
                        <Row>
                            <EnquiryForm 
                                    key={id}
                                    id={id}
                                    name={selectedHotel.name}
                                    dateRange={dateRange} 
                                    setDateRange={setDateRange} />
                        </Row>
                    </Col>
                    <Col lg={4} md={5}>
                        <Sidebar type="sidebar__enquiry">
                            <div className="sidebar__enquiry-item">
                                <BookingDetails key={id} />
                            </div>
                            <div className="sidebar__enquiry-item">
                                <Price />
                                <Summary />
                            </div>
                        </Sidebar>
                    </Col>
                </Row>
             
            </section>
        </main>
    )
}

Enquiry.propTypes = {
	id: PropTypes.number.isRequired
}

export default Enquiry;