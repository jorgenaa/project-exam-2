
import {PropTypes} from "prop-types";
import { Link } from "react-router-dom";

import Button from '../../common/Button';
import ContentHeading from '../../common/ContentHeading';
//import List from './List';

const DetailsSection = ({name, description, maxGuests, id, selfcatering, popular_facilityIcons, facility_icons }) => {
   
    // const facilityIcons = facility_icons.split(" ");
   
    // const popularFacilityIcons = popular_facilityIcons.split(" "); 

    return (
            <section className="specific__details" key={id}>
                    <div className="specific__sidebar-mobile ">
                        <h4 className="heading--h4 ">Facilities</h4>
                        {/* <List facilityIcons={facilityIcons} id={id} /> */}
                        <section>
                        <Link className="specific__sidebar-link-mobile" to={"/enquiry/" + id}>
                            <Button label="Reserve" type="specific__btn button button--blue button--hover" />
                        </Link>  
                        </section>
                        <Link className="specific__link float-right" to={"/enquiry/" + id}>
                            <Button label="Reserve" type="specific__btn button button--blue button--hover" />
                        </Link>  
                    </div>
                    <div className="specific__details-wrapper">
                        <div className="specific__details-item">
                            <ContentHeading content="Details about" data={name} />
                            <p className="specific__text" dangerouslySetInnerHTML={{__html:description}}></p>
                        </div>
                        <div className="specific__details-item pt-3">
                            <div className="specific__details-item-child">
                                <p><span>Max guests&#58;</span>{maxGuests}</p>
                                <p>Self catering&#58;{selfcatering !== false ? "No" : "Yes" }</p>
                            </div>
                            <div className="specific__details-item-child">
                                <h5 className="heading--h5">Most popular facilities</h5>
                                {/* <ul>
                                    {popularFacilityIcons.map(icon => {
                                        console.log(icon)
                                        return <li className="specific__details-list-item"><span className={`fa ${icon}`}></span></li> 
                                    })}
                                </ul>  */}
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
        //id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        maxGuests: PropTypes.number.isRequired,
    }
  

export default DetailsSection;