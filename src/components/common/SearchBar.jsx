import {useContext, useState} from 'react';
import {useHistory } from 'react-router-dom';

import HotelContext from '../contexts/HotelContext';

const SearchBar = () => {
    const hotelContext = useContext(HotelContext);
	const [hotels] = hotelContext;
    const [filteredHotels, setFilteredHotels] = useState([]);
    let history = useHistory();

    const filterHotels = (e) => {
       const searchValue = e.target.value.toLowerCase();

       const filteredArray = hotels.filter(hotel=> {
           const lowerCaseName = hotel.acf.name.toLowerCase();

           if(lowerCaseName.includes(searchValue)) {
               return true
           }
               return false;
       });
       setFilteredHotels(filteredArray);
      
    }
    
   
    return (
            <div className="searchBar__input-container">
                <input 
                        className="searchBar__input" 
                        placeholder="Do an accommodation search..."
                        onChange={e => filterHotels(e)}
                        />
               
                <div className="searchBar__options">
                    {filteredHotels.map(hotel=> <div onClick={() => {history.push("/specific/" + hotel.id)}} ><p className="searchBar__options-item">{hotel.name}</p></div>)}
                </div>
            </div>
    )
}

export default SearchBar;