import {PropTypes} from "prop-types";
import { BASE_URL } from '../../../constants/api';

const ImageSection = ({image, images, id}) => {
   console.log(image)
   
    return (
        <section className="specific__img-section" key={id}>
            <div className="specific__img-wrapper">
                <img src={image ? `${BASE_URL}${image.url}` : ""} alt="Hotel" />  
            </div> 
             <div className="specific__img-wrapper specific__img-wrapper--sm">
                {images ? images.map(img => {
                    return (
                        <div className="specific__img specific__img--sm">
                            <img src={`${BASE_URL}${img.url}`} alt="Hotel" /> 
                        </div>
                    ) 
                }) : null}
            </div>  
        </section>
    )
}

ImageSection.prototype = {
    image: PropTypes.string.isRequired, 
    id: PropTypes.number.isRequired
}

export default ImageSection;