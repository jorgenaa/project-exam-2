import {useContext} from 'react';

//Components
import ErrorMsg from '../common/ErrorMsg';
import LoadingMsg from '../common/LoadingMsg';
import CustomCard from '../common/Card';
import HotelContext from '../contexts/HotelContext';

const ResultsList = () => {
    const hotelContext = useContext(HotelContext);
	const [hotels, loading, error] = hotelContext;

	if(loading) {
		return <LoadingMsg>Loading...</LoadingMsg>
	}
	if(error) {
		return <ErrorMsg>ERROR: {error}</ErrorMsg>
	}

    return (
        <section className="resultsList">
			
            	{hotels.map(hotel =>  {
					const {id, name, stars, description, imgUrl, price} = hotel;
					
					return( <CustomCard 
								id={id}
								name={name}
								stars={stars}
								description={description}
								image={imgUrl.url}
								price={price} 
							/>
						)
				})} 
        </section>
    )
}

export default ResultsList;
