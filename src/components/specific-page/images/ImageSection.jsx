import {PropTypes} from "prop-types";

const ImageSection = ({image, images, id}) => {
   
    return (
        <section className="specific__img-section" key={id}>
            <div className="specific__img-wrapper">
                <img className="specific__img-item" src={image ? `${image.url}` : ""} alt="Hotel" />  
            </div> 
             <div className="specific__img-wrapper specific__img-wrapper--sm">
                {images ? images.map((img) => {
                    return (
                        <div className="specific__img specific__img--sm" key={img.id}>
                            <img src={img.url} alt="Hotel" /> 
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