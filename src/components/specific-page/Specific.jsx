import {useContext, useState, useEffect} from 'react'; 
//import {PropTypes} from "prop-types";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from '../common/Button';

//Components
import HotelContext from '../contexts/HotelContext';
import ErrorMsg from '../common/ErrorMsg';
import LoadingMsg from '../common/LoadingMsg';
import SubHeading from '../common/SubHeading';
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
    const hotelContext = useContext(HotelContext);
    const [hotels, error, loading] = hotelContext; 
 
    useEffect(() => {
        if(hotels){
            hotels.find(hotel => {
                if(hotel.id === id) {
                  return true;
                } 
            return setSpecificHotel(hotel);  
            })  
           
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   console.log(specificHotel)

   if(loading) {
        return <LoadingMsg>Loading...</LoadingMsg>
    }
    if(error) {
        return <ErrorMsg>ERROR: {error}</ErrorMsg>
    }

    return (
            <main className="specific mt-2" key={id}>
                <SubHeading content={specificHotel.name} />
                <div className="specific__wrapper">
                    <section className="specific__body">
                        <ImageSection 
                            image={specificHotel.imgUrl} 
                            images={specificHotel.imgsUrl} 
                            id={id}
                            />
                        <CarouselSlider 
                            imgMobile={specificHotel.imgsMobileUrl}
                            id={id}
                           />
                        <DetailsSection 
                            id={id}
                            name={specificHotel.name} 
                            description={specificHotel.description}
                            maxGuests={specificHotel.maxGuests}
                            popular_facilityIcons={specificHotel.popularFacilities}
                            facility_icons={specificHotel.facility_icons}
                            />
                    </section>
                    <div className="specific__sidebar">
                        <Sidebar type="sidebar__specific">
                            <SpecificSidebarContent id={id} icons={specificHotel.facility_icons} />
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
                                <Link className="float-right" to={"/enquiry/" + id}>
                                    <Button label="Reserve" type="specific__attraction-btn button--blue button--hover" />
                                </Link>  
                            </section>
                        </Sidebar>
                    </div>   
                </div>
                <section>
                    <Link className="float-right pt-3 specific__link-bottom" to={"/enquiry/" + id}>
                        <Button label="Reserve" type="specific__attraction-btn button--blue button--hover" />
                    </Link>  
                </section>
               
            </main>
    )
}

// Specific.propTypes = {
//     id: PropTypes.number.isRequired,
// }

export default Specific;