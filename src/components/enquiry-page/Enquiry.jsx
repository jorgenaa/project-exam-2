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
   
    const parsedId = parseInt(id);

    useEffect(() => {
        for(let i = 0; i < hotels.length; i++) {
            if(hotels[i].id === parsedId) {
                setSelectedHotel(hotels[i]);  
                break 
            }
        }
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
                                key={parsedId}
                                image={selectedHotel.imgUrl}
                                name={selectedHotel.name} 
                                />
                        </Row>
                        <Row>
                            <EnquiryForm 
                                    key={parsedId}
                                    id={parsedId}
                                    stringId={id}
                                    name={selectedHotel.name}
                                     />
                        </Row>
                    </Col>
                    <Col lg={4} md={5}>
                        <Sidebar type="sidebar__enquiry">
                            <div className="sidebar__enquiry-item">
                                <BookingDetails key={parsedId} />
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