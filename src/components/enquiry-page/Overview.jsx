import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from 'prop-types';

import { BASE_URL } from '../../constants/api';

const Overview = ({name, stars, image, id}) => {
   
    return (
        <section className="enquiry__overview">
           {image ? <div className="enquiry__overview-item-1" key={id}>
                <img className="enquiry__overview-img" src={`${BASE_URL}${image.url}`} alt="Hotel" /> 
            </div> : ""} 
            <div className="enquiry__overview-item-2" key={id}>
                <h4 className="heading--h4">{name}</h4>
                {stars ? <ul className="enquiry__overview-stars">
                    {stars.map(star => {
                        return(
                            <li className="enquiry__overview-star" key={star.id}>
                                <span className={`fa ${star.cssClass}`}><FontAwesomeIcon icon={require("@fortawesome/free-solid-svg-icons")[star.name]}></FontAwesomeIcon></span>
                            </li>
                        )
                    })}
                </ul> : null}
              
            </div>
        </section>
    )
}

Overview.propTypes = {
	image: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    stars: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired
};

export default Overview; 