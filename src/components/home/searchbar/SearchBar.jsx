import {useContext } from 'react'; //useState

//import { Typeahead  } from 'react-bootstrap-typeahead';
import { Form } from 'react-bootstrap';

import AutoCompleteText from './AutoCompleteText';
import HotelContext from '../../contexts/HotelContext';

const SearchBar = () => {
    const hotelContext = useContext(HotelContext);
	const [hotels] = hotelContext;
    
    
    return (
            <div className="searchBar__input-container">
             <Form.Group>
               
             </Form.Group>
                <AutoCompleteText hotels={hotels} />
            </div>
    )
}

export default SearchBar;