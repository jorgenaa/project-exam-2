import { useEffect, useState } from 'react';

import {PropTypes} from "prop-types";
import { Link } from "react-router-dom";

import Button from '../../common/Button';
import ContentHeading from '../../common/ContentHeading';
import FacilitiesMobileView from './mobileView/FacilitiesMobileView';


const DetailsSection = ({ name, description, maxGuests, id, selfcatering, popular_facilityIcons, facility_icons }) => {
    console.log(popular_facilityIcons)
   const [popularFacilityIcons, setPopularFacilityIcons] = useState([]);
   
    useEffect(() => {
        if(popular_facilityIcons) {
            const popularFacilityIcons = popular_facilityIcons.split(" ");
            setPopularFacilityIcons(popularFacilityIcons)
           
        } 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
            <section className="specific__details" key={id}>
                <FacilitiesMobileView facility_icons={facility_icons} id={id} />
                <div className="specific__details-wrapper">
                    <div className="specific__details-item">
                        <ContentHeading content="Details about" data={name} />
                        <p className="specific__text" dangerouslySetInnerHTML={{__html:description}}></p>
                    </div>
                    <div className="specific__details-item pt-3">
                        <div className="specific__details-item-child pt-2">
                            {maxGuests ? <p><span className="pr-2 bold">Max guests&#58;</span>{maxGuests}</p> : ""}
                            <p><span className="pr-2 bold">Self catering&#58;</span>{selfcatering === false ? "No" : "Yes" }</p>
                        </div>
                        <div className="specific__details-item-child">
                            <h5 className="heading--h5 mb-3">Most popular facilities</h5>
                            <ul>
                                {popularFacilityIcons.map((icon, index) => {
                                    return <li className="specific__details-list-item" key={index}><span className={`fa ${icon}`}></span></li> 
                                })}
                            </ul>  
                            <Link className="specific__link" to={"/enquiry/" + id}>
                                <Button label="Reserve" type="specific__btn button button--blue button--hover" />
                            </Link>
                        </div>
                    </div>
                </div>   
            </section>
                
        )
    }

    DetailsSection.propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        selfcatering: PropTypes.bool.isRequired,
        maxGuests: PropTypes.number.isRequired,
    }
  

export default DetailsSection;