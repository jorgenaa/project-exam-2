import { BASE_URL } from '../../constants/api'

const Overview= ({name, image, id}) => {

    return (
        <section className="enquiry__overview">
            <div className="enquiry__overview-item-1" key={id}>
                <img className="enquiry__overview-img" src={`${BASE_URL}${image.url}`} alt="Hotel" /> 
            </div>
            <div className="enquiry__overview-item-2" key={id}>
                <h4 className="heading--h4">{name}</h4>
            </div>
        </section>
    )
}

export default Overview; 