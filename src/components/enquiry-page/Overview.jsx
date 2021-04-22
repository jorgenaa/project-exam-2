import { BASE_URL } from '../../constants/api'

const Overview= ({name, stars, image, id}) => {

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
                                <span className={`fas ${star.name}`}></span>
                            </li>
                        )
                    })}
                </ul> : ""}
              
            </div>
        </section>
    )
}

export default Overview; 